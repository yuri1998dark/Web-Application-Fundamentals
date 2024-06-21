export const MostAnecdotVotes = ({ max ,anecdotes, vote }) => {
  return (
    <div>
      {anecdotes[max]}
      <br />
      <div>has {vote[max]} votes</div> 
    </div>
  );
};
