import React from "react";
import { DatePicker, Card } from "antd";

import "./App.scss";

function App() {
  const test = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="app">
      <h1>
        Hello world! <span> Hi! </span>{" "}
      </h1>
      <h2> Test </h2>
      <DatePicker onChange={test} />

      <Card title="Default size card" style={{ width: 300 }}>
        <p>Card content</p>
      </Card>
    </div>
  );
}

export default App;
