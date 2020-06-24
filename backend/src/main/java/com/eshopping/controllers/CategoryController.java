package com.eshopping.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.eshopping.models.ProductCategory;
import com.eshopping.service.ProductService;

@RestController
public class CategoryController {
	
	@Autowired
	ProductService productService;
	
	@GetMapping(value = "/category/{id}")
	public ResponseEntity < ProductCategory > getCategory(@PathVariable String id) {
		ProductCategory category = productService.getProductCategory(id);
		return new ResponseEntity < >(category, HttpStatus.OK);
	}
	
	@GetMapping(value = "/categories")
	public ResponseEntity <List <ProductCategory>> getAllCategory() {
		List <ProductCategory> categoryList = productService.getAllProductCategory();
		return new ResponseEntity < >(categoryList, HttpStatus.OK);
	}
}
