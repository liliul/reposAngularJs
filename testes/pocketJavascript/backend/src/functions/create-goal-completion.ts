import dayjs from 'dayjs'
import { db } from '../db'
import { goals, goalsCompletions } from '../db/schema'
import { and, lte, sql, count, gte, eq } from 'drizzle-orm'

interface CreateGoalCompletionRequest {
	goalId: string
}

export async function createGoalCompletion({
	goalId,
}: CreateGoalCompletionRequest) {

	const firstDayOfWeek = dayjs().startOf('week').toDate()
	const lastDayOfWeek = dayjs().endOf('week').toDate()

	const goalCompletionsCounts = db.$with('goal_completion_counts').as(
		db.select({
			goalId: goalsCompletions.goalsId,
			completionCount: count(goalsCompletions.id)
		}).from(goalsCompletions).where(and(
			gte(goalsCompletions.createdAt, firstDayOfWeek),
			lte(goalsCompletions.createdAt, lastDayOfWeek),
			eq(goalsCompletions.goalsId)
		)).groupBy(goalsCompletions.goalsId)
	)

	const result = await db
		.with(goalCompletionsCounts)
		.select({
			desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
			completionCount: sql/*sql*/`
				COALESCE(${goalCompletionsCounts.completionCount}, 0)
			`.mapWith(Number),
		})
		.from(goals)
		.leftJoin(goalCompletionsCounts, eq(goalCompletionsCounts.goalId, goals.id))
	    .where(eq(goals.id, goalId))
	    .limit(1)

	const { completionCount, desiredWeeklyFrequency } = result[0]
	
	if (completionCount >= desiredWeeklyFrequency) {
		throw new Error('Goal already completed this week!')
	}    

	const insertResult = await db.insert(goalsCompletions).values({ goalId }).returning()
	const goalCompletion = insertResult[0]

	return {
		goalCompletion
	}

}