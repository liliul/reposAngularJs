import {useState} from 'react';
import './modalHook.css'

export const useModal = () => {

	const [openModal, setOpenModal] = useState(false)
	const [conteudo, setConteudo] = useState("")

	const Modal = () => {

		return (
			<>
			<div className="modal">
				<div className="modal-content">
					<span onClick={() => setOpenModal(false)} className="modal-close">&times;</span>
					<p>{conteudo}</p>
				</div>
			</div>
			</>
		)
	}


	return {
		Modal: openModal ? Modal : null,
		show: function(conteudo){
			setOpenModal(true)
			setConteudo(conteudo)
		},
	}
}