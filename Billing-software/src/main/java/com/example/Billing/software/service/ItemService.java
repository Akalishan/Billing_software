package com.example.Billing.software.service;

import com.example.Billing.software.io.ItemRequest;
import com.example.Billing.software.io.ItemResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ItemService {
   ItemResponse add(ItemRequest request, MultipartFile file);
   List<ItemResponse> fetchItems();
   void deleteItem(String itemId);
}
