import React from 'react';
import CanvasComponent from "./components/CanvasComponent";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
      <ChakraProvider>
          <div style={{overflow: "hidden",}}>
              <CanvasComponent />
          </div>
      </ChakraProvider>
  );
}

export default App;
