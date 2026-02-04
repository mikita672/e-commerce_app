package com.mdzvtt.ecommerce.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mdzvtt.ecommerce.entity.Product;
import com.mdzvtt.ecommerce.repository.ProductRepository;
import com.mdzvtt.ecommerce.service.IProductService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements IProductService {
    private final ProductRepository productRepository;

    @Override
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

}
