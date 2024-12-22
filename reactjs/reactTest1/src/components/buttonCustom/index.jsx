import { useState } from 'react';
import './index.css';

export function ButtonCustom() {
    const [mudarCorBg, setMudarCorBg] = useState('c-content-custom')
    const [mudarCorTxt, setMudarCorTxt] = useState('text-custom')

    return (
        <>
            <section className="c-button-custom">
                <div className={mudarCorBg}>
                    <article className={mudarCorTxt}>
                        <h2>Texto Customizando</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia</p>

                        <p>natus minus, culpa, ullam aperiam rerum est voluptas ducimus libero corrupti at. Molestiae officiis nihil odio sint veniam sit iure quaerat?</p>
                    </article>

                    <div className='div-button-custom'>
                        <button onClick={() => { setMudarCorBg('c-content-custom-dark'), setMudarCorTxt('text-custom-dark')}} className="button-custom">Dark green</button>
                        
                        <button onClick={() => { setMudarCorBg('c-content-custom-light'), setMudarCorTxt('text-custom-light')}} className="button-custom">Light blue</button>
                    </div>
                </div>
            </section>
        </>
    )
}