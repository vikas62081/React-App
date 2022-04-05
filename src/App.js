import "./App.css";
import { CustomerData } from "./data";
import Card from "./components/card";
import { useState } from "react";

function App() {
  const [tempData, setTempData] = useState(CustomerData);
  const inputStyle = {
    padding: 12,
    width: "100%",
    fontSize: "105%",
  };
  const onSearchChange = (value) => {
    const newData = CustomerData.filter(
      (cust) =>
        cust.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
        cust.order.includes(value)
    );
    setTempData(newData);
  };
  return (
    <div className="App">
      <h2>React-App</h2>
      <h4>Build Search Filter in React Js</h4>
      <input
        type="search"
        placeholder="Type something to search..."
        style={inputStyle}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {tempData.map((customer, index) => (
        <Card userInfo={customer} key={index} />
      ))}
    </div>
  );
}

export default App;
