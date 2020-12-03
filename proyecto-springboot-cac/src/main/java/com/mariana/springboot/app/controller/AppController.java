package com.mariana.springboot.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mariana.springboot.app.models.Perro;
import com.mariana.springboot.app.models.Persona;

@Controller
public class AppController {

	@RequestMapping("/Pooh")
	@ResponseBody
	String home() {
		return "<h1>Buenas noches JavaFullStack CaC</h1>" + "<h2>Holitas</h2>"
				+ "<iframe src=\"https://giphy.com/embed/l4FGvUYI0tETAQwGk\" width=\"480\" height=\"270\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/debbyryan-debby-ryan-l4FGvUYI0tETAQwGk\"></a></p>";
	}

	@RequestMapping("/obtenerPersona")
	@ResponseBody
	String persona() {
		Persona persona1 = new Persona("Mariana", "Garcia", 45);
		return persona1.toString();

	}

	@RequestMapping("/obtenerPerro")
	@ResponseBody
	String perro() {
		Perro perro1 = new Perro("Quinn", "Husky", 5);
		return perro1.toString();

	}
}
