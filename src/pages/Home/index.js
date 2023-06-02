import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContainerA = styled.div`
  margin: 0;
  padding: 0;
  display: flex;

  @media (max-width: 1250px) {
    display: block;
  }
`;


const Title = styled.h1`
  color: #ffcc00;
  font-size: 35px;
  margin: 0;
  padding-top: 100px;
`;


const Paragraph = styled.p`
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 10px;
  margin: 50px 100px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  margin: 10px;
  padding: 10px 20px;
  width: 232px;
  color: #000;
  text-align: center;
  text-decoration: none;
  background-color: #ffcc00;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ff9900;
    color: #000;
  }
`;
const CardContainer = styled.div`
  width: 18rem;
  margin: 0 30px;
  border: none;
  transition: transform 0.3s ease-in-out;

&:hover {
  transform: scale(1.07);
}

@media (max-width: 1400px) {
  margin: 0 10px;
  }

  @media (max-width: 1250px) {
  margin: 30px 0;
  }
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  
  
`;

const CardTitle = styled.h5`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;



const Home = () => {
  return (
    <Container>
      <Title>Out Dated News</Title>
      <Paragraph>O Out Dated News é um site de notícias que traz informações e
        curiosidades sobre as décadas de 70, 80, 90 e 2000. Com uma interface
        inspirada nas épocas abordadas, o site oferece uma experiência
        nostálgica e informativa para quem é apaixonado por essas décadas.
      </Paragraph>

      <ContainerA>
        <CardContainer className="card">
          <CardImage src={process.env.PUBLIC_URL + '/imgs/70s.png'} className="" alt="" />
          <CardBody className="card-body">
            <CardTitle className="card-title">Década de 1970</CardTitle>
            <CardText className="card-text"> A Era da Contracultura e da Disco Fever</CardText>
            <StyledLink to="/anos70">70's</StyledLink>
          </CardBody>
        </CardContainer>

        <CardContainer className="card">
          <CardImage src={process.env.PUBLIC_URL + '/imgs/80.jpeg'} className="" alt="" />
          <CardBody className="card-body">
            <CardTitle className="card-title">Década de 1980</CardTitle>
            <CardText className="card-text">O Surgimento da Tecnologia e do Pop Culture</CardText>
            <StyledLink to="/anos80">80's</StyledLink>
          </CardBody>
        </CardContainer>

        <CardContainer className="card">
          <CardImage src={process.env.PUBLIC_URL + '/imgs/90a.jpeg'} className="" alt="" />
          <CardBody className="card-body">
            <CardTitle className="card-title">Década de 1990</CardTitle>
            <CardText className="card-text">O Boom do Grunge e da Cultura Alternativa</CardText>
            <StyledLink to="/anos90">90's</StyledLink>
          </CardBody>
        </CardContainer>

        <CardContainer className="card">
          <CardImage src={process.env.PUBLIC_URL + '/imgs/00.png'} className="" alt="" />
          <CardBody className="card-body">
            <CardTitle className="card-title">Década de 2000</CardTitle>
            <CardText className="card-text">A Ascensão da Tecnologia Digital e da Globalização</CardText>
            <StyledLink to="/anos2000">00's</StyledLink>
          </CardBody>
        </CardContainer>

      </ContainerA>
    </Container>
  );
}









export default Home;