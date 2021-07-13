import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { FaGithub } from 'react-icons/fa';

const ProjectStyles = styled.section`
  padding: 50px 20px;
  background-color: var(--secondary-background);
  color: var(--light-text);
  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      background-color: var(--primary-background);
      display: flex;
      flex-direction: column;
      margin: 10px auto;
      max-width: 400px;
      text-align: center;
      h3 {
        line-height: 42px;
      }
      .gatsby-image-wrapper {
        width: 100%;
      }
      .card-content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        .project-description {
          min-height: 120px;
        }
        .project-tech {
          min-height: 80px;
        }
        a {
          color: var(--light-text);
          padding: 16px;
          svg {
            font-size: 40px;
            transform: scale(1);
            transition: transform ease-in-out 250ms;
          }
          svg:hover {
            transform: scale(1.25);
          }
        }
        a:hover {
          color: var(--teal-text);
        }
      }
    }
  }
`;

export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
      vehicleApp: file(relativePath: { eq: "mpg-tracker.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spanishApp: file(relativePath: { eq: "spanish-app.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cozySpacesApp: file(relativePath: { eq: "cozy-spaces.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <ProjectStyles id="projects">
      <div className="container">
        <h2>Projects</h2>
        <ul>
          <li>
            <Img fluid={data.vehicleApp.childImageSharp.fluid} />
            <div className="card-content">
              <h3>Vehicle Tracker</h3>
              <p className="project-description">
                Vehicle Tracker will help you keep track of various stats for
                your vehicle. This is a great way to keep an eye on the health
                of your vehicle. It's also just fun to collect this sort of data
                and look back over it!
              </p>
              <p className="project-tech">
                React/Redux, Node.js, Express, Mongo/Mongoose, Bcrypt/Passport
              </p>
              <a
                href="https://github.com/AlexanderPuhl/vehicle-tracker-client"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href="https://vehicle-tracker-client.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
              >
                Visit the Website
              </a>
            </div>
          </li>
        </ul>
      </div>
    </ProjectStyles>
  );
}
