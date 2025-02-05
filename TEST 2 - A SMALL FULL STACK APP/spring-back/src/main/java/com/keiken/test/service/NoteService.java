package com.keiken.test.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.keiken.test.model.Note;
import com.keiken.test.model.Notebook;
import com.keiken.test.repository.NoteRepository;
import com.keiken.test.repository.NotebookRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class NoteService {

    private final NoteRepository noteRepository;
    private final NotebookRepository notebookRepository;

    public NoteService(NoteRepository noteRepository, NotebookRepository notebookRepository) {
        this.noteRepository = noteRepository;
        this.notebookRepository = notebookRepository;
    }

    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    public Optional<Note> getNoteById(Long id) {
        return noteRepository.findById(id);
    }

    public List<Note> getNotesInNotebook(Long notebookId) {
        List<Note> notes;
        notes = noteRepository.findByNotebookId(notebookId);

        return notes;
    }

    public Note createNote(Long notebookId, Note note) {
        Notebook notebook = notebookRepository.findById(notebookId)
                .orElseThrow(() -> new IllegalArgumentException("Notebook not found with ID: " + notebookId));

        note.setNotebook(notebook);
        return noteRepository.save(note);
    }

    public Note updateNote(Long id, Note updatedNote) {
        Note existingNote = noteRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Note not found with ID: " + id));

        existingNote.setTitle(updatedNote.getTitle());
        existingNote.setContent(updatedNote.getContent());
        return noteRepository.save(existingNote);
    }

    public void deleteNoteById(Long id) {
        if (!noteRepository.existsById(id)) {
            throw new IllegalArgumentException("Note not found with ID: " + id);
        }
        noteRepository.deleteById(id);
    }
}

