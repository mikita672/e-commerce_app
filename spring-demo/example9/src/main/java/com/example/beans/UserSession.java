package com.example.beans;

import java.util.UUID;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("prototype")
public class UserSession {
    private String sessionId;

    public String getSessionId() {
        return sessionId;
    }

    public UserSession() {
        this.sessionId = UUID.randomUUID().toString();
    }
}
