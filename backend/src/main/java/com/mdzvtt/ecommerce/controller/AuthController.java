package com.mdzvtt.ecommerce.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mdzvtt.ecommerce.dto.LoginRequestDto;
import com.mdzvtt.ecommerce.dto.LoginResponseDto;
import com.mdzvtt.ecommerce.dto.RegisterRequestDto;
import com.mdzvtt.ecommerce.dto.UserDto;
import com.mdzvtt.ecommerce.util.JwtUtil;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;
    private final InMemoryUserDetailsManager inMemoryUserDetailsManager;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> apiLogin(@RequestBody LoginRequestDto loginRequestDto) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequestDto.username(), loginRequestDto.password()));
            var loggedInUser = (User) authentication.getPrincipal();
            var userDto = new UserDto();
            userDto.setName(loggedInUser.getUsername());
            String jwtToken = jwtUtil.genereateJwtToken(authentication);

            return ResponseEntity.status(HttpStatus.OK)
                    .body(new LoginResponseDto(HttpStatus.OK.getReasonPhrase(), userDto, jwtToken));
        } catch (BadCredentialsException ex) {
            return buildErrorResponse(HttpStatus.UNAUTHORIZED, "Invalid username or password");
        } catch (AuthenticationException ex) {
            return buildErrorResponse(HttpStatus.UNAUTHORIZED, "Authentication failed");
        } catch (Exception ex) {
            log.error("Login failed", ex);
            return buildErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, "An unexpected error occured");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@Valid RegisterRequestDto registerRequestDto) {
        inMemoryUserDetailsManager.createUser(new User(registerRequestDto.getEmail(),
                passwordEncoder.encode(registerRequestDto.getPassword()), List.of(new SimpleGrantedAuthority("User"))));
        return ResponseEntity.status(HttpStatus.CREATED).body("Registration successful");
    }

    private ResponseEntity<LoginResponseDto> buildErrorResponse(HttpStatus status, String message) {
        return ResponseEntity.status(status).body(new LoginResponseDto(message, null, null));
    }
}
