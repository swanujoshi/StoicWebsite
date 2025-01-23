package com.swanand.StoicsAndSal.service;

import java.util.List;
import java.util.UUID;

import com.swanand.StoicsAndSal.model.Contact;
import com.swanand.StoicsAndSal.repository.ContactRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.swanand.StoicsAndSal.dto.LoginRequest;
import com.swanand.StoicsAndSal.exceptions.DuplicateEmailException;
import com.swanand.StoicsAndSal.exceptions.ResourceNotFoundException;
import com.swanand.StoicsAndSal.model.Member;
import com.swanand.StoicsAndSal.model.User;
import com.swanand.StoicsAndSal.repository.MemberRepository;
import com.swanand.StoicsAndSal.repository.UserRepository;
import org.springframework.security.core.Authentication;



@Service
public class AuthService {

	
	@Autowired
    private UserRepository userRepository;
	
	@Autowired
    private PasswordEncoder passwordEncoder;

	@Autowired
	private MemberRepository memberRepo;

	@Autowired
	private ContactRepo contactRepo;
	
//	@Autowired
//	private AuthenticationManager authManager;
	
//	@Autowired
//	private JwtService jwtService;
	
    public User register(User request) {
    	User user=userRepository.findByEmail(request.getEmail());
    	if(user!=null) {
    		throw new DuplicateEmailException("Email:"+request.getEmail()+ " is already used to create an account.");
    	}
    	request.setPassword(passwordEncoder.encode(request.getPassword()));
        return userRepository.save(request);
    }

//    public String login(LoginRequest request) {
//
//
//    	Authentication authenticationObj= authManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
//        if(authenticationObj.isAuthenticated()) {
//        	return jwtService.generateToken(user);
//        }
//        throw new ResourceNotFoundException();
//    }
public User login(User user) {
	User newUser=userRepository.findByEmail(user.getEmail());
	if(newUser==null) throw new ResourceNotFoundException();
	if(passwordEncoder.matches(user.getPassword(),newUser.getPassword())){
		return newUser;
	}
	else {
		throw new ResourceNotFoundException("Invalid Credentials");
	}
}

	public Member addMember(Member member) {
		// TODO Auto-generated method stub

		if(member==null || member.getName()==null) {
			return null;
		}
		else {
			if(member.getRole()==null)
				member.setRole("Member");
			Member newMember=memberRepo.save(member);
			return newMember;
		}
	}

	public Contact newContact(Contact contact) {
		contact.setId(UUID.randomUUID().toString());
		return contactRepo.save(contact);
	}

	public List<Member> getAllMembers(){
		return memberRepo.findAll();
	}
}
