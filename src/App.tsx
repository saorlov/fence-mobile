import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import AppComponent from "./components/AppComponent";

function App() {
  return (
      <ChakraProvider>
          <div style={{overflow: "hidden", position: 'relative'}}>
              <AppComponent />
          </div>
      </ChakraProvider>
  );
}

export default App;
