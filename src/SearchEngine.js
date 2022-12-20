import React from "react";

export default function SearchEngine() {
  return (
    <div className="row">
      <div className="col-6 enter-city">
        <div className="input-group flex-nowrap">
          <form id="search-form">
            <div className="input-group">
              <input
                id="search-text-input"
                type="text"
                className="form-control"
                placeholder="Enter city"
                autocomplete="off"
              />
              <button type="submit" className="input-group-text">
                <span role="img" aria-label="lupe">
                  🔍
                </span>
              </button>
              <button className="btn btn-primary" id="current-btn">
                Current
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
