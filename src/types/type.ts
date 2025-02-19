// User table
export interface User {
    Id_users: number;
    username: string;
    password: string;
    role: "admin" | "client";
    email: string;
}

// Product table
export interface Product {
    Id_product: number;
    name: string;
    description: string;
    image: string;
    price: number;
}

// Category table
export interface Category {
    Id_category: number;
    name: string;
}

// Order table
export interface Order {
    Id_order: number;
    order_numbers: string;
    Id_users: number;
    shipping_cost: number;
    order_status: "pending" | "shipped" | "delivered" | "cancelled";
    products: OrderProduct[];
    promotion?: Promotion; // Optional
}

export interface OrderProduct {
    Id_product: number;
    quantity: number;
}

export interface Promotion {
    promo_code: string;
    discount_value: number;
    discount_type: "percentage" | "fixed";
}

// Review table
export interface Review {
    Id_review: number;
    Id_product: number;
    Id_users: number;
    rating: number;
    comment: string;
    created_at: string;
}

// Favorite table
export interface Favorite {
    Id_users: number;
    Id_product: number;
}

// Product-Category join table
export interface ProductCategory {
    Id_product: number;
    Id_category: number;
}

// Product-Order join table
export interface ProductOrder {
    Id_product: number;
    Id_order: number;
    quantity: number;
}

// Order-Promotion join table
export interface OrderPromotion {
    Id_order: number;
    Id_promotion: number;
}
