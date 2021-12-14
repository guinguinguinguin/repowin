import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import emptyBox from './icons/empty-box.svg';
import handSearch from './icons/hand-search.svg';
import './Dashboard.css';

export default function EmptyDashboard(props:any) {
  const { isEmpty, isFreshSearch } = props;
  return (
    <Container>
        <Row className="jumbo-text text-center my-5">
            <Col>
                Welcome to RepoWin
            </Col>
        </Row>
        <Row className="secondary-text text-center my-5">
            <Col>
            {
                isEmpty && 'You haven’t searched a Github Organization yet!   Search organizations by organization ID \nAnd select from the left bar to display more information here'
            }
            {
                isFreshSearch && 'Click on a search result to see more information on the organization!'
            }
            </Col>
        </Row>
        <Row className="mt-5 text-center">
            <img 
                src={isEmpty ? emptyBox : isFreshSearch && handSearch}
                className="rounded-img"
                height="250px"
                width="250px"
            />
    </Row>

    </Container>
  );
}