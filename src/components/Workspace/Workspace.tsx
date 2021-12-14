import React from "react";
import { useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';

import Header from '../layout/Header/Header';
import Sidebar from '../layout/Sidebar/Sidebar';
import Dashboard from "../layout/Dashboard/Dashboard";
import EmptyDashboard from "../layout/Dashboard/EmptyDashboard";

import './Workspace.css';

export default function Workspace() {
  const selectedOrganization = useSelector((state: any) => state.app.organizationSelected);
  const searchResults = useSelector((state:any) => state.app.organizationsResults);

  console.log("electedOrganization", selectedOrganization);
  return (
    <div>
       <Header />
       <Container fluid>
         <Row className="d-flex flex-row">
          <Col sm={3} className="border-end">
            <Sidebar />
          </Col>
          <Col sm={true} className="dashboard-container">
            {
              selectedOrganization && Object.keys(selectedOrganization).length !== 0 && <Dashboard />
            }
            {
              searchResults.length === 0 && Object.keys(selectedOrganization).length === 0 && <EmptyDashboard isEmpty={true} />
            }
            {
              searchResults.length > 0 && Object.keys(selectedOrganization).length === 0 && <EmptyDashboard isFreshSearch={true} />
            }
          </Col>
         </Row>
       </Container>
    </div>
  );
}
