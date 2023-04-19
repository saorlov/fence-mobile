import React from 'react';
import { Container } from '@chakra-ui/react'
import CanvasComponent from "./components/CanvasComponent";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
      <ChakraProvider>
          <Container maxW='1440px' margin='auto'>
              <CanvasComponent />
          </Container>
      </ChakraProvider>
  );
}

export default App;
