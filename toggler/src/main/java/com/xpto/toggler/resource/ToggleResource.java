package com.xpto.toggler.resource;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.xpto.toggler.model.Service;
import com.xpto.toggler.model.Toggle;

@Path("toggles")
public class ToggleResource {

	@POST
	@Path("services/list")
    public List<Toggle> getToogle() {
        return null;
    }
	
	@POST
	@Path("new")
    public Response addToogle() {
		
		List<String> servicesOn = new ArrayList<String>();
		List<String> servicesOff = new ArrayList<String>();
		
		servicesOn.add("123");
		servicesOn.add("456");
		servicesOn.add("789");
		servicesOn.add("098");
		servicesOn.add("435");
		servicesOn.add("739");
		
		servicesOff.add("ABC");
		
		Service serviceListOn = new Service();
		serviceListOn.setOverride(false);
		serviceListOn.setServiceList(servicesOn);
		
		Service serviceListOff = new Service();
		serviceListOff.setOverride(true);
		serviceListOff.setServiceList(servicesOff);
		
		Toggle toggle = new Toggle();
		toggle.setToogleName("isButtonBlue");
		toggle.setToogleValue(true);
		toggle.setPriority(1);
		toggle.setServiceListOn(serviceListOn);
		toggle.setServiceListOff(serviceListOff);
		
        return Response.ok(toggle, MediaType.APPLICATION_JSON).build();
    }
}
