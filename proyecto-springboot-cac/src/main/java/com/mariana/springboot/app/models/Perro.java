package com.mariana.springboot.app.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Perro {

	private String nombre;
	
	private String  raza;
	
	private Integer edad;
	
}
