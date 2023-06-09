import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  min-height:100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${process.env.PUBLIC_URL}/imgs/sol.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const Card = styled.div`
  max-width: 900px;
  margin: 0 10px;
  margin-top:110px;
  margin-bottom: 1.5rem;
  background-color: #333;
  color: #fff;
  
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0;
`;

const Column = styled.div`
  flex: 0 0 auto;
  width: 100%;
  padding-right: 0;
  padding-left: 0;
  
  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: ${(props) => props.image ? '25%' : '75%'};
    padding-right: ${(props) => props.image ? '0' : '15px'};
    padding-left: ${(props) => props.image ? '0' : '15px'};
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.25rem 0 0 0.25rem;
`;

const CardBody = styled.div`
  padding: 1.25rem;
`;

const CardTitle = styled.h5`
  margin-bottom: 0.75rem;
`;

const CardText = styled.p`
  margin-bottom: 1rem;
`;

const Anos80 = () => {
  return (
    <Container>


      <Card className="card mb-3">
        <Row className="row g-0">
          <Column className="col-md-4" image>
            <Image src={process.env.PUBLIC_URL + '/imgs/80.jpeg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1980</CardTitle>
              <CardText className="card-text">
                no ano de 1980 foi o lançamento do primeiro disco rígido (HD) de 5,25 polegadas pela IBM.
                Esse disco rígido, conhecido como IBM 3380, tinha uma capacidade de armazenamento impressionante
                para a época, atingindo até 1,26 gigabytes. Esse marco representou um avanço significativo em termos
                de capacidade de armazenamento de dados.
              </CardText>
              <CardText>
              </CardText>
            </CardBody>
          </Column>
        </Row>
      </Card>

      <Card className="card mb-3">
        <Row className="row g-0">
          <Column className="col-md-4" image>
            <Image src={process.env.PUBLIC_URL + '/imgs/80.jpeg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1980</CardTitle>
              <CardText className="card-text">
                O boom dos computadores pessoais: Na década de 80, os computadores pessoais se tornaram mais populares e acessíveis.
                Empresas como IBM, Apple e Commodore lançaram modelos icônicos, como o IBM PC (1981) e o Apple Macintosh (1984),
                que introduziram interfaces gráficas e recursos inovadores.
              </CardText>
              <CardText>
              </CardText>
            </CardBody>
          </Column>
        </Row>
      </Card>

      <Card className="card mb-3">
        <Row className="row g-0">
          <Column className="col-md-4" image>
            <Image src={process.env.PUBLIC_URL + '/imgs/80.jpeg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1980</CardTitle>
              <CardText className="card-text">
                A popularização dos videogames: Os anos 80 foram a era de ouro dos videogames, com o lançamento de consoles icônicos como o Atari 2600 (1982)
                e o Nintendo Entertainment System (NES) (1985). Jogos clássicos como Super Mario Bros., Pac-Man e Tetris se tornaram imensamente populares.
              </CardText>
              <CardText>
              </CardText>
            </CardBody>
          </Column>
        </Row>
      </Card>

      <Card className="card mb-3">
        <Row className="row g-0">
          <Column className="col-md-4" image>
            <Image src={process.env.PUBLIC_URL + '/imgs/80.jpeg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1980</CardTitle>
              <CardText className="card-text">
                A revolução dos telefones celulares: A década de 80 marcou o início da expansão dos telefones celulares.
                Modelos como o Motorola DynaTAC 8000X (1983) e o Nokia Mobira Talkman (1984) introduziram a tecnologia móvel e abriram
                caminho para o que hoje conhecemos como smartphones.
              </CardText>
              <CardText>
              </CardText>
            </CardBody>
          </Column>
        </Row>
      </Card>

      <Card className="card mb-3">
        <Row className="row g-0">
          <Column className="col-md-4" image>
            <Image src={process.env.PUBLIC_URL + '/imgs/80.jpeg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1980</CardTitle>
              <CardText className="card-text">
                O surgimento da Internet comercial: Embora a Internet já existisse, foi na década de 80 que ela começou a se tornar comercialmente acessível.
                Em 1989, Tim Berners-Lee propôs a World Wide Web, que permitiu a navegação fácil por meio de links e impulsionou a popularização da Internet.
              </CardText>
              <CardText>
              </CardText>
            </CardBody>
          </Column>
        </Row>
      </Card>

      <Card className="card mb-3">
        <Row className="row g-0">
          <Column className="col-md-4" image>
            <Image src={process.env.PUBLIC_URL + '/imgs/80.jpeg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1980</CardTitle>
              <CardText className="card-text">
                O desenvolvimento dos discos compactos (CDs): Os anos 80 marcaram a transição dos antigos discos de vinil e fitas cassete para os modernos CDs.
                A tecnologia de armazenamento digital em CDs foi desenvolvida pela Philips e pela Sony, sendo lançada comercialmente em 1982.
              </CardText>
              <CardText>
              </CardText>
            </CardBody>
          </Column>
        </Row>
      </Card>

      <Card className="card mb-3">
        <Row className="row g-0">
          <Column className="col-md-4" image>
            <Image src={process.env.PUBLIC_URL + '/imgs/80.jpeg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1980</CardTitle>
              <CardText className="card-text">
                Os avanços na computação gráfica: A década de 80 testemunhou grandes avanços na área de computação gráfica. Filmes como "Tron" (1982) e
                "O Último Guerreiro das Estrelas" (1984) utilizaram efeitos visuais inovadores, e empresas como a Pixar começaram a explorar a animação por computador.
              </CardText>
              <CardText>
              </CardText>
            </CardBody>
          </Column>
        </Row>
      </Card>


    </Container>
  );
}

export default Anos80;