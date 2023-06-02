import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  min-height:100vh;
  margin: 0;
  display: flex;
  background-color:#e18040;
  flex-direction: column;
  align-items: center;
  background-image: url(${process.env.PUBLIC_URL}/imgs/pc.jpg);
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


const Anos2000 = () => {
  return (
    <Container>


      <Card className="card mb-3">
        <Row className="row g-0">
          <Column className="col-md-4" image>
            <Image src={process.env.PUBLIC_URL + '/imgs/00s.jpg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">2000</CardTitle>
              <CardText className="card-text">
              </CardText>
              No ano 2000, a Microsoft lançou o sistema operacional Windows 2000,
              representando um marco importante na evolução da computação empresarial.
              Esse sistema operacional foi projetado para atender às demandas das empresas
              e organizações, fornecendo maior confiabilidade, segurança e escalabilidade em
              comparação com as versões anteriores.
              <CardText>
              </CardText>
            </CardBody>
          </Column>
        </Row>
      </Card>

      <Card className="card mb-3">
        <Row className="row g-0">
          <Column className="col-md-4" image>
            <Image src={process.env.PUBLIC_URL + '/imgs/00s.jpg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">2000</CardTitle>
              <CardText className="card-text">
              </CardText>
              A ascensão dos smartphones: A década de 2000 foi marcada pela popularização dos smartphones.
              O lançamento do BlackBerry 5810 em 2002 e do iPhone em 2007 revolucionou a indústria de dispositivos móveis.
              Esses dispositivos combinavam telefonia, internet, e-mail e aplicativos em um único dispositivo portátil.
              <CardText>
              </CardText>
            </CardBody>
          </Column>
        </Row>
      </Card>

      <Card className="card mb-3">
        <Row className="row g-0">
          <Column className="col-md-4" image>
            <Image src={process.env.PUBLIC_URL + '/imgs/00s.jpg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">2000</CardTitle>
              <CardText className="card-text">
              </CardText>
              Redes sociais: As redes sociais se tornaram uma parte essencial da vida cotidiana durante a década de 2000.
              O lançamento do MySpace em 2003 e do Facebook em 2004 permitiu que as pessoas se conectassem, compartilhassem conteúdo e se
              comunicassem virtualmente em uma escala sem precedentes.
              <CardText>
              </CardText>
            </CardBody>
          </Column>
        </Row>
      </Card>

      <Card className="card mb-3">
        <Row className="row g-0">
          <Column className="col-md-4" image>
            <Image src={process.env.PUBLIC_URL + '/imgs/00s.jpg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">2000</CardTitle>
              <CardText className="card-text">
              </CardText>
              O surgimento do YouTube: Em 2005, o YouTube foi fundado e se tornou a plataforma líder para compartilhamento de vídeos online.
              Isso permitiu que as pessoas carregassem, assistissem e compartilhassem vídeos de maneira fácil, democratizando a produção de conteúdo audiovisual.
              <CardText>
              </CardText>
            </CardBody>
          </Column>
        </Row>
      </Card>

      <Card className="card mb-3">
        <Row className="row g-0">
          <Column className="col-md-4" image>
            <Image src={process.env.PUBLIC_URL + '/imgs/00s.jpg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">2000</CardTitle>
              <CardText className="card-text">
              </CardText>
              Expansão da banda larga: Durante a década de 2000, houve uma rápida expansão da tecnologia de banda larga,
              permitindo conexões de internet mais rápidas e estáveis. Isso impulsionou o crescimento de serviços online, como streaming de vídeo,
              jogos online e compartilhamento de arquivos.
              <CardText>
              </CardText>
            </CardBody>
          </Column>
        </Row>
      </Card>

      <Card className="card mb-3">
        <Row className="row g-0">
          <Column className="col-md-4" image>
            <Image src={process.env.PUBLIC_URL + '/imgs/00s.jpg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">2000</CardTitle>
              <CardText className="card-text">
              </CardText>
              Avanços na computação em nuvem: A computação em nuvem começou a ganhar destaque na década de 2000.
              Empresas como Amazon com o Amazon Web Services (AWS), Google com o Google Cloud Platform (GCP) e Microsoft com o Azure
              ofereceram serviços de armazenamento e processamento em nuvem acessíveis e escaláveis.
              <CardText>
              </CardText>
            </CardBody>
          </Column>
        </Row>
      </Card>

      <Card className="card mb-3">
        <Row className="row g-0">
          <Column className="col-md-4" image>
            <Image src={process.env.PUBLIC_URL + '/imgs/00s.jpg'} className="" alt="" />
          </Column>
          <Column className="col-md-8">
            <CardBody className="card-body">
              <CardTitle className="card-title">2000</CardTitle>
              <CardText className="card-text">
              </CardText>
              O boom das mídias digitais: A década de 2000 testemunhou a transição de mídias físicas para mídias digitais.
              CDs e DVDs foram substituídos por arquivos digitais, como MP3 e MP4. A música digital se tornou popular com o lançamento do
              iPod pela Apple em 2001 e o iTunes Store em 2003.
              <CardText>
              </CardText>
            </CardBody>
          </Column>
        </Row>
      </Card>
    </Container>
  );
}

export default Anos2000;