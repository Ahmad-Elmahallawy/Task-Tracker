import React from "react";
import Button from "./Button";
// what is inside the method is a prop that is
// destrutured
// an alternative is to pass any variable the will
// be an object then do variable.title
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
