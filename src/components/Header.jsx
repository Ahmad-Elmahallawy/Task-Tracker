import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";
// what is inside the method is a prop that is
// destrutured
// an alternative is to pass any variable the will
// be an object then do variable.title
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

export default Header;
