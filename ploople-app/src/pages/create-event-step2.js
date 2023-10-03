import React, {useEffect, useState} from "react";
import BtnNext from "../components/btnNext"
import "../components/cardCategory.css";
import "./create-event-step1.css";

export default function CreateEventStep2() {

  return (
    <div className="wrapper">
      <div className="home-container text-center">
        <form>
          <div className="steps">
            <h1 className="steps--title">2 - Choose the date</h1>
          </div>
          <div>
            blip blop you are there
          </div>
          <div>
            <BtnNext/>
          </div>
        </form>
      </div>
    </div>
  );
};
