package main.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "matches")
public class matchEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "stadium", nullable = false)
    private String stadium;

    @Column(name = "score_team1", nullable = false)
    private int scoreTeam1;

    @Column(name = "score_team2", nullable = false)
    private int scoreTeam2;

    @Column(name = "date_match", nullable = false)
    private LocalDateTime dateMatch;

    @Column(name = "status", nullable = false)
    private String status;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "team1_id", nullable = false, referencedColumnName = "id")
    private teamEntity team1;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "team2_id", nullable = false, referencedColumnName = "id")
    private teamEntity team2;


}