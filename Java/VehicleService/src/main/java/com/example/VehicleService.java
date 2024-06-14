package com.example;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.List;

@WebService
public class VehicleService {
    private Database database = new Database();

    @WebMethod
    public List<Vehicle> getVehicles() {
        return database.getVehicles();
    }

    @OPTIONS
    @Path("/vehicles")
    public Response handleOptions() {
        return Response.ok()
                .header("Allow", "GET, POST, OPTIONS")
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
                .header("Access-Control-Allow-Headers", "Content-Type")
                .build();
    }
}
