package com.xpto.toggler.resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.xpto.toggler.model.Toggle;

@Path("toggles")
@Consumes(MediaType.APPLICATION_JSON)
public class ToggleResource {

	@POST
	@Path("services/list")
	@Produces(MediaType.APPLICATION_JSON)
    public List<Toggle> getToogle() {
        return null;
    }
	
	@POST
	@Path("new")
	@Produces(MediaType.APPLICATION_JSON)
    public String addToogle() {
        return "Toggle Added";
    }
}
