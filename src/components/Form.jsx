/* eslint-disable react/prop-types */
import { useState } from 'react';

function Form({ onAddItems }) {
  const [description, setDiscription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, id: Date.now(), checked: false };
    console.log(newItem);

    onAddItems(newItem);

    setDiscription('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="m-2 flex items-center justify-center "
    >
      <input
        type="text"
        placeholder="Type here..."
        value={description}
        onChange={(e) => setDiscription(e.target.value)}
        className="border-2 border-slate-600 bg-zinc-700  p-2 text-gray-300 "
      />
      <button className=" border-2 border-slate-600 p-2  text-teal-400">
        Add
      </button>
    </form>
  );
}

export default Form;
