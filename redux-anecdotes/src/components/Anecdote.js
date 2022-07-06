const Anecdote = ({ anecdote, handleVote }) => {
  return (
    <div className="anecdote-item">
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleVote}>vote</button>
      </div>
    </div>
  );
};
export default Anecdote;
