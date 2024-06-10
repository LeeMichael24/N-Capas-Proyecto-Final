package com.simple.coloniahlvs.controllers;

import com.simple.coloniahlvs.domain.dto.GeneralResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/config")
@Slf4j
public class ConfigController {
    @PostMapping("/qr-period")
    public ResponseEntity<GeneralResponse> updateQRPeriod() {
        return GeneralResponse.getResponse("QR period updated!");
    }
}

