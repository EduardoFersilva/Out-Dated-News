import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsHouseDoorFill, BsBoxArrowInRight } from 'react-icons/bs'; // Importe os ícones desejados

const HeaderContainer = styled.header`
  background-color: #191919;
  padding: 20px;
  z-index: 2;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #fff;
  margin-right: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: #ffcc00;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <BsHouseDoorFill size={24} /> { }
        Home
      </StyledLink>
      <StyledLink to="/cadastro">
        <BsBoxArrowInRight size={24} /> { }
        Cadastro
      </StyledLink>
    </HeaderContainer>
  );
}

export default Header;
