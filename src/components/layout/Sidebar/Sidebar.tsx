import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { searchOrganizationByIdResults, clearSearchResults } from '../../../actions/handler/organization-handler';
import Cards from '../../Widgets/Cards';
import EmptySidebar from "./EmptySidebar";
import config from "../../../constants/config";
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Sidebar.css';

export default function Sidebar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();
  const [isFirstPage, setIsFirstPage] = useState<boolean>(true);
  const [previousPageLastOrgId, setpreviousPageLastOrgId] = useState<number>();
  const [previousPagesFirstOrdIds, setPreviousPagesFirstOrdIds] = useState<number[]>([]);

  const searchResults = useSelector((state:any) => state.app.organizationsResults);

  const dispatch = useDispatch();

  const debounceInput = (delay: number) => {
    if (timerId) clearTimeout(timerId);
    const timer = setTimeout(() => handleSearch(searchQuery), delay);
    setTimerId(timer);
  };

  const handleSearch = (searchQuery: string) => {
    setIsFirstPage(true);
    if (searchQuery !== "") {
      dispatch(searchOrganizationByIdResults(searchQuery));
    } else {
      dispatch(clearSearchResults());
    }
  };

  const handleNextPagination = () => {
    if (isFirstPage) setIsFirstPage(false);
    const newPreviousPagesFirstOrgIds = [...previousPagesFirstOrdIds];
    newPreviousPagesFirstOrgIds.unshift(searchResults[0].id);

    setPreviousPagesFirstOrdIds(newPreviousPagesFirstOrgIds);
    dispatch(searchOrganizationByIdResults(previousPageLastOrgId));
  };

  const handlePreviousPagination = () => {
    dispatch(searchOrganizationByIdResults(previousPagesFirstOrdIds[0]));
    const newPreviousPagesFirstOrgIds = [...previousPagesFirstOrdIds];
    newPreviousPagesFirstOrgIds.shift();
    setPreviousPagesFirstOrdIds(newPreviousPagesFirstOrgIds);
    if (newPreviousPagesFirstOrgIds.length === 0) {
      setIsFirstPage(true);
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
    debounceInput(750);
  },[searchQuery]);

  useEffect(() => {
    if (searchResults.length > 0) {
      setpreviousPageLastOrgId(searchResults[searchResults.length -1].id)
    }
  }, [searchResults[searchResults.length -1]])

  useEffect(() => {
    if (searchResults.length > 0) {
      setpreviousPageLastOrgId(searchResults[searchResults.length -1].id)
    }
  }, [searchResults[searchResults.length -1]])

  return (
    <Container fluid className="full-height border-end">
      <InputGroup className="psb-3">
        <FormControl
          placeholder="Search by organization ID..."
          aria-label="Search by organization ID..."
          aria-describedby="basic-addon1"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={()=>handleSearch(searchQuery)
        }>
          <SearchIcon/>
        </Button>
      </InputGroup>
      {
        searchQuery !== "" && (
          <div className="text-end">
            Showing {searchResults.length} Results
          </div>
        )
      }
      {
        searchResults.length === 0 && !searchQuery && (
          <EmptySidebar isEmptySearch={true} />
        )
      }
      {
        searchResults.length === 0 && searchQuery && (
          <EmptySidebar isEmptyResults={true} />
        )
      }
      {
        renderResults()
      }
      {
        searchResults.length === config.maxResults && searchQuery !== "" && (
          <Row>
            <div className="text-end mt-2 mb-5">
              {!isFirstPage && <ArrowBackIosNewIcon className="mx-1" onClick={() => handlePreviousPagination()}/>}
              <ArrowForwardIosIcon className="mx-1" onClick={() => handleNextPagination()}/>
            </div>
          </Row>
        )
      }

    </Container>
  );
}
