import React, { Component } from "react";

export default function App() {
  return (
    <div className="container home-container text-center">
      <div className="row justify-content-center">
        <div className="col-10 home-card">
              <h2> Planning with friends made easier</h2>
              <p> Get started now, create your first event and invite your buddies</p>
          <button className="btn btn-success cta-create">
            Create an event
          </button>
        </div>
      </div>
    </div>
  );
};
