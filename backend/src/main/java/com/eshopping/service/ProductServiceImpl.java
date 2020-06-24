package com.eshopping.service;

import java.nio.ByteBuffer;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eshopping.models.Order;
import com.eshopping.models.OrderResponse;
import com.eshopping.models.ProductCategory;
import com.eshopping.models.ProductInOrder;
import com.eshopping.models.ProductInfo;
import com.eshopping.repository.OrderRepository;
import com.eshopping.repository.ProductCategoryRepository;
import com.eshopping.repository.ProductInOrderRepository;
import com.eshopping.repository.ProductInfoRepository;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	ProductCategoryRepository productCategoryRepository;
	
	@Autowired
	ProductInfoRepository productInfoRepository;
	
	@Autowired
	ProductInOrderRepository productInOrderRepository;
	
	@Autowired
	OrderRepository orderRepository;
	
	@Override
	public ProductCategory getProductCategory(String id) {
		return productCategoryRepository.findByCategoryId(id);
	}

	@Override
	public List<ProductCategory> getAllProductCategory() {
		return productCategoryRepository.findAll();
	}

	@Override
	public List<ProductInfo> getProductsByCategory(String id) {
		return productInfoRepository.findByCategoryId(id);
	}

	@Override
	public List<ProductInfo> getAllProductInfo() {
		return productInfoRepository.findAll();
	}

	@Override
	public ProductInfo getProductById(String productId) {
		return productInfoRepository.findByProductId(productId);
	}

	@Override
	public OrderResponse saveProductInOrder(List<ProductInOrder> productInOrderList) {
		OrderResponse orderResponse = new OrderResponse();
		String orderNumber = getOrderNumber().toUpperCase();
		orderResponse.setOrderNumber(orderNumber);
		Double orderAmount = 0.0;
		for(ProductInOrder productInOrder: productInOrderList) {
			orderAmount += productInOrder.getProductPrice();
			productInOrder.setOrderNumber(orderNumber);
			productInOrderRepository.save(productInOrder);
		}
		Order order = new Order();
		order.setOrderNumber(orderNumber);
		order.setOrderAmount(orderAmount);
		Calendar c = Calendar.getInstance();
		c.add(Calendar.DAY_OF_MONTH, 2);
		order.setDeliveryDate(c.getTime());
		order.setOrderDate(new Date());
		order.setOrderStatus("processing");
		orderRepository.save(order);
		return orderResponse;
	}
	
	private static String getOrderNumber() {
	  UUID uuid = UUID.randomUUID();
	  long l = ByteBuffer.wrap(uuid.toString().getBytes()).getLong();
	  return Long.toString(l, Character.MAX_RADIX);
	}
}