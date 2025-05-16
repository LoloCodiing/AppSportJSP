package main.backend.repository;


import main.backend.entity.teamEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface teamRepository extends JpaRepository<teamEntity, Integer> {
}
