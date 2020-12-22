import React from "react";
import { Box, Center, Button } from "@chakra-ui/react";
import { Appbar } from "./components/Appbar";
import { Maintext } from "./components/Maintext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Appbar">
        <Box p={3} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Appbar />
        </Box>
      </div>

      <div className="mainText">
        <Box p={5} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Center>
            <Maintext />
            <br/>
            <Button color="black">Sign up now!</Button>
          </Center>
        </Box>
      </div>
    </div>
  );
}

export default App;
