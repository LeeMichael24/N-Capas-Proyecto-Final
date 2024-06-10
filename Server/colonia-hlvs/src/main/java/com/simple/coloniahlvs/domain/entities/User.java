package com.simple.coloniahlvs.domain.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "user")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;
    private String email;
    private String DUI;

    //JWToken
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    @JsonIgnore
    @ToString.Exclude
    private List<Token> tokens;

    //TODO immplement join table with flag
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<HouseUser> house_user;

    //1 vigilante a muchos registros
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Entrance> entrances;

    //muchos usuarios muchos roles
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "hlvs_user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private List<Role> roles;

    //1 residente a un token
    @OneToOne(mappedBy = "user")
    private Residence_Token residence_token;

    //1 usuario a muchos permisos
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Invitation> gotten_invitations;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Invitation> made_invitations;
}
