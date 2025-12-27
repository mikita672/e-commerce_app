package com.example.main;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.example.beans.Vehicle;
import com.example.config.ProjectConfig;

public class SpringMain {
    public static void main(String[] args) {
        /*
         * The var keyword was introduced in Java 10. Type interface is used in
         * var keyword in which it detects autmoatically the datatype of a variable
         * based on the surrounding context
         */
        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

        Vehicle vehicle = context.getBean(Vehicle.class);
        System.out.println("Vehicle name: " + vehicle.getName());

        /*
         * We don't need to do any explicit casting while fetching a bean from context.
         * Spring is smart enough to look for a bean of type you requested in its
         * context.
         * If such a bean doesn't exist, Spring will throw an exception.
         */
        String hello = context.getBean(String.class);
        System.out.println("String: " + hello);

        Integer number = context.getBean(Integer.class);
        System.out.println("Number: " + number);

        context.close();
    }
}
