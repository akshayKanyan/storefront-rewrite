import React from "react";
import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${(props) => {
    return props.theme.fonts.h1 + "px";
  }};
`;

export const H2 = styled.h1`
  font-size: 30px;
`;

export const H3 = styled.h1`
  font-size: 20px;
`;
