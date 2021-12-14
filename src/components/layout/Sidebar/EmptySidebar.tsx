import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button, Container, Col, FormControl, InputGroup, Row} from 'react-bootstrap';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import SearchIcon from '@mui/icons-material/Search';
import './Sidebar.css';

export default function EmptySidebar(props: any) {
  const { isEmptySearch, isEmptyResults } = props;

  return (
    <Container fluid >
      {
        isEmptySearch && (
          <Col id="empty-sidebar">
            <SearchIcon style={{ fontSize: 150 }} className="large-search-icon text-secondary" />
            <h4 className="">
              No Active Search
            </h4>
            <p className="text-secondary">
              Type to start a search.
            </p>
        </Col>
        )
      }
      {
        isEmptyResults && (
          <Col id="empty-sidebar">
            <SearchOffIcon style={{ fontSize: 150 }} className="large-search-icon text-danger" />
            <h4 className="">
              No Results Found.
            </h4>
            <p className="text-secondary">
              Search for another organization ID.
            </p>
        </Col>
        )
      }
    </Container>
  );
}
