package main.backend.services;

import main.backend.entity.matchEntity;
import main.backend.repository.matchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class matchService {

    @Autowired
    private matchRepository matchRepository;

    public matchEntity getMatchById(int id) {return matchRepository.findById(id).get();}

    public List<matchEntity> getAllMatches() {return matchRepository.findAll();}

    public matchEntity saveMatch(matchEntity match) {return matchRepository.save(match);}

    public void updateMatch(int id, matchEntity newMatchData) {
        matchEntity existingMatch = getMatchById(id);
        if (existingMatch != null) {
            existingMatch.setCategory(newMatchData.getCategory());
            existingMatch.setStadium(newMatchData.getStadium());
            existingMatch.setScore_team1(newMatchData.getScore_team1());
            existingMatch.setScore_team2(newMatchData.getScore_team2());
            existingMatch.setDate_match(newMatchData.getDate_match());
            existingMatch.setStatus(newMatchData.getStatus());
            existingMatch.setTeam1(newMatchData.getTeam1());
            existingMatch.setTeam2(newMatchData.getTeam2());
            matchRepository.save(existingMatch);
        }
    }

}
