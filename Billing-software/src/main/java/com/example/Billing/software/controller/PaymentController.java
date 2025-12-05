package com.example.Billing.software.controller;

import com.example.Billing.software.io.OrderResponse;
import com.example.Billing.software.io.PaymentRequest;
import com.example.Billing.software.io.PaymentVerificationRequest;
import com.example.Billing.software.io.RazorpayOrderResponse;
import com.example.Billing.software.service.OrderService;
import com.example.Billing.software.service.RazorpayService;
import com.razorpay.RazorpayException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payments")
@RequiredArgsConstructor
public class PaymentController {
    private final RazorpayService razorpayService;
    private final OrderService orderService;

    @PostMapping("/create-order")
    @ResponseStatus(HttpStatus.CREATED)
    public RazorpayOrderResponse createRazorpayOrder(@RequestBody PaymentRequest request) throws RazorpayException {
        return razorpayService.createOrder(request.getAmount(),request.getCurrency());
    }
    @PostMapping("/verify")
    public OrderResponse verifyPayment(@RequestBody PaymentVerificationRequest request){
     return orderService.verifyPayment(request);

    }
}
