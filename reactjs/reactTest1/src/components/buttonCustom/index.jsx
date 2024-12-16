import { useState } from 'react';
import './index.css';

export function ButtonCustom() {
    const [mudarCor, setMudarCor] = useState('c-content-custom')

    return (
        <>
            <section className="c-button-custom">
                <div className={mudarCor}>
                    <article className="text-custom">
                        <h2>Texto Customizando</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia</p>

                        <p>natus minus, culpa, ullam aperiam rerum est voluptas ducimus libero corrupti at. Molestiae officiis nihil odio sint veniam sit iure quaerat?</p>
                    </article>

                    <div className='div-button-custom'>
                        <button onClick={() => { setMudarCor('c-content-custom-dark')}} className="button-custom">Dark green</button>
                        
                        <button onClick={() => { setMudarCor('c-content-custom-light')}} className="button-custom">Light blue</button>
                    </div>
                </div>
            </section>
        </>
    )
}