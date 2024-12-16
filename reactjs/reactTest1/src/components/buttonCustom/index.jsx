import './index.css';

export function ButtonCustom() {
    return (
        <>
            <section className="c-button-custom">
                <div className="c-content-custom">
                    <article className="text-custom">
                        <h2>Texto Customizando</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia</p>

                        <p>natus minus, culpa, ullam aperiam rerum est voluptas ducimus libero corrupti at. Molestiae officiis nihil odio sint veniam sit iure quaerat?</p>
                    </article>

                    <div className='div-button-custom'>
                        <button className="button-custom">Dark green</button>
                        
                        <button className="button-custom">Light blue</button>
                    </div>
                </div>
            </section>
        </>
    )
}