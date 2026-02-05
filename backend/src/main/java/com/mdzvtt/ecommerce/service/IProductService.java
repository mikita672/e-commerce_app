package com.mdzvtt.ecommerce.service;

import java.util.List;

import com.mdzvtt.ecommerce.dto.ProductDto;

public interface IProductService {
    List<ProductDto> getProducts();
}
