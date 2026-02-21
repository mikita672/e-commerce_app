package com.mdzvtt.ecommerce.controller;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/v1/logging")
@Slf4j
public class LoggingController {
    // private static final Logger log =
    // LoggerFactory.getLogger(LoggingController.class);

    @GetMapping
    public ResponseEntity<String> testLogging() {
        log.trace("TRACE: this is a very detailed trace log.");
        log.debug("DEBUG: this is a very detailed debug log.");
        log.info("INFO: this is a very detailed info log.");
        log.warn("WARN: this is a very detailed warn log.");
        log.error("ERROR: this is a very detailed error log.");

        return ResponseEntity.ok().body("Logging tested successfully");
    }
}
