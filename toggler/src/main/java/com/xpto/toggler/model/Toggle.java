package com.xpto.toggler.model;

import java.util.List;

public class Toggle {
	private String toogleName;
	private boolean	toogleValue;
	private int priority;
	private List<Service> serviceListOn;
	private List<Service> serviceListOff;
	
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
	public List<Service> getServiceListOn() {
		return serviceListOn;
	}
	public void setServiceListOn(List<Service> serviceListOn) {
		this.serviceListOn = serviceListOn;
	}
	public List<Service> getServiceListOff() {
		return serviceListOff;
	}
	public void setServiceListOff(List<Service> serviceListOff) {
		this.serviceListOff = serviceListOff;
	}
}
