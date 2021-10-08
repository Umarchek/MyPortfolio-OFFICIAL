import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Чутька <span className="purple"> про </span> меня
            </h1>
            <p className="home-about-body">
              Я влюбился в программирование и, по крайней мере, научился
              чему-то.....
              <br />
              <br />Я свободно владею классикой, такой как
              <i>
                <b className="purple">
                  Javascript и NodeJs. </b>
              </i>
              <br />
              <br />
              По возможности я также применяю свою страсть к разработке продуктов с <b className="purple">Node.js</b> и
              <i>
                <b className="purple">
                  {" "}
                  Современная библиотека и фреймворки Javascript
                </b>
              </i>
              &nbsp; и нравиться
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Мои контакты</h1>
            <p>
              Не стесняйтесь <span className="purple">связаться </span>со мной
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Um4rj0n"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/um4rj0n"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/c/UZBase"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
