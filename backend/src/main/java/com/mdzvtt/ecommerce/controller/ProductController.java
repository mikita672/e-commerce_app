package com.mdzvtt.ecommerce.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mdzvtt.ecommerce.service.IProductService;
import com.mdzvtt.ecommerce.dto.ProductDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/v1/products")
@RequiredArgsConstructor
public class ProductController {
    private final IProductService iProductService;

    @GetMapping
    public List<ProductDto> getProducts() {
        List<ProductDto> productList = iProductService.getProducts();
        return productList;
    }
}
