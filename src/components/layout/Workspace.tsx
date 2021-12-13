import React, { useEffect } from "react";
import { Container, Col } from 'react-bootstrap';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import './Workspace.css';

export default function Workspace(props: any) {
  return (
    <div>
       <Header />
       <Container fluid>
         <Col sm={3} className="mt-2">
          <Sidebar />
         </Col>
         <Col>
          {/* <Dashboard /> */}
         </Col>
       </Container>
    </div>
  );
}
