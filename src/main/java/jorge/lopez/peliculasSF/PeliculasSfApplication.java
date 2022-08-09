package jorge.lopez.peliculasSF;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import jorge.lopez.peliculasSF.jwt.config.JwtFilter;

@SpringBootApplication
public class PeliculasSfApplication {

	public static void main(String[] args) {
		SpringApplication.run(PeliculasSfApplication.class, args);
	}

	@Bean
	public FilterRegistrationBean<JwtFilter> jwtFilter() {
		FilterRegistrationBean<JwtFilter> registrationBean = new FilterRegistrationBean<JwtFilter>();
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/api/data/*");
		return registrationBean;
	}

}
