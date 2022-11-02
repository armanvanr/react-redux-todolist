import React from "react";
import styled from "styled-components";

const ContainerHeader = styled.div`
    border: 1px solid #ddd;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding: 0 20px;
    
`;

const Header = () => {
  return (
    <ContainerHeader>
      <div>My Todo List Week 3</div>
      <div>React</div>
    </ContainerHeader>
  );
};
export default Header;
