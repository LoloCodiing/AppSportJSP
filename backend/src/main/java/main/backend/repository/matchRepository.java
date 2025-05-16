package main.backend.repository;

import main.backend.entity.matchEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface matchRepository extends JpaRepository<matchEntity, Integer> {
}
