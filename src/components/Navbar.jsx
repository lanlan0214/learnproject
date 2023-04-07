import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display : flex;
  justify-content : center;

  @media only screen and (max-width: 768px) {
    width : 100%;
  }
`;

const Container = styled.div`
  width : 1400px;
  display : flex;
  justify-content : space-between;
  align-items : center;
  padding : 10px 0px;

  @media only screen and (max-width: 768px) {
    width : 100%;
    padding : 10px;
  }
`;

const Links = styled.div`
  display : flex;
  align-items : center;
  gap : 50px;

  
`;

const Logo = styled.img`
  height : 50px;
`;
const Icons = styled.div`
  display : flex;
  align-items : center;
  gap : 20px;
`;

const List = styled.ul`
  display : flex;
  gap : 20px;
  list-style : none;

  @media only screen and (max-width: 768px) {
    display : none;
  }
`;
const ListItem = styled.li`
  cursor : pointer;
`;

const Icon = styled.img`
  width : 20px;
  cursor : pointer;
`;

const Button = styled.button`
  width : 100px;
  padding : 10px;
  background-color : #da4ea2;
  color : white;
  border : none;
  border-radius : 5px;
  cursor : pointer;
`;


const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo3.png" />
          <List>
            <ListItem>首頁</ListItem>
            <ListItem>工作室</ListItem>
            <ListItem>創作</ListItem>
            <ListItem>聯繫方式</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>現在聘用</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar