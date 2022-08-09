package jorge.lopez.peliculasSF.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jorge.lopez.peliculasSF.model.Data;

@Service
public class DataServices {
	//definir productos //lista constante final
	private final DataRepository dataRepository;

	@Autowired
	public DataServices(DataRepository dataRepository) {
		this.dataRepository = dataRepository;
	}
	
	public List<Data> getData(){
		return dataRepository.findAll();
	}
	public Data getData(Long id) {
		return dataRepository.findById(id).orElseThrow(
				()->new IllegalArgumentException("El registro con el id"+ id + " no existe."));
	}	
	
	public Data deleteData(Long id) {
		Data tmpProd = null;
		if (dataRepository.existsById(id)) {
			tmpProd= dataRepository.findById(id).get();
			dataRepository.deleteById(id);
		}
		return tmpProd;
	}
	
	public Data addData(Data data) {
		Data tmpProd = null;
		Optional<Data> prodByName = dataRepository.findByTitle(data.getTitle());
		
		if (prodByName.isPresent()) {
			throw new IllegalArgumentException("El registro con el título [" + data.getTitle() + "] ya existe");
		}else {
			dataRepository.save(data);
			tmpProd=data;
		}
		return tmpProd;
	}
	public Data updateData(Long id, String title, String release_year, String locations, String fun_facts,
			String production_company, String distributor, String director, String writer, String actor_1,
			String actor_2, String actor_3) {
		Data tmpProd = null;
		if(dataRepository.existsById(id)) {
				tmpProd = dataRepository.findById(id).get();
				if(title!=null)tmpProd.setTitle(title);
				if(release_year!=null)tmpProd.setRelease_year(release_year);
				if(locations!=null)tmpProd.setLocations(locations);
				if(fun_facts!=null)tmpProd.setFun_facts(fun_facts);
				if(production_company!=null)tmpProd.setProduction_company(production_company);
				if(distributor!=null)tmpProd.setDistributor(distributor);
				if(director!=null)tmpProd.setDirector(director);
				if(writer!=null)tmpProd.setWriter(writer);
				if(actor_1!=null)tmpProd.setActor_1(actor_1);
				if(actor_2!=null)tmpProd.setActor_2(actor_2);
				if(actor_3!=null)tmpProd.setActor_3(actor_3);
				dataRepository.save(tmpProd);
		}else {
			System.out.println("El registro con el id"+ id + "no existe.");
		}
		return tmpProd; // Regresa null en caso de que no sea correcto
	}
	
	
}//class DataServices