package com.example.Billing.software.service;

import com.example.Billing.software.io.CategoryRequest;
import com.example.Billing.software.io.CategoryResponse;

public interface CategoryService {
    CategoryResponse add(CategoryRequest request);
}
