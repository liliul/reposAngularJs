import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
    openGuestModal: () => void
    openComfirmModal: () => void
    emailsToInvite: string[]
}

export function InviteGuestsStep({
    openComfirmModal,
    openGuestModal,
    emailsToInvite
}: InviteGuestsStepProps) {
    return (
        <>
            <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3'>
                <button type="button"
                    onClick={openGuestModal}
                    className='flex items-center gap-2 flex-1 text-left'>
                    <UserRoundPlus className='size-5 text-zinc-400' />
                    {emailsToInvite.length > 0 ? (
                        <span className='text-lg text-zinc-100 flex-1'>
                            {emailsToInvite.length} pessoas(s) convidado(s)
                        </span>
                    ) : (
                        <span className='text-lg text-zinc-400 flex-1'>
                            Quem estara na viagem?
                        </span>
                    )}
                </button>

                <div className='m-px h-6 bg-zinc-800'></div>

                <button
                    onClick={openComfirmModal}
                    className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                    Confirma viagem
                    <ArrowRight className='size-5' />
                </button>
            </div>
        </>
    )
}