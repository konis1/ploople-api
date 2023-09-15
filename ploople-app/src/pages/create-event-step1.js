import React, { Component } from "react";
import CardCategory from "../components/cardCategory"
import { useNavigate } from 'react-router-dom';

export default function App() {
  return (
    <div className="container home-container text-center">
      <div className="steps">
        1 - Choose the type of event
      </div>
      <div className="row ">
        <CardCategory/>
      </div>
    </div>
  );
};
