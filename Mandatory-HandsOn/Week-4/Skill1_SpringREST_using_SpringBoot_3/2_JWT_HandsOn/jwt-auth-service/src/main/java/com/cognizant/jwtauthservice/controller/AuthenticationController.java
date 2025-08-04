package com.cognizant.jwtauthservice.controller;

import com.cognizant.jwtauthservice.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public Map<String, String> generateToken(Authentication authentication) {
        String token = jwtUtil.generateToken(authentication.getName());
        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        return response;
    }
}
