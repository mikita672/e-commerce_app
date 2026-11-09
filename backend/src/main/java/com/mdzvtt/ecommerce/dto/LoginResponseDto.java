package com.mdzvtt.ecommerce.dto;

public record LoginResponseDto(String message, UserDto user, String jwtToken) {

}
