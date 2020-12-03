package com.mariana.springboot.app.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Persona {

	private String nombre;
	
	private String  apellido;
	
	private Integer edad;
	
	
}
