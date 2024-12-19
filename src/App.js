import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card border-5 weather-report-bg mt-5">
            <div className="card-body text-center">
              <p className="card-text mt-5 mb-5 text-light">
                <span className="bg-dark p-2">
                  Welcome to the Weather Report App. Click the button below to
                  view the weather report.
                </span>
              </p>
              <div className="d-flex justify-content-center">
                <Link to="/home">
                  <button className="btn btn-primary mt-5">
                    View Weather Report
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
