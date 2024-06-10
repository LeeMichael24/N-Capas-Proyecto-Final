package com.simple.coloniahlvs.controllers;

import com.simple.coloniahlvs.domain.dto.GeneralResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/house")
@Slf4j
@CrossOrigin
public class HouseController {

    @PostMapping("/add-member")
    public ResponseEntity<GeneralResponse> addMember(@RequestBody String member) {
        return GeneralResponse.getResponse("Member added!");
    }

    @PostMapping("/remove-member")
    public ResponseEntity<GeneralResponse> removeMember(@RequestBody String member) {
        return GeneralResponse.getResponse("Member removed!");
    }

    @GetMapping("/mine")
    public ResponseEntity<GeneralResponse> getMyHouse() {
        return GeneralResponse.getResponse("My house!");
    }

    @PostMapping("/create")
    public ResponseEntity<GeneralResponse> createHouse(@RequestBody String house) {
        return GeneralResponse.getResponse("House created!");
    }

    @GetMapping("/all")
    public ResponseEntity<GeneralResponse> getAllHouses() {
        return GeneralResponse.getResponse("All houses!");
    }

    @GetMapping("/{:id}")
    public ResponseEntity<GeneralResponse> getHouse(@PathVariable String id) {
        return GeneralResponse.getResponse("House!");
    }

    @PostMapping("/delete/{:id}")
    public ResponseEntity<GeneralResponse> deleteHouse(@PathVariable String id) {
        return GeneralResponse.getResponse("House deleted!");
    }

    @PostMapping("/update")
    public ResponseEntity<GeneralResponse> updateHouse(@RequestBody String house) {
        return GeneralResponse.getResponse("House updated!");
    }

    @PostMapping("/set-manager")
    public ResponseEntity<GeneralResponse> setManager(@RequestBody String member) {
        return GeneralResponse.getResponse("Manager set to xx house! (in charge)");
    }


}
