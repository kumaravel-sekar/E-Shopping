package com.eshopping.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.eshopping.models.OrderResponse;
import com.eshopping.models.ProductInOrder;
import com.eshopping.service.ProductService;

@RestController
public class ProductInOrderController {
	
	@Autowired
	ProductService productService;
	
	@PostMapping(path = "/checkout", consumes = "application/json", produces = "application/json")
	public ResponseEntity<OrderResponse> saveCategory(@RequestBody List<ProductInOrder> productInOrderList) {
		OrderResponse orderResponse = productService.saveProductInOrder(productInOrderList);
		return new ResponseEntity < >(orderResponse, HttpStatus.OK);
	}
	
}
