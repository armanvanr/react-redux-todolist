import React from "react";
import styled from "styled-components";

const ContainerLayout = styled.div`
  max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
`;

const Layout = (children) => {
  return <ContainerLayout>{children}</ContainerLayout>;
};

export default Layout;
