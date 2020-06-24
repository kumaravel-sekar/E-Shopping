package com.eshopping.service;

import java.util.List;

import com.eshopping.models.OrderResponse;
import com.eshopping.models.ProductCategory;
import com.eshopping.models.ProductInOrder;
import com.eshopping.models.ProductInfo;

public interface ProductService {
	ProductCategory getProductCategory(String id);
	List<ProductCategory> getAllProductCategory();
	
	List<ProductInfo> getProductsByCategory(String id);
	List<ProductInfo> getAllProductInfo();
	
	ProductInfo getProductById(String productId);
	
	OrderResponse saveProductInOrder(List<ProductInOrder> productInOrderList);
}