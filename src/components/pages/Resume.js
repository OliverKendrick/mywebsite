import React from "react";
import "../../App.css";
import { Button } from "../Button";

export default function Resume() {
  return (
    <>
      <h1 className="services">
        <a href="Uche.pdf" download="Uche Oliver.pdf">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Get Resume
          </Button>
        </a>
      </h1>
    </>
  );
}
