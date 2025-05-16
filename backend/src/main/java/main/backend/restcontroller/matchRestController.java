package main.backend.restcontroller;

import io.swagger.v3.oas.annotations.tags.Tag;
import main.backend.entity.matchEntity;
import main.backend.services.matchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Tag(name = "Controller des Matchs", description = "Fait pour controller les matchs")
@RequestMapping("match")
public class matchRestController {

    @Autowired
    private matchService matchService;

    @GetMapping("/{id}")
    public matchEntity getMatch(@PathVariable int id) {
        return matchService.getMatchById(id);
    }

    @GetMapping("/all")
    public List<matchEntity> getAllMatchs() {
        return matchService.getAllMatches();
    }

    @PostMapping("/add")
    public void addMatch(@RequestBody matchEntity match) {
        System.out.println(match);
        matchService.saveMatch(match);
    }

    @PostMapping("/add_score")
    public void increment(int id, boolean isTeam1, int scoreToAdd) {
        matchEntity match = matchService.getMatchById(id);
        if (isTeam1) {
            match.setScoreTeam1(match.getScoreTeam1() + scoreToAdd);
        }else{
            match.setScoreTeam2(match.getScoreTeam2() + scoreToAdd);
        }
        matchService.saveMatch(match);
    }

    @PutMapping("/edit/{id}")
    public void updateMatch(@PathVariable int id, @RequestBody matchEntity match) {
        matchService.updateMatch(id, match);
    }

}
