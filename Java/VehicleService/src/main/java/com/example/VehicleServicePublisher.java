package com.example;

import javax.xml.ws.Endpoint;

public class VehicleServicePublisher {
    public static void main(String[] args) {
        Endpoint.publish("http://localhost:8080/ws/vehicle", new VehicleService());
        System.out.println("Servicio Publicado!");
    }
}
