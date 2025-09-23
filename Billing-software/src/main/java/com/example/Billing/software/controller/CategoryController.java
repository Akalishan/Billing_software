package com.example.Billing.software.controller;

import com.example.Billing.software.io.CategoryRequest;
import com.example.Billing.software.io.CategoryResponse;
import com.example.Billing.software.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService  categoryService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CategoryResponse addCategory(@RequestBody CategoryRequest request){
         return categoryService.add(request);
    }
}
