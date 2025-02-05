package com.keiken.test.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.keiken.test.model.Notebook;
import com.keiken.test.repository.NotebookRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class NotebookService {

    private final NotebookRepository notebookRepository;

    public NotebookService(NotebookRepository notebookRepository) {
        this.notebookRepository = notebookRepository;
    }

    public List<Notebook> getAllNotebooks() {
        return notebookRepository.findAll();
    }

    public Optional<Notebook> getNotebookById(Long id) {
        return notebookRepository.findById(id);
    }

    public Notebook createNotebook(Notebook notebook) {
        return notebookRepository.save(notebook);
    }

    public void deleteNotebookById(Long id) {
        if (!notebookRepository.existsById(id)) {
            throw new IllegalArgumentException("Notebook not found with ID: " + id);
        }
        notebookRepository.deleteById(id);
    }
}

