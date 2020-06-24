package com.eshopping.models;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 * @author Kumaravel.Sekar
 *
 */
@Document(collection = "product_category")
public class ProductCategory {

	String categoryId;
	String categoryName;
	String categoryType;

	public String getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getCategoryType() {
		return categoryType;
	}

	public void setCategoryType(String categoryType) {
		this.categoryType = categoryType;
	}
}