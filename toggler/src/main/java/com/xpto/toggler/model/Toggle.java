package com.xpto.toggler.model;

import java.util.List;

public class Toggle {
	private String toogleName;
	private boolean	toogleValue;
	private int priority;
	private boolean override;
	private List<String> allowedServices;
	private String username;
	
	public String getToogleName() {
		return toogleName;
	}
	public void setToogleName(String toogleName) {
		this.toogleName = toogleName;
	}
	public boolean isToogleValue() {
		return toogleValue;
	}
	public void setToogleValue(boolean toogleValue) {
		this.toogleValue = toogleValue;
	}
	public int getPriority() {
		return priority;
	}
	public void setPriority(int priority) {
		this.priority = priority;
	}
	public boolean isOverride() {
		return override;
	}
	public void setOverride(boolean override) {
		this.override = override;
	}
	public List<String> getAllowedServices() {
		return allowedServices;
	}
	public void setAllowedServices(List<String> allowedServices) {
		this.allowedServices = allowedServices;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
}
