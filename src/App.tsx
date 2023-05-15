import React from "react";
import { Greet } from "./components/Greet";
import "./App.css";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonLists";
import { Status } from "./components/Status";
import { Heads } from "./components/Heads";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameLists = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Button
        handleClick={(event, id) => console.log("Button Clicked", event, id)}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
