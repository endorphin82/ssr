import React from "react";

const Home = () => {
  return (
    <div className="center-align" style={{ marginTop: "200px" }}>
      <h3>Welcome</h3>
      <p className="flow-text">Check out these awesome features</p>
      <button
        className="waves-effect waves-light btn-small"
        onClick={() => console.log("Hi there!")}>Press me!
      </button>
    </div>
  );
};

export default {
  component: Home
};