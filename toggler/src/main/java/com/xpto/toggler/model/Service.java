package com.xpto.toggler.model;

import java.util.List;

public class Service {
	private List<String> services;
	private boolean override;
	
	public List<String> getServiceList() {
		return services;
	}
	public void setServiceList(List<String> services) {
		this.services = services;
	}
	public boolean isOverride() {
		return override;
	}
	public void setOverride(boolean override) {
		this.override = override;
	}	
	
}
