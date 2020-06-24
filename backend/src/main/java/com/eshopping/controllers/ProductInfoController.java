package com.eshopping.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.eshopping.models.ProductInfo;
import com.eshopping.service.ProductService;

@RestController
public class ProductInfoController {
	
	@Autowired
	ProductService productService;
	
	@GetMapping(value = "/product/category/{categoryId}")
	public ResponseEntity<List<ProductInfo>> getProductsByCategory(@PathVariable String categoryId) {
		List<ProductInfo> info = productService.getProductsByCategory(categoryId);
		return new ResponseEntity < >(info, HttpStatus.OK);
	}
	
	@GetMapping(value = "/products")
	public ResponseEntity <List <ProductInfo>> getAllProducts() {
		List <ProductInfo> productList = productService.getAllProductInfo();
		return new ResponseEntity < >(productList, HttpStatus.OK);
	}
	
	@GetMapping(value = "/product/{productId}")
	public ResponseEntity <ProductInfo> getProductById(@PathVariable String productId) {
		ProductInfo info = productService.getProductById(productId);
		return new ResponseEntity < >(info, HttpStatus.OK);
	}
}
