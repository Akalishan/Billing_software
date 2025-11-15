package com.example.Billing.software.service;

import com.example.Billing.software.io.RazorpayOrderResponse;
import com.razorpay.RazorpayException;

public interface RazorpayService {
   RazorpayOrderResponse createOrder(Double amount, String currency) throws RazorpayException;
}
