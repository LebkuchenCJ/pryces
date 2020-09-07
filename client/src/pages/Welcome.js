import React from "react";
import { Link } from "react-router-dom";

function Welcome(props) {
  return (
    <div>
      <p>Welcome</p>
      <Link to="/home">
        <button>Klick to sign in</button>
      </Link>
    </div>
  );
}

export default Welcome;
