import * as React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logoUrl from "../../assets/AQ-aero-blue.png";

const listHeader = ["Home", "About", "FAQs", "School", "Contact"];

const Header = () => (
  <div className="header">
    <div className="content">
      <div className="logo-container">
        <img src={logoUrl} alt="AQ" />
        <div className="name">Anqi Qu</div>
      </div>

      <div className="nav">
      {listHeader.map((item) => {
        return (
          <Link to={`/${item}`} key={item}>
            <div>
              <p>{item}</p>
            </div>
          </Link>
        );
      })}
      </div>
    </div>
  </div>
);
export default Header;
