import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    if (!newNote.title || !newNote.content) {
      alert('Please fill out both fields before adding a note!');
      return;
    }
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter((note, index) => index !== id));
  };

  const updateNote = (id, updatedNote) => {
    setNotes(prevNotes =>
      prevNotes.map((note, index) => (index === id ? updatedNote : note))
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
            onUpdate={updateNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;