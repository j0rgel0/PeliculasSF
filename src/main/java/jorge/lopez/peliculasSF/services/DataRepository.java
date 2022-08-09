package jorge.lopez.peliculasSF.services;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import jorge.lopez.peliculasSF.model.Data;

public interface DataRepository extends JpaRepository<Data, Long>{
	//	Producto es de Producto.java
	@Query("SELECT p FROM Data p WHERE p.title=?1")
	Optional<Data> findByTitle(String title);
}