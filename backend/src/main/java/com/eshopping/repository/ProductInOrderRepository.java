package com.eshopping.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.eshopping.models.ProductInOrder;

@Repository
public interface ProductInOrderRepository extends MongoRepository<ProductInOrder, Long> {

	<S extends ProductInOrder> S save(ProductInOrder productInOrder);
	List<ProductInOrder> findAll();
}