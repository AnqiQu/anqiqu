import * as React from "react"
import "./header.scss";
import logoUrl from '../../assets/AQ-aero-blue.png';

const Header = () => (
  <div className="header">
    <img src={logoUrl} alt="AQ" />
  </div>
)
export default Header;
