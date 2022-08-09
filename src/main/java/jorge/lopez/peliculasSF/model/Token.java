package jorge.lopez.peliculasSF.model;

public class Token {
	private final String accessToken;
	
	public Token(String accessToken) {
		this.accessToken = accessToken;
	} //constructor
	
	public String getAccesToken() {
		return accessToken;
	}
	
}
