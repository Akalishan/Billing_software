package com.example.Billing.software.controller;

import com.example.Billing.software.io.OrderRequest;
import com.example.Billing.software.io.OrderResponse;
import com.example.Billing.software.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class OrderController {
   private final OrderService orderService;

   @PostMapping
   @ResponseStatus(HttpStatus.CREATED)
    public OrderResponse createOrder(@RequestBody OrderRequest request){
      return   orderService.createOrder(request);
   }
   @ResponseStatus(HttpStatus.NO_CONTENT)
   @DeleteMapping("/{orderId}")
   public void deleteOrder(@PathVariable String orderId){
       orderService.deleteOrder(orderId);
   }
   @GetMapping("/latest")
   public List<OrderResponse> getLatestOrders(){
    return orderService.getLatestOrder();
   }
}
