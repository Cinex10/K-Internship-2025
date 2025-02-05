import React from 'react';
import { Trash2 } from 'lucide-react';

export function Notebook({ notebook, isSelected, onSelect, onDelete }) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
        isSelected ? 'bg-purple-100' : 'hover:bg-gray-50'
      }`}
      onClick={() => onSelect(notebook)}
    >
      <span className="font-medium text-gray-700">{notebook.title}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(notebook.id);
        }}
        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}