package com.eshopping.models;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 * @author Kumaravel.Sekar
 *
 */
@Document(collection = "product_in_order")
public class ProductInOrder {

	String orderNumber;
	String productId;
	String productName;
	Double productPrice;
	String productIcon;
	String categoryType;
	Integer count;
	public String getOrderNumber() {
		return orderNumber;
	}
	public void setOrderNumber(String orderNumber) {
		this.orderNumber = orderNumber;
	}
	public String getProductId() {
		return productId;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public Double getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(Double productAmount) {
		this.productPrice = productAmount;
	}
	public String getProductIcon() {
		return productIcon;
	}
	public void setProductIcon(String productIcon) {
		this.productIcon = productIcon;
	}
	public String getCategoryType() {
		return categoryType;
	}
	public void setCategoryType(String categoryType) {
		this.categoryType = categoryType;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	
}