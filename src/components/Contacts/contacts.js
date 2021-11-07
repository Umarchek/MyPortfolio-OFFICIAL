import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./contacts.css";
import { ImTelegram, ImInstagram, ImYoutube, ImGithub } from "react-icons/im";

function contacts() {
  return (
    <Container fluid className="contact-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          ></Col>
          <h1 className="Big__text__contact">
            Вы ниже можете увидеть мои соц.сети
          </h1>
          <Col md={7} >
            <a
              target="_blank"
              href="https://t.me/Senior_Developper"
              style={{ display: "flex", alignItems: "center" }}
            >
              <ImTelegram className="telegram__icon" />
              <h1 style={{ color: "#fff" }}>Telegram</h1>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/um4rj0n/"
              style={{ display: "flex", alignItems: "center" }}
            >
              <ImInstagram className="instagram__icon" />
              <h1 style={{ color: "#fff" }}>Instagram</h1>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/c/UZBase"
              style={{ display: "flex", alignItems: "center" }}
            >
              <ImYoutube className="youtube__icon" />
              <h1 style={{ color: "#fff" }}>Youtube</h1>
            </a>
            <a
              target="_blank"
              href="https://github.com/UZBase"
              style={{ display: "flex", alignItems: "center" }}
            >
              <ImGithub className="github__icon" />
              <h1 style={{ color: "#fff" }}>Github</h1>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default contacts;
