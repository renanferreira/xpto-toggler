package com.xpto.toggler.model;

public class User {
	private String username;
	private String authentication;
	protected enum role {USER, ADMIN}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getAuthentication() {
		return authentication;
	}
	public void setAuthentication(String authentication) {
		this.authentication = authentication;
	};
	
}
