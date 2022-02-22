import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 5rem;
  color: purple;
`;

function App() {
  return (
    <div className="App">
      <Title>Hello World</Title>
    </div>
  );
}

export { App };
