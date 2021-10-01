import React from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer";

function Projects() {
  return (
    <>
      <section class="sub-section-alternative" id="projects">
        <h2>Projects</h2>
        <div class="project-container">
          <div class="project-card">
            <img class="project-image" src="afa.png" alt="Project One Image" />
            <h3>Project One</h3>
            <p class="subtext">
              A non-government organization located in Eastern Nigeria.
            </p>
            <hr />
            <p class="subtext">
              <a class="project-link" href="https://www.alliancesforafrica.org">
                View here
              </a>
            </p>
          </div>
          <div class="project-card">
            <h3>Project Two</h3>
            <p class="subtext">This is my personal website.</p>
            <hr />
            <p class="subtext">
              <a class="project-link" href="/about">
                View here
              </a>
            </p>
          </div>
          <div class="project-card">
            <img class="project-image" src="/nff.jpg" alt="Project One Image" />
            <h3>Project Three</h3>
            <p class="subtext">Nigerian feminist forum.</p>
            <hr />
            <p class="subtext">
              <a
                class="project-link"
                href="https://www.nigerianfeministforum.org"
              >
                View here
              </a>
            </p>
          </div>
          <div class="project-card">
            <h3>Project Four</h3>
            <p class="subtext">Social Media Manager.</p>
            <hr />
            <p class="subtext">
              <a
                class="project-link"
                href="https://www.instagram.com/alliancesforafrica/?utm_medium=copy_link"
              >
                View Instagram here
              </a>
            </p>
            <p class="subtext">
              <a class="project-link" href="https://twitter.com/AfAafrica?s=08">
                View Twitter here
              </a>
            </p>
            <p class="subtext">
              <a
                class="project-link"
                href="https://web.facebook.com/AlliancesforAfrica/?_rdc=1&_rdr"
              >
                View Facbook here
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Projects;
