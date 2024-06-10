package com.simple.coloniahlvs.domain.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Entity
@Data
@Table(name = "residence_token")
public class Residence_Token {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String token;

    //1 residente a 1 token
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "resident_id", referencedColumnName = "id")
    private User user;
}
