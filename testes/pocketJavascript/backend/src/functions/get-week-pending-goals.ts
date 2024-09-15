import dayjs from 'dayjs'
import weekOfYears from 'dayjs/plugin/weekOfYear'
import { db } from '../db'
import { goals, goalsCompletions } from '../db/schema'
import { and, lte, sql, count, gte, eq } from 'drizzle-orm'
import { title } from 'process'

dayjs.extend(weekOfYears)

export async function getWeekPendingGoals() {
	const firstDayOfWeek = dayjs().startOf('week').toDate()
	const lastDayOfWeek = dayjs().endOf('week').toDate()

	const goalsCreateUpToWeek = db.$with('goals_created_up_to_week').as(
		db.select({
			id: goals.id,
			title: goals.title,
			desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
			createdAt: goals.createdAt,
		}).from(goals).where(lte(goals.createdAt, lastDayOfWeek))
	)

	const goalCompletionsCounts = db.$with('goal_completion_counts').as(
		db.select({
			goalId: goalsCompletions.goalsId,
			completionCount: count(goalsCompletions.id)
		}).from(goalsCompletions).where(and(
			gte(goalsCompletions.createdAt, firstDayOfWeek),
			lte(goalsCompletions.createdAt, lastDayOfWeek)
		)).groupBy(goalsCompletions.goalsId)
	)

	const pendingGoals = await db.with(goalsCreateUpToWeek, goalCompletionsCounts)
		.select({
			id: goalsCreateUpToWeek.id,
			title: goalsCreateUpToWeek.title,
			desiredWeeklyFrequency: goalsCreateUpToWeek.desiredWeeklyFrequency,
			completionCount: sql/*sql*/`
				COALESCE(${goalCompletionsCounts.completionCount}, 0)
			`.mapWith(Number),
		}).from(goalsCreateUpToWeek).leftJoin(
			goalCompletionsCounts,
			eq(goalCompletionsCounts.goalId, goalsCreateUpToWeek.id)
		)

		return {
			pendingGoals,
		}
}
