package com.keiken.test.repository;

import com.keiken.test.model.Notebook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotebookRepository extends JpaRepository<Notebook, Long> {
}
