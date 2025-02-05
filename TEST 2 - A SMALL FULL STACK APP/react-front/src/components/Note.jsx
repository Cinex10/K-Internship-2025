import React from 'react';
import { format } from 'date-fns';
import { Edit3, Trash2 } from 'lucide-react';

export function Note({ note, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-gray-800">{note.title}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(note)}
            className="p-1 text-gray-400 hover:text-purple-600 transition-colors"
          >
            <Edit3 className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(note.id)}
            className="p-1 text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      <p className="text-gray-600 mb-2 whitespace-pre-wrap">{note.content}</p>
      <div className="text-sm text-gray-400">
        Last updated: {format(new Date(note.updatedAt), 'MMM d, yyyy h:mm a')}
      </div>
    </div>
  );
}