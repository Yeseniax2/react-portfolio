import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home"></Container>
        <Particle />
        <Container className="home-content">
          <Row>
      <Col md={7} className="home-header">
        <h1 style={{ paddingBottom: 15 }} className="heading">
          Hello Everyone!{" "}
          <span className="wave" role="img" aria-labelledby="wave">

          </span>
          </h1>
        <h1 className= "Heading-name">
          I AM
          <strong className="main-name"> Yesenia Benitez</strong>
          </h1>

          <div style={{padding: 45, textAlign: "left"}}>
          </div>
          </Col>
      
      <col md={5} style={{paddingBottom: 20}}>
      </col>
      </Row>
      </Container>
      </section>
  )}
export default Home;