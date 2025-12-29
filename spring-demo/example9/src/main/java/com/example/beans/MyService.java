package com.example.beans;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("singleton")
public class MyService {
    public MyService() {
        System.out.println("My service created!");
    }
}
