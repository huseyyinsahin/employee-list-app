import React, { useState } from "react";
import data from "./helper/data";
import List from "./components/List";

function App() {
  const [page, setPage] = useState(0);

  const prevPage = () => {
    setPage(() => {
      let newPage = page - 1;
      if (newPage < 0) {
        newPage = Math.floor((data.length - 1) / 5);
      }
      return newPage;
    });
  };

  const nextPage = () => {
    setPage(() => {
      let newPage = page + 1;
      if (newPage > Math.floor((data.length - 1) / 5)) {
        newPage = 0;
      }
      return newPage;
    });
  };

  const start = page * 5;
  const selectedData = data.slice(start, start + 5);

  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {start + 1} to {start + selectedData.length})
        </h5>
        <List selectedData={selectedData} />
        <div className="btns">
          <button onClick={prevPage}>Prev</button>
          <button onClick={nextPage}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
