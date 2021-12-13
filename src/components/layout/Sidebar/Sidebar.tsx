import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Button, Container, Col, FormControl, InputGroup, Row} from 'react-bootstrap';
import { searchOrganizationByIdResults } from '../../../actions/handler/organization-handler';
import Cards from '../../Widgets/Cards';
import SearchIcon from '@mui/icons-material/Search';
import './Sidebar.css';

export default function Sidebar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();
  const searchResults = useSelector((state:any) => state.app.organizationsResults);

  const dispatch = useDispatch();
  const debounceInput = (delay: number) => {
    if (timerId) clearTimeout(timerId);
    const timer = setTimeout(() => handleSearch(searchQuery), delay);
    setTimerId(timer);
  };

  const handleSearch = (searchQuery: string) => {
    if (searchQuery !== "") {
      dispatch(searchOrganizationByIdResults(searchQuery));
    }
  };

  const renderResults = () => {
    const resultCards = [];
    if (searchResults.length > 0) {
      resultCards.push(searchResults.map((result: any) => {
        const { avatar_url, description, id, login, repos_url} = result;
        return (
          <div
            key={id}
            className="mt-2"
          >
            <Cards
              primaryHeader={login}
              description={description}
              repos={repos_url}
              avatar={avatar_url}
            />
          </div>

        );
      }))
    }
    return resultCards;
  }

  useEffect(() => {
    debounceInput(300);
  },[searchQuery]);

  return (
    <Container fluid>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search by organization ID..."
          aria-label="Search by organization ID..."
          aria-describedby="basic-addon1"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2">
          <SearchIcon/>
        </Button>
      </InputGroup>
      Showing {searchResults.length} Results
      {
        renderResults()
      }
    </Container>
  );
}
