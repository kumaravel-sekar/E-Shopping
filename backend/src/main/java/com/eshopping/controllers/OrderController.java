package com.eshopping.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eshopping.models.Order;
import com.eshopping.service.OrderService;

@RestController
public class OrderController {
	@Autowired
	OrderService orderService;
	
	@GetMapping(value = "/order")
	public ResponseEntity <List <Order>> getAllOrder() {
	List<Order> orderList = orderService.getAllOrderInfo();
		return new ResponseEntity < >(orderList, HttpStatus.OK);
	}
}
