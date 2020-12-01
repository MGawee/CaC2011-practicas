package com.mariana.springboot.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@SpringBootApplication
public class ProyectoSpringbootCacApplication {

	@RequestMapping("/")
	@ResponseBody
	String home() {
		return "<h1>Buenas noches JavaFullStack CaC</h1>" + "<h2>Holitas</h2>"
				+ "<iframe src=\"https://giphy.com/embed/l4FGvUYI0tETAQwGk\" width=\"480\" height=\"270\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/debbyryan-debby-ryan-l4FGvUYI0tETAQwGk\"></a></p>";
	}

	public static void main(String[] args) {
		SpringApplication.run(ProyectoSpringbootCacApplication.class, args);
	}

}
