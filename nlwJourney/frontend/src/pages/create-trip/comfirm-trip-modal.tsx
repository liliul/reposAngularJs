import { Plus, User, X } from "lucide-react"
import { FormEvent } from "react"

interface ConfirmTripModalProps {
    closeComfirmModal: () => void
    setOnnerName: (name: string) => void
    setOnnerEmail: (email: string) => void
    createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
    closeComfirmModal,
    createTrip,
    setOnnerName,
    setOnnerEmail,
}: ConfirmTripModalProps) {
    return (
        <>
            <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
                <div className='w-[640px] rounded-xl py-5 px-6 bg-zinc-900 space-y-5'>
                    <div className='space-y-2'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-lg font-semibold'>Comfirmar a criação da viagem</h2>

                            <button type="button"
                                onClick={closeComfirmModal}
                            >
                                <X className='size-5 text-zinc-400' />
                            </button>
                        </div>

                        <p className='text-sm text-zinc-400'>
                            Para concluir a criação da viagem para <span className='font-semibold text-zinc-100'>Rio do sul, BR</span>.
                        </p>
                    </div>


                    <form onSubmit={createTrip} className='space-y-3'>
                        <div className='h-14 py-4 pl-3 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                            <User className='text-zinc-400 size-5' />
                            <input
                                onChange={event => setOnnerName(event.target.value)}
                                type="text" name='name' placeholder='Seu nome completo' className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1' />
                        </div>

                        <div className='h-14 py-4 pl-3 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                            <User className='text-zinc-400 size-5' />
                            <input
                                onChange={event => setOnnerEmail(event.target.value)}
                                type="email" name='email' placeholder='Seu email pessoal' className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1' />
                        </div>

                        <button
                            type='submit'
                            className='bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                            Comfirmar viagem
                            <Plus className='size-5' />
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}