import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import Anecdote from "./Anecdote";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);
  const vote = (id) => {
    dispatch(voteAnecdote(id));
  };
  return (
    <>
      
      {anecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={() => vote(anecdote.id)} />
      ))}
    </>
  );
};

export default AnecdoteList;
