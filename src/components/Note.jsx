import React, { useState } from 'react';

const Note = ({ id, title, content, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedNote, setUpdatedNote] = useState({ title, content });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedNote(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdate(id, updatedNote);
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-64">
      {isEditing ? (
        <div>
          <input
            name="title"
            value={updatedNote.title}
            onChange={handleChange}
            className="border-b-2 w-full p-1 mb-2 focus:outline-none"
          />
          <textarea
            name="content"
            value={updatedNote.content}
            onChange={handleChange}
            rows="3"
            className="w-full border p-1 rounded-md focus:outline-none"
          />
          <button onClick={handleSave} className="bg-green-500 text-white px-2 py-1 mt-2 rounded-md hover:bg-green-600">
            Save
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-gray-700">{content}</p>
          <div className="flex justify-end gap-2 mt-3">
            <button onClick={() => setIsEditing(true)} className="bg-blue-400 text-white px-2 py-1 rounded-md hover:bg-blue-500">
              Edit
            </button>
            <button onClick={() => onDelete(id)} className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;