import React, { useEffect } from "react";
import { Container } from 'react-bootstrap';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

export default function Workspace() {
  return (
    <div>
       <Header />
       <Container fluid>
          <Sidebar />
          {/* <Dashboard /> */}
       </Container>
    </div>
  );
}
