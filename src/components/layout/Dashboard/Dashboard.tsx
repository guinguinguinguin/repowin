import React from "react";
import { useSelector } from 'react-redux';
import { Col, Container, Row, Table } from 'react-bootstrap';
import verifiedBadge from './icons/check.svg';

import InsertLinkIcon from '@mui/icons-material/InsertLink';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import config from '../../../constants/config';
import './Dashboard.css';

export default function Dashboard() {

  const selectedOrganization = useSelector((state: any) => state.app.organizationSelected);
  const selectedOrganizationRepos = useSelector((state: any) => state.app.organizationSelectedRepos);
  console.log('selectedOrganization', selectedOrganization);
  console.log('selectedOrganizationRepos', selectedOrganizationRepos);

  const { avatar_url: avatar, blog, company, created_at: creationDate, followers, following, location, login, is_verified: isVerified, html_url: orgUrl, public_repos: numberOfRepos, name} = selectedOrganization;


  const renderRepoTable = () => {
    const tableRows = [];
    tableRows.push(selectedOrganizationRepos.map((repo: any) => {
      const { id, name, url, open_issues: openIssues, language, updated_at: updated, git_url: gitUrl } =  repo;

      return (
        <tr key={id}>
          <td>
            {name}
          </td>
          <td>
            {language}
          </td>
          <td>
            {openIssues}
          </td>
          <td>
            {new Date(updated).toLocaleDateString()}
          </td>
          <td>
            <FileCopyIcon onClick={() => {
              navigator.clipboard.writeText('git clone ' + gitUrl);
            }}/>
          </td>
        </tr>
      )

    }));
    return tableRows;
  };

  return (
    <Container fluid>
      <Row className="my-5">
        <Col xs={8}>
          <Container className="info-container p-4">
            <Row>
              <span className="primary-text">
                Here&apos;s Info on
                <span className="text-danger ms-2"> {login}</span>
                <a href={orgUrl}>
                  <InsertLinkIcon id="org-linkage"/>
                </a>
                <span id="unverified-badge" className="float-end">
                  {
                    isVerified && (<img src={verifiedBadge} height="25px" width="25px" />)
                  }
                  {
                    !isVerified && 'unverified'
                  }
                </span>
              </span>
            </Row>
            <Row className="secondary-text px-3">
              Organization Creation Date: {new Date(creationDate).toLocaleDateString()}
            </Row>
            <Row className="secondary-text px-3">
              Owns {numberOfRepos} Public Repos
              <div id="repo-table-container">
                <Table responsive striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      {
                        config.repoTableHeaders.map((header) => {
                          return (
                            <th key={header}>
                              {header}
                            </th>
                          );
                        })
                      }
                    </tr>
                  </thead>
                  <tbody>
                    {
                      renderRepoTable()
                    }
                  </tbody>
                </Table>
              </div>
            </Row>
          </Container>
        </Col>
        <Col xs={true}>
          <Container className="info-container">
            <Row className="text-center">
              <img
                src={avatar}
                className="rounded-img"
              />
            </Row>
            <Row className="text-center mt-3">
              <Col>
                <span className="secondary-text">Owner: </span>
                <span className="highlight-text">{name ? name : login}</span>
              </Col>
            </Row>
            <Row>
              <hr />
            </Row>
            <Row className="my-2">
              <Col>
                <PersonIcon /> {followers ? followers : 0} Followers
              </Col>
              <Col>
                <PersonAddIcon /> Following {following ? following : 0}
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
                <WorkIcon /> {company ? company : 'Individual Contributor'}
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
                <LocationOnIcon /> {location ? location : 'Unknown'}
              </Col>
            </Row>
            <Row className="my-2">
              <Col>
                <InsertLinkIcon /> {blog ? blog : 'No Blogs'}
              </Col>
            </Row>
          </Container> 
        </Col>
      </Row>  
    </Container>
  );
}
