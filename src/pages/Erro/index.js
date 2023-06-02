import React from 'react';
import styled from 'styled-components';

const ErroContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Titulo = styled.h1`
  font-size: 60px;
  padding-top: 200px;
`;

const Mensagem = styled.p`
  font-size: 30px;
  padding-top: 50px;
`;

const ImagemErro = styled.img`
  width: 300px;
  height: auto;
  padding-top: 30px;
`;

const Erro = () => {
    return (
        <ErroContainer id='MensagemErro'>
            <Titulo>Desculpe!</Titulo>
            <Mensagem>Mas a página que você está tentando acessar não existe</Mensagem>
            <ImagemErro src="/imgs/erro-404.png" alt="Erro 404" />
        </ErroContainer>
    );
};

export default Erro;

