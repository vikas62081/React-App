import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const { width, heigth } = useWindowSize();
  console.log(width, heigth);
  // useEffect(() => {
  //   console.log(window.innerWidth);
  // }, [window]);
  return (
    <div className="App">{width < 400 ? <h3>Hello</h3> : <h3>HEy</h3>}</div>
  );
}

export default App;
