import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Get in touch with me</p>
      </section>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Toche
              <i class="fas fa-heart" />
            </Link>
          </div>
          <small class="website-rights">UC-KEN © 2021</small>
          <div class="social-icons">
            <a
              class="social-icon-link facebook"
              href="https://www.facebook.com/oliver.uche.73"
            >
              <i class="fab fa-facebook-f" />
            </a>

            <a
              class="social-icon-link instagram"
              href="https://www.instagram.com/olikendrick_/"
            >
              <i class="fab fa-instagram" />
            </a>

            <a
              class="social-icon-link twitter"
              href="https://twitter.com/olikendrick_?s=08"
            >
              <i class="fab fa-twitter" />
            </a>
            <a
              class="social-icon-link linkedin"
              href="https://www.linkedin.com/in/uche-kennedy-6b82b9ab"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
