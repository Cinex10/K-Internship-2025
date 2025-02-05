import React from 'react';
import { Plus } from 'lucide-react';
import { Note } from './Note';
import { NoteEditor } from './NoteEditor';

export function NoteList({
  selectedNotebook,
  notes,
  editingNote,
  noteTitle,
  noteContent,
  onAddNote,
  onEditNote,
  onDeleteNote,
  onNoteContentChange,
  onNoteTitleChange,
  onSaveNote,
  onCancelEdit
}) {
  return (
    <div className="md:col-span-9">
      {selectedNotebook ? (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              {selectedNotebook.name}
            </h2>
            <button
              onClick={onAddNote}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <Plus className="h-5 w-5" />
              New Note
            </button>
          </div>

          <div className="space-y-4">
            {editingNote && (
              <NoteEditor
                title={noteTitle}
                content={noteContent}
                onTitleChange={onNoteTitleChange}
                onContentChange={onNoteContentChange}
                onSave={onSaveNote}
                onCancel={onCancelEdit}
              />
            )}

            {notes.map((note) => (
              <Note
                key={note.id}
                note={note}
                onEdit={onEditNote}
                onDelete={onDeleteNote}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-64 bg-white rounded-lg shadow-lg">
          <p className="text-gray-500 text-lg">Select a notebook to view notes</p>
        </div>
      )}
    </div>
  );
}