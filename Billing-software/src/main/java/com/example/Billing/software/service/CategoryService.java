package com.example.Billing.software.service;

import com.example.Billing.software.io.CategoryRequest;
import com.example.Billing.software.io.CategoryResponse;

import java.util.List;

public interface CategoryService {
    CategoryResponse add(CategoryRequest request);
    List<CategoryResponse> read();
    void  delete(String categoryId);
}
