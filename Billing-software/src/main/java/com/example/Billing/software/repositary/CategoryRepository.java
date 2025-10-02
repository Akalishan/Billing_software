package com.example.Billing.software.repositary;

import com.example.Billing.software.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Long>{

    static Optional<CategoryEntity> findByCategoryId(String categoryId) {
        return null;
    }
}
