import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import Anecdote from "./Anecdote";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote));
    dispatch(
      setNotification(`you voted for ${anecdote.content}`, 5)
    );
  };

  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if (filter === "") {
      return anecdotes;
    }
    return anecdotes.filter((a) => a.content.toLowerCase().includes(filter));
  });

  return (
    <>
      {anecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={() => vote(anecdote)} />
      ))}
    </>
  );
};

export default AnecdoteList;
