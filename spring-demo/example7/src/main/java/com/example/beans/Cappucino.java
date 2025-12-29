package com.example.beans;

import org.springframework.stereotype.Component;

@Component("cappucino")
public class Cappucino implements Coffee {

    @Override
    public String makeCofee() {
        return "Cappucino Coffee";
    }

}
