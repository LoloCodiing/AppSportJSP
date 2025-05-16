package main.backend.services;

import main.backend.entity.teamEntity;
import main.backend.repository.teamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class teamService {

    @Autowired
    private teamRepository teamRepository;

    public List<teamEntity> getAllTeams() {return teamRepository.findAll();}


}
