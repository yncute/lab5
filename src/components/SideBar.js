import { useState } from "react";
import React from "react";

//change onclicks
const Sidebar = ({ search }) => {
  const [sort, setSort] = useState("viewed");
  const [time, setTime] = useState("1");
  const [num, setNum] = useState(6);

  function handleSubmit(event) {
    event.preventDefault();
    if (num > 15) {
      search(sort, time, 15);
      return;
    }
    if (num < 1) {
      search(sort, time, 1);
      return;
    }
    search(sort, time, num);
  }
  function handleInput(e) {
    setNum(e);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Input a number 1-15"
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      ></input>
      <button type="submit">Search</button>
      <h2>Sort By:</h2>
      <input
        type="radio"
        id="view"
        name="sort-by"
        defaultChecked={true}
        onClick={() => {
          setSort("viewed");
        }}
      />
      <label htmlFor="view">Most Viewed</label>
      <br />
      <input
        type="radio"
        id="share"
        name="sort-by"
        onClick={() => {
          setSort("shared");
        }}
      />
      <label htmlFor="share">Most Shared</label>
      <br />
      <input
        type="radio"
        id="email"
        name="sort-by"
        onClick={() => {
          setSort("emailed");
        }}
      />
      <label htmlFor="email">Most Emailed</label>

      <h2>Time Frame:</h2>
      <input
        type="radio"
        id="day"
        name="time-frame"
        defaultChecked={true}
        onClick={() => {
          setTime("1");
        }}
      />
      <label htmlFor="day">Day</label>
      <br />
      <input
        type="radio"
        id="week"
        name="time-frame"
        onClick={() => {
          setTime("7");
        }}
      />
      <label htmlFor="week">Week</label>
      <br />
      <input
        type="radio"
        id="month"
        name="time-frame"
        onClick={() => {
          setTime("30");
        }}
      />
      <label htmlFor="month">Month</label>
    </form>
  );
};

export default Sidebar;
