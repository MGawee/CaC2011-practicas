package com.mariana.springboot.app.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mariana.springboot.app.models.Perro;
import com.mariana.springboot.app.models.Persona;

import io.swagger.v3.oas.annotations.Operation;

@RestController
public class AppController {

	@Operation(summary = "Obtiene home o Pooh", description = "" + "la cabeza hace poooohh")

	@RequestMapping(value = "/Pooh", method = RequestMethod.GET)
	String home() {
		return "<h1>Buenas noches JavaFullStack CaC</h1>" + "<h2>Holitas</h2>"
				+ "<iframe src=\"https://giphy.com/embed/l4FGvUYI0tETAQwGk\" width=\"480\" height=\"270\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/debbyryan-debby-ryan-l4FGvUYI0tETAQwGk\"></a></p>";
	}

	@Operation(summary = "Obtiene Persona", description = "" + "Obtiene los datos de la persona")

	@RequestMapping(value = "/obtenerPersona", method = RequestMethod.GET)
	String persona() {
		Persona persona1 = new Persona("Mariana", "Garcia", 45);
		return persona1.toString();

	}

	@Operation(summary = "Obtiene perro", description = "" + "Con este servicio se obtienen los datos de un perro")

	@RequestMapping(value = "/obtenerPerro", method = RequestMethod.GET)
	String perro() {
		Perro perro1 = new Perro("Quinn", "Husky", 5);
		return perro1.toString();

	}
}
