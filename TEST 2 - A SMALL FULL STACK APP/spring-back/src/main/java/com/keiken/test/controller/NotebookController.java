package com.keiken.test.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.keiken.test.model.Note;
import com.keiken.test.model.Notebook;
import com.keiken.test.service.NotebookService;
import com.keiken.test.service.NoteService;

import java.util.List;

@RestController
@RequestMapping("/api/notebooks")
public class NotebookController {

    private final NotebookService notebookService;
    private final NoteService noteService;

    public NotebookController(NotebookService notebookService, NoteService noteService) {
        this.notebookService = notebookService;
        this.noteService = noteService;
    }

    @GetMapping
    public ResponseEntity<List<Notebook>> getAllNotebooks() {
        List<Notebook> notebooks = notebookService.getAllNotebooks();
        return ResponseEntity.ok(notebooks);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Notebook> getNotebookById(@PathVariable Long id) {
        return notebookService.getNotebookById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}/notes")
    public ResponseEntity<List<Note>> getNotesInNotebook(@PathVariable Long id) {
        List<Note> notes = noteService.getNotesInNotebook(id);
        return ResponseEntity.ok(notes);
    }

    @PostMapping
    public ResponseEntity<Notebook> createNotebook(@RequestBody Notebook notebook) {
        Notebook createdNotebook = notebookService.createNotebook(notebook);
        return ResponseEntity.status(201).body(createdNotebook);
    }

    @PostMapping("/{notebookId}/notes")
    public ResponseEntity<Note> createNote(
            @PathVariable Long notebookId,
            @RequestBody Note note) {
        Note createdNote = noteService.createNote(notebookId, note);
        return ResponseEntity.status(201).body(createdNote);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNotebookById(@PathVariable Long id) {
        notebookService.deleteNotebookById(id);
        return ResponseEntity.noContent().build();
    }
}