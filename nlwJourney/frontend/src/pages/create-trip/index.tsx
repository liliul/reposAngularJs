import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './comfirm-trip-modal'
import { DestinationAndDateSteps } from './steps/destination-and-date-steps'
import { InviteGuestsStep } from './steps/ivite-guests-step'


export function CreateTripPage() {
    const navigate = useNavigate()

    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
    const [emailsToInvite, setEmailsToInvite] = useState([
        'Gokufirestore@email.com',
        'narutofirestore@email.com'
    ])
    const [isComfirmTripModalOpen, setIsComfirmTripModalOpen] = useState(false)


    function openGuestInput() {
        setIsGuestsInputOpen(true)
    }
    function closeGuestInput() {
        setIsGuestsInputOpen(false)
    }
    function openGuestModal() {
        setIsGuestsModalOpen(true)
    }
    function closeGuestModal() {
        setIsGuestsModalOpen(false)
    }
    function adNewEmailToIvite(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const email = data.get('email')?.toString()

        if (!email) {
            return
        }

        if (emailsToInvite.includes(email)) {
            return
        }
        setEmailsToInvite([
            ...emailsToInvite,
            email
        ])

        event.currentTarget.reset()
    }
    function removeEmailFormInvites(emailToRemove: string) {
        const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

        setEmailsToInvite(newEmailList)
    }
    function openComfirmModal() {
        setIsComfirmTripModalOpen(true)
    }
    function closeComfirmModal() {
        setIsComfirmTripModalOpen(false)
    }

    function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        navigate('/trips/123')
    }
    return (
        <>
            <section className='h-screen flex items-center justify-center'>
                <div className='max-w-3xl w-full px-6 text-center space-y-10'>
                    <div>
                        <p className='text-zinc-300 text-lg'>Covide seus amigos e planejar sua proxima viagem!</p>
                    </div>

                    <article className='space-y-4'>
                        <DestinationAndDateSteps
                            isGuestsInputOpen={isGuestsInputOpen}
                            closeGuestInput={closeGuestInput}
                            openGuestInput={openGuestInput}
                        />

                        {isGuestsInputOpen && (
                            <InviteGuestsStep
                                emailsToInvite={emailsToInvite}
                                openComfirmModal={openComfirmModal}
                                openGuestModal={openGuestModal}
                            />
                        )}
                    </article>

                    <p className='text-sm text-zinc-500'>
                        Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
                        com nossos <a className='text-zinc-300 underline' href="#">termos de uso</a> e <a className='text-zinc-300 underline' >politicas de privacidade</a>
                    </p>
                </div>

                {isGuestsModalOpen && (
                    <InviteGuestsModal
                        closeGuestModal={closeGuestModal}
                        emailsToInvite={emailsToInvite}
                        removeEmailFormInvites={removeEmailFormInvites}
                        adNewEmailToIvite={adNewEmailToIvite}
                    />
                )}

                {isComfirmTripModalOpen && (
                    <ConfirmTripModal
                        closeComfirmModal={closeComfirmModal}
                        createTrip={createTrip}
                    />
                )}
            </section>
        </>
    )
}

