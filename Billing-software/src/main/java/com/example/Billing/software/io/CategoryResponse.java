package com.example.Billing.software.io;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class CategoryResponse {
    private String categoryId;
    private String name;
    private String description;
    private String bgColor;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private String imgUrl;

    CategoryResponse(String categoryId, String name, String description, String bgColor, Timestamp createdAt, Timestamp updatedAt, String imgUrl) {
        this.categoryId = categoryId;
        this.name = name;
        this.description = description;
        this.bgColor = bgColor;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.imgUrl = imgUrl;
    }

    public static CategoryResponseBuilder builder() {
        return new CategoryResponseBuilder();
    }

    public static class CategoryResponseBuilder {
        private String categoryId;
        private String name;
        private String description;
        private String bgColor;
        private Timestamp createdAt;
        private Timestamp updatedAt;
        private String imgUrl;

        CategoryResponseBuilder() {
        }

        public CategoryResponseBuilder categoryId(String categoryId) {
            this.categoryId = categoryId;
            return this;
        }

        public CategoryResponseBuilder name(String name) {
            this.name = name;
            return this;
        }

        public CategoryResponseBuilder description(String description) {
            this.description = description;
            return this;
        }

        public CategoryResponseBuilder bgColor(String bgColor) {
            this.bgColor = bgColor;
            return this;
        }

        public CategoryResponseBuilder createdAt(Timestamp createdAt) {
            this.createdAt = createdAt;
            return this;
        }

        public CategoryResponseBuilder updatedAt(Timestamp updatedAt) {
            this.updatedAt = updatedAt;
            return this;
        }

        public CategoryResponseBuilder imgUrl(String imgUrl) {
            this.imgUrl = imgUrl;
            return this;
        }

        public CategoryResponse build() {
            return new CategoryResponse(this.categoryId, this.name, this.description, this.bgColor, this.createdAt, this.updatedAt, this.imgUrl);
        }

        public String toString() {
            return "CategoryResponse.CategoryResponseBuilder(categoryId=" + this.categoryId + ", name=" + this.name + ", description=" + this.description + ", bgColor=" + this.bgColor + ", createdAt=" + this.createdAt + ", updatedAt=" + this.updatedAt + ", imgUrl=" + this.imgUrl + ")";
        }
    }
}
