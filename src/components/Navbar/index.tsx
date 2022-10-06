import { Container, Content, Icon } from "./styles"
import logoImage from "images/logo.svg"
import homeImage from "images/home.svg"
import moviesImage from "images/movies.svg"
import tvImage from "images/tv.svg"
import favImage from "images/fav.svg"

const Navbar = () => {
    return <Container>
        <Icon src={logoImage} alt="svg" />

        <Content>
            <Icon src={homeImage} alt="svg" />
            <Icon src={moviesImage} alt="svg" />
            <Icon src={tvImage} alt="svg" />
            <Icon src={favImage} alt="svg" />
        </Content>
    </Container>
}

export {Navbar}