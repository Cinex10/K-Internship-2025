import React from 'react';
import { Plus } from 'lucide-react';
import { Notebook } from './Notebook';

export function NotebookList({ notebooks, selectedNotebook, onSelect, onDelete, newNotebookName, onNewNotebookNameChange, onAddNotebook }) {
  return (
    <div className="md:col-span-3 bg-white rounded-lg shadow-lg p-4">
      <div className="mb-4">
        <form onSubmit={onAddNotebook} className="flex gap-2">
          <div className="w-48">
            <input
              type="text"
              placeholder="New Notebook"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              value={newNotebookName}
              onChange={(e) => onNewNotebookNameChange(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            aria-label="Add notebook"
          >
            <Plus className="h-5 w-5" />
          </button>
        </form>
      </div>

      <div className="space-y-2">
        {notebooks.map((notebook) => (
          <Notebook
            key={notebook.id}
            notebook={notebook}
            isSelected={selectedNotebook?.id === notebook.id}
            onSelect={onSelect}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}