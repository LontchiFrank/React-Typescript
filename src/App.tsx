import React from "react";
import { Greet } from "./components/Greet";
import "./App.css";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonLists";
import { Status } from "./components/Status";
import { Heads } from "./components/Heads";
import { Oscar } from "./components/Oscar";

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
      <Status status="success" />
      <Oscar>
        <Heads>Oscar goes to Leonardo dicarprio </Heads>
      </Oscar>
      <Greet name="Franky" isLoggedIn={false} />
    </div>
  );
}

export default App;
