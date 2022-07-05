const AnecdoteForm = () => {
  const create = () => {
    console.log('create')
  }
  
  return (
    <>
      <h2>create new</h2>
      <form>
        <div>
          <input />
        </div>
        <button onClick={() => create()}>create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
