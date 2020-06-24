package com.eshopping.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.eshopping.models.ProductInfo;

@Repository
public interface ProductInfoRepository extends MongoRepository<ProductInfo, Long> {
	List<ProductInfo> findByCategoryId(String id);
	List<ProductInfo> findAll();
	ProductInfo findByProductId(String productId);
}