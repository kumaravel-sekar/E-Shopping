package com.eshopping.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.eshopping.models.ProductCategory;

@Repository
public interface ProductCategoryRepository extends MongoRepository<ProductCategory, Long> {
	ProductCategory findByCategoryId(String id);
	List<ProductCategory> findAll();
}