import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Всем привет, я<span className="purple"> Умаржон Шарофиддинов </span>
            из <span className="purple"> Алмалыка.</span>
            <br />Я младший (junior) разработчик MERN Full Stack.
            <br />
            <br />
            Помимо программирования, я люблю заниматься и другими занятиями!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Играть в игры
            </li>
            <li className="about-activity">
              <ImPointRight /> Создавать видеоролики на Youtube
            </li>
            <li className="about-activity">
              <ImPointRight /> Путешествие
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
