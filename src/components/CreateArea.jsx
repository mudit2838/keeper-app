import React, { useState } from 'react';

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    onAdd(note);
    setNote({ title: '', content: '' });
  };

  return (
    <div className="p-4 flex justify-center">
      <form className="bg-white p-4 rounded-2xl shadow-md w-full max-w-lg">
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
          className="border-b-2 w-full p-2 focus:outline-none mb-2"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          className="w-full p-2 border rounded-md focus:outline-none"
        />
        <button
          onClick={submitNote}
          className="mt-2 bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateArea;