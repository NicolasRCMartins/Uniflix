import {ButtonContainer, Container} from "./styles";
import { Content } from "./styles";
import { Button } from "components/Button";
import { Text } from "components/Button/styles";

type IBannerProps = {
    url: string;
    imageUrl: string;
    title: string;
    description: string;
}

const Banner = ({url, imageUrl, title, description}: IBannerProps) => 
{
    return (
    <Container imageUrl={imageUrl}>
        <Content>
            <h1>{title}</h1>
            <Text>{description}</Text>
            <ButtonContainer>
                <Button>
                    Assistir agora
                </Button>
            </ButtonContainer>
        </Content>
    </Container>)
}

export { Banner };