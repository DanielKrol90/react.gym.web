import React from "react";

import { FaCrown } from "react-icons/fa";
import "./SectionHeader.css";

const SectionHeader = ({icon, tittle, className}) => {
  return (
    <div className="section__head">
        <span>{icon}</span>
        <h2>{tittle={}}</h2>
    </div>
  );
};

export default SectionHeader;
