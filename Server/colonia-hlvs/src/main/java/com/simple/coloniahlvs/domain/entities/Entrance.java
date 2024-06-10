package com.simple.coloniahlvs.domain.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
@Entity
@Table(name = "entrance")
public class Entrance {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String nombre;
    private String dui;
    private String house_number;
    @Temporal(TemporalType.DATE)
    private Date date;
    @Temporal(TemporalType.TIME)
    private Date time;
    private String comment;

    //1 vigilante a muchos registros
    @ManyToOne
    @JoinColumn(name = "guard_id", referencedColumnName = "id")
    private User user;

}
