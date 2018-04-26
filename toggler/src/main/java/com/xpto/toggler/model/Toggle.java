package com.xpto.toggler.model;

public class Toggle {
	private String toogleName;
	private boolean	toogleValue;
	private int priority;
	private Service serviceListOn;
	private Service serviceListOff;
	
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
	public Service getServiceListOn() {
		return serviceListOn;
	}
	public void setServiceListOn(Service serviceListOn) {
		this.serviceListOn = serviceListOn;
	}
	public Service getServiceListOff() {
		return serviceListOff;
	}
	public void setServiceListOff(Service serviceListOff) {
		this.serviceListOff = serviceListOff;
	}
}
