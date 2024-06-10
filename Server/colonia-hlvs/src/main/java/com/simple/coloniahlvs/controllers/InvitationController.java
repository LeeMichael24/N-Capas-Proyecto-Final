package com.simple.coloniahlvs.controllers;

import com.simple.coloniahlvs.domain.dto.GeneralResponse;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/invitation")
public class InvitationController {

    @GetMapping("/mine")
    public ResponseEntity<GeneralResponse> getMyInvitations() {
        return GeneralResponse.getResponse("Invitations received!");
    }

    @GetMapping("/mine/{id}")
    public ResponseEntity<GeneralResponse> getMyInvitation(@Param("id") String id){
        return GeneralResponse.getResponse("My specific Invitation");
    }

    @PostMapping("/grant")
    public ResponseEntity<GeneralResponse> grantInvitation(@RequestBody String invitationId) {
        return GeneralResponse.getResponse("Invitation granted!");
    }

    @GetMapping("/requested")
    public ResponseEntity<GeneralResponse> getRequestedInvitations() {
        return GeneralResponse.getResponse("Invitations requested with approved false!");
    }

    @PostMapping("/update")
    public ResponseEntity<GeneralResponse> updateInvitation(@RequestBody String invitationId) {
        return GeneralResponse.getResponse("Invitation accepted/rejected!");
    }

    @GetMapping("/pending")
    public ResponseEntity<GeneralResponse> getPendingInvitations() {
        return GeneralResponse.getResponse("Not exchanged, accepted and future invitations! ");
    }

    @GetMapping("/old")
    public ResponseEntity<GeneralResponse> getOldInvitations() {
        return GeneralResponse.getResponse("Old exchanged invitations! (history of invitations)");
    }


}
