import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./ConnectFooter.css";

function ConnectFooter() {
  return (
    <div className="cn-footer">
      <p className="cn-leftpart">
        Dedra Games © 2023.{" "}
        <span className="cn-nowrap">All Rights Reserved.</span>
      </p>
      <div className="cn-rightpart">
        <Link className="cn-nav-link" to="/Privacypolicy">
          PRIVACY POLICY
        </Link>
        <div className="cn-line"></div>
        <Link className="cn-nav-link" to="/Termsofservice">
          TERMS OF SERVICE
        </Link>
      </div>
    </div>
  );
}

export default ConnectFooter;
