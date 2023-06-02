import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  min-height:100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${process.env.PUBLIC_URL}/imgs/espiral.jpg);
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

const SmallText = styled.small`
  color: #6c757d;
`;

const Anos70 = () => {
  return (
    <Container>


      <Card className="card mb-3">
        <Row className="row g-0">
          <Column className="col-md-4" image>
            <Image src={process.env.PUBLIC_URL + '/imgs/70s.png'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1970</CardTitle>
              <CardText className="card-text">
                Após o primeiro homem pisar na lua, nos anos seguintes os avanços na
                importantes, como por exemplo</CardText>
              <CardText>
                <SmallText className="text-body-secondary">Last updated 3 mins ago</SmallText>
              </CardText>
            </CardBody>
          </Column>
        </Row>
      </Card>


      <Card className="card mb-3">
        <Row className="row g-0">
          <Column className="col-md-4" image>
            <Image src={process.env.PUBLIC_URL + '/imgs/70s.png'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1970</CardTitle>
              <CardText className="card-text">
                O surgimento dos primeiros computadores pessoais: Na década de 70, foram lançados
                alguns dos primeiros computadores pessoais, como o Altair 8800 (1974) e o Apple II (1977).
                Esses computadores marcaram o início da revolução dos computadores pessoais, tornando a tecnologia mais acessível às pessoas comuns.
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
            <Image src={process.env.PUBLIC_URL + '/imgs/70s.png'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1970</CardTitle>
              <CardText className="card-text">
                A criação da Internet: Embora a internet tenha suas raízes nas décadas anteriores,
                a década de 70 foi um período crucial para seu desenvolvimento. Em 1971, Ray Tomlinson enviou o primeiro e-mail da história,
                e em 1974 foi introduzido o protocolo TCP/IP, a base da internet como a conhecemos hoje.
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
            <Image src={process.env.PUBLIC_URL + '/imgs/70s.png'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1970</CardTitle>
              <CardText className="card-text">
                A invenção do microprocessador: Em 1971, a Intel lançou o primeiro microprocessador comercialmente viável,
                o Intel 4004. Essa inovação revolucionou a indústria de computadores, permitindo que mais poder de processamento
                fosse integrado em chips menores.
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
            <Image src={process.env.PUBLIC_URL + '/imgs/70s.png'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1970</CardTitle>
              <CardText className="card-text">
                O nascimento dos videogames: A década de 70 foi marcada pelo surgimento dos primeiros videogames populares.
                Em 1972, a Atari lançou o jogo "Pong", que se tornou um sucesso instantâneo e abriu caminho para a indústria de jogos eletrônicos.
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
            <Image src={process.env.PUBLIC_URL + '/imgs/70s.png'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1970</CardTitle>
              <CardText className="card-text">
                O desenvolvimento dos primeiros celulares: Embora os telefones celulares não tenham se tornado amplamente populares até as décadas seguintes,
                a década de 70 viu os primeiros avanços nessa tecnologia. Em 1973, Martin Cooper, da Motorola, fez a primeira chamada de um telefone celular.
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
            <Image src={process.env.PUBLIC_URL + '/imgs/70s.png'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">1970</CardTitle>
              <CardText className="card-text">
                O lançamento do Walkman: Em 1979, a Sony lançou o Walkman, um dispositivo portátil de reprodução de música que revolucionou
                a forma como as pessoas ouviam música. O Walkman popularizou a ideia de música portátil e tornou-se um ícone cultural da década.
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

export default Anos70;