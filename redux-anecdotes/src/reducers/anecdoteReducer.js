import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdoteService";

const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    // voteAnecdote(state, action) {
    //   const id = action.payload;
    //   const anecdoteToChange = state.find((n) => n.id === id);
    //   const changedAnecdote = {
    //     ...anecdoteToChange,
    //     votes: anecdoteToChange.votes + 1,
    //   };
    //   return state.map((anecdote) => (anecdote.id !== id ? anecdote : changedAnecdote));
    // },
    // createAnecdote(state, action) {
    //   state.push({
    //     content: action.payload,
    //     id: getId(),
    //     votes: 0,
    //   })
    // },
    updateAnecdote(state, action) {
      return state.map((anecdote) => (anecdote.id !== action.payload.id ? anecdote : action.payload));
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { updateAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
      dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
      dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (anecdote) => {
  console.log('voteAnecdote anecdote', anecdote)
  return async dispatch => {
    const anecdoteToChange = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };
    const updatedAnecdote = await anecdoteService.update(anecdoteToChange)
    
    dispatch(updateAnecdote(updatedAnecdote))
  }
  
  
}

export default anecdoteSlice.reducer;
