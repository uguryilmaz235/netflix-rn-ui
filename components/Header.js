import React from "react";

import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 25px 0 25px;
  width: 100%;
`;

const Logo = styled.Image`
  width: 20px;
  height: 40px;
`;

const MenuButton = styled.TouchableOpacity`
  align-items: center;
`;

const Menu = styled.Text`
  font-size: 18px;
  color: #fff;
  letter-spacing: 0.1px;
`;

const Header = () => {
  return (
    <Container>
      <MenuButton>
        <Logo resizeMode="contain" source={require("../assets/logo.png")} />
      </MenuButton>

      <MenuButton>
        <Menu>Series</Menu>
      </MenuButton>
      <MenuButton>
        <Menu>Movies</Menu>
      </MenuButton>
      <MenuButton>
        <Menu>My List</Menu>
      </MenuButton>
    </Container>
  );
};

export default Header;
