import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const TopBarStyled = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
max-width:1280px;
`;
const Container = styled.div`
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
`;
const ContainerLeft = styled(Container)` 
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
`;
const ContainerCenter = styled(Container)`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;
const ContainerRight = styled(Container)`
display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;
const Span = styled.span`
cursor: pointer;
`;
const Topics = styled(Span)`
margin-right: 25%;
font-weight: bold;
`
const Search = styled(Topics)``;

const General = styled(Span)`
cursor: pointer;
margin-right: 5%;
:hover {
  text-decoration: underline;
}
`
const LogIn = styled(Span)``
const Brownbag = styled(General)``;
const Random = styled(General)``;
const Music = styled(General)``;
const Announcements = styled(General)``;
const TopBar = () => {
  return (
    <TopBarStyled>
      <Container>
        <ContainerLeft>
          <Topics>TOPICS</Topics><Search>SEARCH</Search>
        </ContainerLeft>
        <ContainerCenter>
          <General>GENERAL</General><Brownbag>BROWNBAG</Brownbag><Random>RANDOM</Random><Music>MUSIC</Music><Announcements>ANNOUNCEMENTS</Announcements>
        </ContainerCenter>
        <ContainerRight>
          <LogIn>LOG IN</LogIn>
        </ContainerRight>
      </Container>
  </TopBarStyled>
  )
}


export default TopBar;