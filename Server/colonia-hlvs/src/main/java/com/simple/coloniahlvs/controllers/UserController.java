package com.simple.coloniahlvs.controllers;

import com.simple.coloniahlvs.domain.dto.GeneralResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {

    @PostMapping("/update-dui")
    public ResponseEntity<GeneralResponse> updateMyDUI(@RequestBody String dui) {
        return GeneralResponse.getResponse("DUI successfully updated!");
    }

    @PostMapping("/set-role")
    public ResponseEntity<GeneralResponse> setRole(@RequestBody String role) {
        return GeneralResponse.getResponse("Role set to user!");
    }

    @GetMapping("/keeper")
    public ResponseEntity<GeneralResponse> getKeeper() {
        return GeneralResponse.getResponse("all vigilantes!");
    }
}
