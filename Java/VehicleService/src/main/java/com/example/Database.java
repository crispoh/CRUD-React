package com.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class Database {
    public List<Vehicle> getVehicles() {
        List<Vehicle> vehicles = new ArrayList<>();
        try {
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/rentacar_db", "root", "Cri$1357");
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM vehicles LIMIT 10");
            while (rs.next()) {
                Vehicle vehicle = new Vehicle();
                vehicle.setId(rs.getInt("id"));
                vehicle.setSellerRut(rs.getString("seller_rut"));
                vehicle.setName(rs.getString("name"));
                vehicle.setLicensePlate(rs.getString("license_plate"));
                vehicle.setBrand(rs.getString("brand"));
                vehicle.setModel(rs.getString("model"));
                vehicle.setPrice(rs.getInt("price"));
                vehicles.add(vehicle);
            }
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return vehicles;
    }
}
