package com.example.Billing.software.service.impl;

import com.example.Billing.software.entity.CategoryEntity;
import com.example.Billing.software.io.CategoryRequest;
import com.example.Billing.software.io.CategoryResponse;
import com.example.Billing.software.repositary.CategoryRepository;
import com.example.Billing.software.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;

    @Override
    public CategoryResponse add(CategoryRequest request){
      CategoryEntity newCategory= covertToEntity(request);
      newCategory= categoryRepository.save(newCategory);
      return convertToResponse(newCategory);
    }

    private CategoryResponse convertToResponse(CategoryEntity newCategory) {
        return CategoryResponse.builder()
                .categoryId(newCategory.getCategoryId())
                .name(newCategory.getName())
                .description(newCategory.getDescription())
                .bgColor(newCategory.getBgColor())
                .imgUrl(newCategory.getImgUrl())
                .createdAt(newCategory.getUpdatedAt())
                .build();
    }

    private CategoryEntity covertToEntity(CategoryRequest request) {
        return CategoryEntity.builder()
                .categoryId(UUID.randomUUID().toString())
                .name(request.getName())
                .description(request.getDescription())
                .build();

    }

}
