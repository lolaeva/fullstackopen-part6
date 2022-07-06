import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { addNotification, removeNotification } from "../reducers/notificationReducer";
import Anecdote from "./Anecdote";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  // const anecdotes = useSelector((state) => state.anecdotes);
  const vote = (id) => {
    dispatch(voteAnecdote(id));
    dispatch(addNotification(`you voted for ${anecdotes.find((a) => a.id === id).content}`));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 3000);
  };

  const anecdotes = useSelector(({ filter, anecdotes }) => {
    console.log("selector filter", filter);
    if (filter === "") {
      return anecdotes;
    }
    return anecdotes.filter((a) => a.content.toLowerCase().includes(filter));
  });

  return (
    <>
      {anecdotes.map((anecdote) => (
        <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={() => vote(anecdote.id)} />
      ))}
    </>
  );
};

export default AnecdoteList;
