import React, { useState, useEffect } from 'react';
import { Book } from 'lucide-react';
import * as api from './api';
import { NotebookList } from './components/NotebookList';
import { NoteList } from './components/NoteList';
import keikenLogo from '../assets/keiken-logo.png'

function App() {
  const [notebooks, setNotebooks] = useState([]);
  const [selectedNotebook, setSelectedNotebook] = useState(null);
  const [notes, setNotes] = useState([]);
  const [newNotebookName, setNewNotebookName] = useState('');
  const [editingNote, setEditingNote] = useState(null);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  useEffect(() => {
    loadNotebooks();
  }, []);

  useEffect(() => {
    if (selectedNotebook) {
      loadNotes(selectedNotebook.id);
    }
  }, [selectedNotebook]);

  const loadNotebooks = async () => {
    const loadedNotebooks = await api.getNotebooks();
    setNotebooks(loadedNotebooks);
  };

  const loadNotes = async (notebookId) => {
    const loadedNotes = await api.getNotes(notebookId);
    setNotes(loadedNotes);
  };

  const handleAddNotebook = async (e) => {
    e.preventDefault();
    if (!newNotebookName.trim()) return;
    await api.addNotebook(newNotebookName);
    setNewNotebookName('');
    await loadNotebooks();
  };

  const handleDeleteNotebook = async (id) => {
    api.deleteNotebook(id);
    loadNotebooks();
    if (selectedNotebook?.id === id) {
      setSelectedNotebook(null);
      setNotes([]);
    }
  };

  const handleAddNote = async () => {
    if (!selectedNotebook) return;
    setEditingNote({
      title: '',
      content: '',
      isNew: true
    });
    setNoteTitle('');
    setNoteContent('');
  };

  const handleSaveNote = async () => {
    if (!selectedNotebook || !noteTitle.trim()) return;

    if (editingNote.isNew) {
      await api.addNote(selectedNotebook.id, noteTitle, noteContent);
    } else {
      await api.updateNote(editingNote.id, noteTitle, noteContent);
    }

    setEditingNote(null);
    loadNotes(selectedNotebook.id);
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setNoteTitle(note.title);
    setNoteContent(note.content);
  };

  const handleDeleteNote = async (id) => {
    await api.deleteNote(id);
    loadNotes(selectedNotebook.id);
  };

  const handleNoteTitleChange = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleNoteContentChange = (e) => {
    setNoteContent(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
              <Book className="h-8 w-8 text-purple-600" />
              MindScape Notes
            </h1>
            <img src={keikenLogo} style={{height: "90px"}}/>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <NotebookList
            notebooks={notebooks}
            selectedNotebook={selectedNotebook}
            onSelect={setSelectedNotebook}
            onDelete={handleDeleteNotebook}
            newNotebookName={newNotebookName}
            onNewNotebookNameChange={setNewNotebookName}
            onAddNotebook={handleAddNotebook}
          />

          <NoteList
            selectedNotebook={selectedNotebook}
            notes={notes}
            editingNote={editingNote}
            noteTitle={noteTitle}
            noteContent={noteContent}
            onAddNote={handleAddNote}
            onEditNote={handleEditNote}
            onDeleteNote={handleDeleteNote}
            onNoteContentChange={handleNoteContentChange}
            onNoteTitleChange={handleNoteTitleChange}
            onSaveNote={handleSaveNote}
            onCancelEdit={() => setEditingNote(null)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;