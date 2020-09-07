import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <p>Home</p>
      <Link to="/">
        <button>Sign out</button>
      </Link>
    </div>
  );
}

export default Home;
