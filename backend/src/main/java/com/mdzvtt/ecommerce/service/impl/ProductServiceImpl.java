package com.mdzvtt.ecommerce.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.mdzvtt.ecommerce.dto.ProductDto;
import com.mdzvtt.ecommerce.entity.Product;
import com.mdzvtt.ecommerce.repository.ProductRepository;
import com.mdzvtt.ecommerce.service.IProductService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements IProductService {
    private final ProductRepository productRepository;

    @Override
    public List<ProductDto> getProducts() {
        return productRepository.findAll().stream().map(this::transformToDTO).collect(Collectors.toList());
    }

    private ProductDto transformToDTO(Product product) {
        ProductDto productDto = new ProductDto();
        BeanUtils.copyProperties(product, productDto);
        return productDto;
    }

}
