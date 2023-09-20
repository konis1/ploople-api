import React, { Component } from "react";
import CardCategory from "../components/cardCategory"
import BtnNext from "../components/btnNext"
import { useNavigate } from 'react-router-dom';
import "./create-event-step1.css";

export default function App() {
  return (
    <div className="home-container text-center">
      <form>
        <div className="steps">
          1 - Choose the type of event
        </div>
        <div className="cards ">
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
        </div>
        <div>
          <BtnNext/>
        </div>
      </form>
    </div>
  );
};
