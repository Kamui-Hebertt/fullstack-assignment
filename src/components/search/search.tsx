import React, { useState, ChangeEvent, FC, useContext } from "react";
import * as M from "@mui/material";
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import "./Search.css";
import context from "../../context/context";

const FilterAgent: FC = (): JSX.Element => {
  const { searchQuery, setSearchQuery } = useContext(context);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  return (
    <header className="header">
      <M.TextField
        type="text"
        id="outlined-basic"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Enter practice areas"
        label="Search by Practice Areas:"
      />
      <Link to="/registerAgent">Register Agent</Link>
    </header>
  );
};

export default FilterAgent;
