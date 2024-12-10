import { useModal } from "../../hook/modalHook";

export function ModalHook() {
    const {Modal, show} = useModal()

    function handleModal() {
        show('Modal Hook Som Goku VS Naruto Uzumaki')
    }
    return (
        <>
            {Modal ? <Modal /> : null }
            <button onClick={handleModal}>Show Modal</button>
        </>
    )
}