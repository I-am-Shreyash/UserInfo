import UserInfo from "./UserInfo/UserInfo";
import Header from "./Components/Header/Header";
import "./App.css";
import { Stack, Container } from "@mui/material";
import { useState } from "react";


function App() {

const [currentPage , setCurrentPage] = useState('UserForm');

  return (
    <div className="App">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Header  currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>
        <Container maxWidth="false">
          <UserInfo currentPage = {currentPage}/>
        </Container>
      </Stack>
    </div>
  );
}

export default App;
