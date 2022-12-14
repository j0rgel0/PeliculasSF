package jorge.lopez.peliculasSF.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="usuarios")
public class Usuario {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="idusuarios", unique=true, nullable=false)
	private Long id;
	@Column(name="nombre", nullable = false)
	private String nombre;
	@Column(name="email", nullable = false)
	private String username;
	@Column(name="password", nullable = false)
	private String password;
	
	public Usuario() {} //Constructor default

	public Usuario(Long id, String nombre, String username, String password) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.username = username;
		this.password = password;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Usuario [id=" + id + ", nombre=" + nombre + ", username=" + username + ", password=" + password + "]";
	}

}
