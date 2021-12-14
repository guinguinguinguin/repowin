import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Cards.css';
import PersonIcon from '@mui/icons-material/Person';

export default function Cards(props?: any) {
    const { avatar, name, id, primaryHeader, description, onClick } = props;

    return (
        <Container fluid className="card-container" onClick={onClick && onClick}>
            <Row>
                <Col xs={12} sm={3} md={4} lg={3}>
                    <img
                        src={avatar}
                        className="avatar-img"
                    />                    
                </Col>
                <Col xs={true} sm={9} md={true} className="right-card-side">
                    <Row>
                        <Col sm={12} md={9} className="primary-header wrap-text">
                            {primaryHeader}
                        </Col>
                        <Col xs={true} className="followers-header d-none d-xl-block">
                            {Math.floor(Math.random() * 100)} <PersonIcon fontSize="small"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="wrap-text">
                            Bio: {description ? description : 'n/a'}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}