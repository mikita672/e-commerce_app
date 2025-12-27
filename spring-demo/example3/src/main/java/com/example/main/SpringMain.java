package com.example.main;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.example.beans.Vehicle;
import com.example.config.ProjectConfig;

public class SpringMain {
    public static void main(String[] args) {
        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

        Vehicle primaryVehicle = context.getBean(Vehicle.class);
        System.out.println("Vehicle name: " + primaryVehicle.getName());

        Vehicle audiVehicle = context.getBean("audiVehicle", Vehicle.class);
        System.out.println("Vehicle name: " + audiVehicle.getName());

        Vehicle hondaVehicle = context.getBean("hondaVehicle", Vehicle.class);
        System.out.println("Vehicle name: " + hondaVehicle.getName());

        Vehicle ferrariVehicle = context.getBean("ferrariVehicle", Vehicle.class);
        System.out.println("Vehicle name: " + ferrariVehicle.getName());

        context.close();
    }
}
