import { Link } from 'react-router'

import Container from "../components/container"
import { Welcome } from "../components/welcome"
import { ThemeMode } from "../components/infosContxtApi/themeMode"
import { Counter } from '../redux/createSlice1/Counter'
import Like from '../components/like'
import LazyLoading from '../components/lazyLoading'
import ToDoList from '../testes/useReducer'

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

                    <Link className='text-lg text-gray-800' to="pagina">Paginação</Link>

                    <LazyLoading />

                    <hr />

                    <ToDoList />
                </section>
            </Container>
        </>
    )
}

export default Home
