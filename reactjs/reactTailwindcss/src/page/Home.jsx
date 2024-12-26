import Container from "../components/container"
import { Welcome } from "../components/welcome"
import { ThemeMode } from "../components/infosContxtApi/themeMode"

const Home = () => {
    return (
        <>
            <Container>
                <Welcome />
                <ThemeMode />

                <section className="rounded-md w-[850px]">
                    <h3>Lista de Links</h3>
                </section>
            </Container>
        </>
    )
}

export default Home