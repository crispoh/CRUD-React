package com.example;

public class Vehicle {
    private int id;
    private String sellerRut;
    private String name;
    private String licensePlate;
    private String brand;
    private String model;
    private int price;

    // Getters y Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSellerRut() {
        return sellerRut;
    }

    public void setSellerRut(String sellerRut) {
        this.sellerRut = sellerRut;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    // toString()
    @Override
    public String toString() {
        return "Vehicle [id=" + id + ", sellerRut=" + sellerRut + ", name=" + name + ", licensePlate=" + licensePlate
                + ", brand=" + brand + ", model=" + model + ", price=" + price + "]";
    }
}
