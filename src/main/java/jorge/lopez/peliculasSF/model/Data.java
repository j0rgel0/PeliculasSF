package jorge.lopez.peliculasSF.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="elementos")

public class Data {
	@Id
	@GeneratedValue(strategy = GenerationType. IDENTITY)
	@Column(name ="idelementos", unique =true, nullable= false)
	private Long id;
	private String title;
	private String release_year; 
	private String locations;
	private String fun_facts;
	private String production_company;
	private String distributor;
	private String director;
	private String writer;
	private String actor_1;
	private String actor_2;
	private String actor_3;
	
	public Data() {} //Constructor default
	
	public Data(Long id, String title, String release_year, String locations, String fun_facts,
			String production_company, String distributor, String director, String writer, String actor_1,
			String actor_2, String actor_3) {
		super();
		this.id = id;
		this.title = title;
		this.release_year = release_year;
		this.locations = locations;
		this.fun_facts = fun_facts;
		this.production_company = production_company;
		this.distributor = distributor;
		this.director = director;
		this.writer = writer;
		this.actor_1 = actor_1;
		this.actor_2 = actor_2;
		this.actor_3 = actor_3;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getRelease_year() {
		return release_year;
	}
	public void setRelease_year(String release_year) {
		this.release_year = release_year;
	}
	public String getLocations() {
		return locations;
	}
	public void setLocations(String locations) {
		this.locations = locations;
	}
	public String getFun_facts() {
		return fun_facts;
	}
	public void setFun_facts(String fun_facts) {
		this.fun_facts = fun_facts;
	}
	public String getProduction_company() {
		return production_company;
	}
	public void setProduction_company(String production_company) {
		this.production_company = production_company;
	}
	public String getDistributor() {
		return distributor;
	}
	public void setDistributor(String distributor) {
		this.distributor = distributor;
	}
	public String getDirector() {
		return director;
	}
	public void setDirector(String director) {
		this.director = director;
	}
	public String getWriter() {
		return writer;
	}
	public void setWriter(String writer) {
		this.writer = writer;
	}
	public String getActor_1() {
		return actor_1;
	}
	public void setActor_1(String actor_1) {
		this.actor_1 = actor_1;
	}
	public String getActor_2() {
		return actor_2;
	}
	public void setActor_2(String actor_2) {
		this.actor_2 = actor_2;
	}
	public String getActor_3() {
		return actor_3;
	}
	public void setActor_3(String actor_3) {
		this.actor_3 = actor_3;
	}
	
	@Override
	public String toString() {
		return "Data [id=" + id + ", title=" + title + ", release_year=" + release_year + ", locations=" + locations
				+ ", fun_facts=" + fun_facts + ", production_company=" + production_company + ", distributor="
				+ distributor + ", director=" + director + ", writer=" + writer + ", actor_1=" + actor_1 + ", actor_2="
				+ actor_2 + ", actor_3=" + actor_3 + "]";
	}

}//class Data



