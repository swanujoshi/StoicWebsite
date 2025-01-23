package com.swanand.StoicsAndSal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.swanand.StoicsAndSal.exceptions.ResourceNotFoundException;
import com.swanand.StoicsAndSal.model.MyUserDetails;
import com.swanand.StoicsAndSal.repository.UserRepository;
import com.swanand.StoicsAndSal.model.User;


@Service
public class MyUserDetailsService implements UserDetailsService {

	
	
	@Autowired
	private UserRepository userRepo;
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		User user=userRepo.findByEmail(email);
		if(user==null)
			throw new ResourceNotFoundException("Invalid Credentials");
		return new MyUserDetails(user);
	}

}
