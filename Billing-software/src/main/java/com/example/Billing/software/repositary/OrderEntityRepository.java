package com.example.Billing.software.repositary;

import com.example.Billing.software.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OrderEntityRepository extends JpaRepository<OrderEntity,Long> {
   Optional<OrderEntity> findByOrderId(String orderId);
   List<OrderEntity> findAllByOrderCreatedAtDesc();
}
