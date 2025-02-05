import React from 'react';
import { Save, X } from 'lucide-react';

export function NoteEditor({ title, content, onTitleChange, onContentChange, onSave, onCancel }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <input
        type="text"
        placeholder="Note Title"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        value={title}
        onChange={onTitleChange}
      />
      <textarea
        placeholder="Note Content"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
        value={content}
        onChange={onContentChange}
      />
      <div className="flex justify-end gap-2">
        <button
          onClick={onCancel}
          className="px-3 py-1 text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1"
        >
          <X className="h-4 w-4" /> Cancel
        </button>
        <button
          onClick={onSave}
          className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-1"
        >
          <Save className="h-4 w-4" /> Save
        </button>
      </div>
    </div>
  );
}