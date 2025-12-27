package com.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.beans.Vehicle;

@Configuration
public class ProjectConfig {

    /*
     * @Bean annotation, which lets Spring know that it needs to call
     * this method when it initializes its context and adds the returned
     * value to the context.
     */
    @Bean
    Vehicle vehicle() {
        Vehicle vehicle = new Vehicle();
        vehicle.setName("Tesla");
        return vehicle;
    }

    /*
     * The method names usually follow verbs notation. But for methods
     * which we will use to create beans, can use nouns as names.
     * This will be a good practise as the method names will become
     * bean names as well in the context.
     */
    @Bean
    String hello() {
        return "Hello, Wrld!";
    }

    @Bean
    Integer number() {
        return 16;
    }
}
