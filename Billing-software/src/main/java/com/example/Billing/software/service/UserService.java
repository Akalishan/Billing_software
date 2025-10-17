package com.example.Billing.software.service;

import com.example.Billing.software.io.UserRequest;
import com.example.Billing.software.io.UserResponse;

import java.util.List;

public interface UserService {
    UserResponse createUser(UserRequest request);
    String getUserRole(String email);
    List<UserResponse> readUsers();
    void  deleteUser(String id);
}
