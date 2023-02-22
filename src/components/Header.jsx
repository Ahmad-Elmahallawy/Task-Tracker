import React from "react";
import Button from "./Button";
// what is inside the method is a prop that is
// destrutured
// an alternative is to pass any variable the will
// be an object then do variable.title
const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

export default Header;
