package com.simple.coloniahlvs.domain.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Entity
@Data
@Table(name = "invitation")
public class Invitation {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

//    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date date;
    @Temporal(TemporalType.TIME)
//    @Column(name = "fecha_inicio")
    private Date start_time;
    @Temporal(TemporalType.TIME)
//    @Column(name = "fecha_fin")
    private Date finish_time;
//    @Column(name = "token_entrada")
    private String entrance_token;
//    @Column(name = "cangeado")
    private Boolean exchanged;
//    @Column(name = "estado")
    private Boolean status;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "guest_id", referencedColumnName = "id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "host_id", referencedColumnName = "id", nullable = false)
    private User host;
}
