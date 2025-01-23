package com.swanand.StoicsAndSal.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Member {
	
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO )
	private Long id;
	private String name;
	private String role;
	
	@Column(columnDefinition = "LONGTEXT")
	private String imageData;
	
	public Member() {
		
	}
	public Member(Long id, String name, String role,String imageData) {
		super();
		this.id = id;
		this.name = name;
		this.role = role;
		
		this.imageData=imageData;
	}
	
	public String getData() {
		return imageData;
	}
	public void setImageData(String imageData) {
		this.imageData = imageData;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
}
