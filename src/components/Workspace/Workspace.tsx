import React, { useEffect } from "react";
import { Container, Col } from 'react-bootstrap';
import Header from '../layout/Header/Header';
import Sidebar from '../layout/Sidebar/Sidebar';
import './Workspace.css';

export default function Workspace(props: any) {
  return (
    <div>
       <Header />
       <Container fluid>
         <Col sm={3} className="mt-3">
          <Sidebar />
         </Col>
         <Col>
          <Dashboard />
         </Col>
       </Container>
    </div>
  );
}
