package com.xpto.toggler.resource;

import javax.ws.rs.Consumes;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("users")
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

	@POST
	@Path("authenticate")
	@Produces(MediaType.APPLICATION_JSON)
    public boolean authenticateUser(String username, @HeaderParam("Authorization") String auth) {
        return false;
    }
	
}
