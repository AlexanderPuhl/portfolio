import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { FaHtml5, FaCss3Alt, FaNode, FaReact, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiPostgresql, SiMongodb } from 'react-icons/si';

const AboutStyles = styled.section`
  padding: 50px 20px;
  max-width: 1024px;
  margin: 0 auto;
  color: var(--dark-text);
  .gatsby-image-wrapper {
    border-radius: 50%;
    box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    max-width: 200px;
    max-height: 200px;
    transform: scale(1);
    transition: transform ease-in-out 250ms, box-shadow ease-in-out 250ms;
    &:hover {
      transform: scale(1.05);
    }
  }
  ul {
    margin: 16px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      margin: 0 10px;
      a {
        color: var(--dark-text);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        padding: 16px;
        svg {
          align-self: center;
          display: block;
          font-size: 40px;
          transform: scale(1);
          transition: transform ease-in-out 250ms;
        }
        svg:hover {
          color: var(--teal-text);
          transform: scale(1.25);
        }
        p {
          text-align: center;
        }
      }
    }
  }
`;

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pic.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <AboutStyles id="about">
      <h2>About Me</h2>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <p>
        I have always been interested in technology with a knack for solving
        technical problems that come up. I’ve built computers and setup LANs on
        my quest for more epic gaming. I traditionally come from a tech support
        background and only ever used code for basic things like automatically
        backing up my minecraft server.
      </p>
      <p>
        In the last few years I have turned my attention to Software Development
        with a focus on Web Development. I've become a really big fan of
        creating websites that behave as quick as an app, espeically on mobile
        devices. I love not having to wait for the screen to load when I'm
        interacting with the app.
      </p>
      <p>
        I have also developed a facination with Rasberry Pi's and Arduino
        boards. It's really cool being able to see your code interact with the
        world a little bit more. I would like to continue developing my skills
        in building apps with Javascript. I think apps inside the browser are
        going to be the future. I am very excited for the possibility to work
        with talented, experienced developers in the field and can't wait to see
        what the future of development has in store for me.
      </p>
      <h2>Tech Stack</h2>
      <ul>
        <li>
          <a
            href="https://www.w3schools.com/html/html_intro.asp"
            rel="noreferrer"
            target="_blank"
          >
            <FaHtml5 />
            <p>HTML5</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.w3schools.com/css/css_intro.asp"
            rel="noreferrer"
            target="_blank"
          >
            <FaCss3Alt />
            <p>CSS3</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.w3schools.com/js/js_intro.asp"
            rel="noreferrer"
            target="_blank"
          >
            <SiJavascript />
            <p>JavaScript</p>
          </a>
        </li>
        <li>
          <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
            <FaReact />
            <p>React</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.w3schools.com/nodejs/nodejs_intro.asp"
            rel="noreferrer"
            target="_blank"
          >
            <FaNode />
            <p>Node JS</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.w3schools.com/sql/sql_intro.asp"
            rel="noreferrer"
            target="_blank"
          >
            <SiPostgresql />
            <p>SQL</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.mongodb.com/what-is-mongodb"
            rel="noreferrer"
            target="_blank"
          >
            <SiMongodb />
            <p>Mongo</p>
          </a>
        </li>

        <li>
          <a href="https://github.com/" rel="noreferrer" target="_blank">
            <FaGithub />
            <p>GitHub</p>
          </a>
        </li>
      </ul>
    </AboutStyles>
  );
}
