import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Cards.css';
import PersonIcon from '@mui/icons-material/Person';

export default function Cards(props?: any) {
    return (
        <Container fluid className="card-container">
            <Row>
                <Col sm={2}>
                    <img
                        src={props.avatar}
                        className="avatar-img"
                    />                    
                </Col>
                <Col className="right-card-side">
                    <Row>
                        <Col className="primary-header">
                            {props.primaryHeader}
                        </Col>
                        <Col className="followers-header">
                            {Math.floor(Math.random() * 100)} <PersonIcon/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Description: {props.description ? props.description : 'n/a'}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}