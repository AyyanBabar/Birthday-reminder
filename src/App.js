import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>Birthday Reminder</h3>
        <h5>{people.length} Birthdays today</h5>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear </button>
      </section>
    </main>
  );
}

export default App;
