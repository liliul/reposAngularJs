import style from './modal.module.css';

interface IModal {
    isOpen: boolean;
    setOpen: (isOepn: boolean) => void;
    Title: string;
    Description: string;
}

export function Modal({ isOpen, setOpen, Title, Description }: IModal) {
    if (isOpen) {
        return (
            <div className={style.background}>
                <div className={style.modal}>
                    <h2>{Title}</h2>
                    <p>{Description}</p>
                    <button onClick={() => setOpen(!isOpen)}>Exit modal</button>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
}