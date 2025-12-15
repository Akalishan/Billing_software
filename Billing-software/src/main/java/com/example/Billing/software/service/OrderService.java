package com.example.Billing.software.service;

import com.example.Billing.software.io.OrderRequest;
import com.example.Billing.software.io.OrderResponse;
import com.example.Billing.software.io.PaymentVerificationRequest;

import java.awt.print.Pageable;
import java.time.LocalDate;
import java.util.List;

public interface OrderService {
  OrderResponse createOrder(OrderRequest request);
  void deleteOrder(String orderId);
  List<OrderResponse> getLatestOrder();
  OrderResponse verifyPayment(PaymentVerificationRequest request);
  Double sumSalesByDate(LocalDate date);
  Long countByOrderDate(LocalDate date);
  List<OrderResponse> findRecentOrders();

}
