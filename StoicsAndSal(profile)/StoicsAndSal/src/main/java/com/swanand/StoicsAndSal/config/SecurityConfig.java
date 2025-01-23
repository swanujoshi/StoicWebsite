package com.swanand.StoicsAndSal.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.swanand.StoicsAndSal.service.MyUserDetailsService;

import jakarta.servlet.http.HttpServletResponse;

import static org.springframework.security.config.Customizer.withDefaults;

import org.springframework.beans.factory.annotation.Autowired;


@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }
    //
    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http.authorizeHttpRequests((requests) -> requests
                        .requestMatchers("/api/auth/**").permitAll() // Allow public access
                        .anyRequest().authenticated()) // Protect all other endpoints
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED) // Enable stateful sessions
                )
                .csrf(csrf -> csrf.disable()); // Disable CSRF for APIs


        return http.build();
    }

//    @Bean
//    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//
//    	http.authorizeHttpRequests((requests) -> requests
//    			.requestMatchers("/api/auth/login","/api/auth/register").permitAll() // Allow public access
//    			.anyRequest().authenticated()) // Protect all other endpoints
//    	.formLogin(form -> form
//    			.loginProcessingUrl("/api/auth/login") // Endpoint where credentials are submitted
//    			.successHandler((req, res, auth) -> res.setStatus(HttpServletResponse.SC_OK)) // Custom success handler
//    			.failureHandler((req, res, ex) -> res.setStatus(HttpServletResponse.SC_UNAUTHORIZED)) // Custom failure handler
//    			)
//    	.logout(logout -> logout
//    			.logoutUrl("/api/auth/logout") // Endpoint for logging out
//    			.logoutSuccessHandler((req, res, auth) -> res.setStatus(HttpServletResponse.SC_OK)) // Custom logout handler
//    			)
//    	.sessionManagement(session -> session
//    			.sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED) // Enable stateful sessions
//    			)
//    	.csrf(csrf -> csrf.disable()); // Disable CSRF for APIs
//
//
//    	return http.build();
//    }
//


    @Autowired
    MyUserDetailsService myUserDetailsService;
    @Bean
    AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider newProvider=new DaoAuthenticationProvider();
        newProvider.setPasswordEncoder(new BCryptPasswordEncoder(12));
        newProvider.setUserDetailsService(myUserDetailsService);
        return newProvider;
    }



//    @Bean
//	AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
//		return config.getAuthenticationManager();
//	}
}