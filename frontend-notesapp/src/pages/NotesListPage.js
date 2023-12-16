import { AddButton } from "../components/AddButton";
import ListItem from "../components/ListItem";
import React, { useState, useEffect } from "react";

const NotesListPage = () => {
  let [notes, setNotes] = useState([]);

  let getNotes = async () => {
    try {
      let response = await fetch("/api/notes/");
      let data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Got this error: ", error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="notes">
      <div className="cotes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItem note={note} key={index} />
        ))}
      </div>
      <AddButton />
    </div>
  );
};
export default NotesListPage;
