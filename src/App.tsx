import React from 'react';
import CanvasComponent from "./components/CanvasComponent";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
      <ChakraProvider>
          <div style={{maxWidth: '1440px', margin: 'auto', overflow: "hidden",}}>
              <CanvasComponent />
          </div>
      </ChakraProvider>
  );
}

export default App;
