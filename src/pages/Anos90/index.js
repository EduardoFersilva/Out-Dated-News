import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  min-height:100vh;
  margin: 0;
  display: flex;
  background-color:#f5e23a;
  flex-direction: column;
  align-items: center;
  background-image: url(${process.env.PUBLIC_URL}/imgs/vintage.jpg);
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

const Anos90 = () => {
  return (
    <Container>


      <Card className="card mb-3">
        <Row className="row g-0">
          <Column className="col-md-4" image>
            <Image src={process.env.PUBLIC_URL + '/imgs/90.jpeg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1990</CardTitle>
              <CardText className="card-text">
                No início da década de 1990, a tecnologia de telefonia móvel estava passando
                por um período de transformação significativa, preparando o terreno para a
                revolução da comunicação sem fio que viria nas décadas seguintes. A década de
                1990 testemunhou o desenvolvimento e aprimoramento das redes celulares, bem como
                a introdução de telefones móveis mais compactos e acessíveis.
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
            <Image src={process.env.PUBLIC_URL + '/imgs/90.jpeg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1990</CardTitle>
              <CardText className="card-text">
                A popularização da Internet: A década de 90 foi marcada pelo rápido crescimento e popularização da Internet.
                Surgiram os primeiros provedores de acesso à Internet comerciais, como AOL, CompuServe e Prodigy. A World Wide Web se
                tornou acessível para o público em geral, impulsionando a comunicação online, o comércio eletrônico e o compartilhamento de informações.
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
            <Image src={process.env.PUBLIC_URL + '/imgs/90.jpeg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1990</CardTitle>
              <CardText className="card-text">
                O surgimento dos motores de busca: Com o rápido crescimento da Internet, houve a necessidade de organizar e pesquisar informações online.
                Nessa época, surgiram motores de busca populares, como o Yahoo! (1994) e o Google (1998), que revolucionaram a forma como as pessoas encontravam
                informações na web.
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
            <Image src={process.env.PUBLIC_URL + '/imgs/90.jpeg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1990</CardTitle>
              <CardText className="card-text">
                A revolução dos telefones celulares: Na década de 90, os telefones celulares se tornaram mais compactos, acessíveis e populares.
                Houve uma rápida evolução dos tijolões dos anos 80 para dispositivos mais leves e portáteis. Modelos como o Nokia 5110 e o Motorola StarTAC
                ganharam popularidade.
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
            <Image src={process.env.PUBLIC_URL + '/imgs/90.jpeg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1990</CardTitle>
              <CardText className="card-text">
                O boom dos computadores domésticos: A década de 90 viu um aumento significativo na adoção de computadores domésticos.
                Os PCs se tornaram mais acessíveis e populares, com o surgimento de marcas como Dell e Gateway. Além disso, o sistema operacional Windows 95,
                lançado pela Microsoft, trouxe uma interface gráfica amigável e fácil de usar.
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
            <Image src={process.env.PUBLIC_URL + '/imgs/90.jpeg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1990</CardTitle>
              <CardText className="card-text">
                O advento dos CDs graváveis (CD-R): Os CDs graváveis se tornaram amplamente disponíveis durante a década de 90.
                Essa tecnologia permitia que os usuários gravassem seus próprios CDs em casa, possibilitando a criação de mixtapes personalizadas,
                backups de dados e distribuição de conteúdo digital.
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
            <Image src={process.env.PUBLIC_URL + '/imgs/90.jpeg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1990</CardTitle>
              <CardText className="card-text">
                O surgimento dos videogames em 3D: Os anos 90 foram marcados pelo avanço dos gráficos 3D nos videogames.
                Consoles como o Super Nintendo Entertainment System (SNES), Sega Saturn e Sony PlayStation introduziram jogos com gráficos tridimensionais,
                como "Super Mario 64" e "Tomb Raider".
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

export default Anos90;