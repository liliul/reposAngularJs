import {Link} from 'react-router'

import Container from "../components/container"
import { Welcome } from "../components/welcome"
import { ThemeMode } from "../components/infosContxtApi/themeMode"
import { Counter } from '../redux/createSlice1/Counter'
import Like from '../components/like'

const Home = () => {
    return (
        <>
            <Container>
                <Welcome />
                <ThemeMode />

                <section className="rounded-md w-[850px]">
                    <h3>Lista de Links</h3>
                    <Link to="/login">Login</Link>

                    <Like />

                    <div className='bg-blue-500'>
                        <Counter />
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Home