package main.backend.restcontroller;

import io.swagger.v3.oas.annotations.tags.Tag;
import main.backend.entity.teamEntity;
import main.backend.services.teamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Tag(name = "Controller des Teams", description = "Fait pour controller les teams")
@RequestMapping("team")
public class teamRestController {

    @Autowired
    private teamService teamService;

    @GetMapping("/all")
    public List<teamEntity> getAllTeams() {
        return teamService.getAllTeams();
    }
}
