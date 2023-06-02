import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  display: flex;
  background-color: #333;
  flex-direction: column;
  align-items: center;
`;

const Titulo = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  padding-top: 200px;
  color: #ffcc00;
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Campo = styled.input`
  padding: 10px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    padding: 8px;
    margin-bottom: 8px;
    margin: 15px;
  }
`;

const Botao = styled.button`
  padding: 10px;
  margin-top: 20px;
  background-color: #ffcc00;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 480px) {
    padding: 8px;
    margin: 15px;
  }
`;

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com o envio do formulário
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Senha:', senha);
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  return (
    <Container>
      <Titulo>Faça o seu cadastro</Titulo>
      <Formulario onSubmit={handleSubmit}>
        <Campo type="text" placeholder="Nome" value={nome} onChange={handleNomeChange} />
        <Campo type="email" placeholder="E-mail" required value={email} onChange={handleEmailChange} />
        <Campo type="password" placeholder="Senha" required value={senha} onChange={handleSenhaChange} />
        <Botao type="submit">Cadastrar</Botao>
      </Formulario>
    </Container>
  );
};

export default Cadastro;

