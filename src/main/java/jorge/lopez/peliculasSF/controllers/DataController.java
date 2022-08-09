package jorge.lopez.peliculasSF.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import jorge.lopez.peliculasSF.model.Data;
import jorge.lopez.peliculasSF.services.DataServices;

@RestController
@RequestMapping (path="/api/data/")
@CrossOrigin(origins = "*")
public class DataController {

	///////////////////////////////////
	// Se manda a llamar al servicio //
	///////////////////////////////////
	private final DataServices dataServices;

	@Autowired
	public DataController(DataServices dataServices) {
		this.dataServices = dataServices;
	}//constructor

	///////////////////////////////////
	//     CRUD                      //
	///////////////////////////////////
	@GetMapping
	public List<Data> getAllData() {
		return dataServices.getData();
	}//getAllProducts

	@GetMapping (path="{prodId}")
	public Data getData(@PathVariable("prodId") Long id) {
		return dataServices.getData(id);
	}

	@DeleteMapping (path="{prodId}")
	public Data deleteData(@PathVariable("prodId") Long id) {
		return dataServices.deleteData(id);
	}
	@PostMapping
	public Data addData(@RequestBody Data data) {
		return dataServices.addData(data);
	}
	@PutMapping (path="{prodId}")
	public Data updateData (@PathVariable("prodId") Long id,
			@RequestParam (required = false)String title,
			@RequestParam (required = false)String release_year,
			@RequestParam (required = false)String locations,
			@RequestParam (required = false)String fun_facts,
			@RequestParam (required = false)String production_company,
			@RequestParam (required = false)String distributor,
			@RequestParam (required = false)String director,
			@RequestParam (required = false)String writer,
			@RequestParam (required = false)String actor_1,
			@RequestParam (required = false)String actor_2,
			@RequestParam (required = false)String actor_3) {
		return dataServices.updateData(id, title,
				release_year, locations, fun_facts, production_company,distributor,director,writer,actor_1,actor_2,actor_3);
	}
}
