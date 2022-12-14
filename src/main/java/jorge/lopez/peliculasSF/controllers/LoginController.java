package jorge.lopez.peliculasSF.controllers;


import java.util.Calendar;
import java.util.Date;
import javax.servlet.ServletException;
import jorge.lopez.peliculasSF.jwt.config.JwtFilter;
import jorge.lopez.peliculasSF.model.Token;
import jorge.lopez.peliculasSF.model.Usuario;
import jorge.lopez.peliculasSF.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping(path="/api/login/")

public class LoginController {
	private final UsuarioService usuarioService;
	
	@Autowired
	public LoginController (UsuarioService usuarioService) {
		this.usuarioService = usuarioService;
	}
	
	// objeto del tipo Token es la clase que vamos a crear
	@PostMapping
	public Token login (@RequestBody Usuario usuario) throws ServletException {
		if(usuarioService.validateUsuario(usuario)) {
			return new Token(generateToken(usuario.getUsername()));
		}
		throw new ServletException("Nombre de usuario o contraseña incorrectos.");
	}
	
	private String generateToken(String username) {
		Calendar calendar = Calendar.getInstance();  // fecha y hora actual
		calendar.add(Calendar.HOUR, 40);  // para que expire el token en 10 horas
		return Jwts.builder().setSubject(username).claim("role", "user")  // se genera web token
				.setIssuedAt(new Date()).setExpiration(calendar.getTime())  // va a expirar dentro de...
				.signWith(SignatureAlgorithm.HS256, JwtFilter.secret).compact();  // lo vas a firmar con este algoritmo
	}// generateToken


}

