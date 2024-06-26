import { useState } from "react";
import { MostAnecdotVotes } from "./components/MostAnecdotVotes";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const rndInt = Math.floor(Math.random() * 8);

  const [selected, setSelected] = useState(0);
  const [vote, setVotes] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [max, setMax] = useState(0);

  const handleAnecdotes = () => {
    console.log(rndInt);
    setSelected(rndInt);
    const newVotes = [...vote];
    helper(newVotes);
  };

  const handleVotes = () => {
    const newVotes = [...vote];
    newVotes[selected] += 1;

    setVotes(newVotes);
    helper(newVotes);
  };

  const helper = (newVotes) => {
    const lvl = Math.max(...newVotes);

    const value = newVotes.indexOf(lvl);

    setMax(value);
  };
  
  return (
    <div>
      <h1>Anecdote of de Day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {vote[selected]} votes</div>
      <br />
      <button onClick={handleVotes}>Vote</button>
      <button onClick={handleAnecdotes}>next anecdote</button>
      <div>
        <h1>Anecdote with most votes</h1>
        <MostAnecdotVotes
          max={max}
          anecdotes={anecdotes}
          vote={vote}
          select={selected}
        />
      </div>
    </div>
  );
}

export default App;
