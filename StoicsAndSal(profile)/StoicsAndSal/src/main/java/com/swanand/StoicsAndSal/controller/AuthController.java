package com.swanand.StoicsAndSal.controller;

import com.swanand.StoicsAndSal.exceptions.ResourceNotCreatedException;
import com.swanand.StoicsAndSal.model.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.swanand.StoicsAndSal.dto.LoginRequest;
import com.swanand.StoicsAndSal.dto.RegisterRequest;
import com.swanand.StoicsAndSal.model.Member;
import com.swanand.StoicsAndSal.model.User;
import com.swanand.StoicsAndSal.service.AuthService;

import jakarta.servlet.annotation.MultipartConfig;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

	
	@Autowired
    private AuthService authService;


    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User request) {
        return new ResponseEntity<User>(authService.register(request),HttpStatus.CREATED);
    }

    
    @GetMapping("/greet")
    public String greet() {
    	return "greet";
    }

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user){
		return new ResponseEntity<User>(authService.login(user),HttpStatus.OK);
}


	@PostMapping("/addMember")
	public ResponseEntity<?> addMember(@RequestBody Member member){

		try {
			return new ResponseEntity<Member>(authService.addMember(member),HttpStatus.CREATED);

		}
		catch(Exception ex){
			throw new ResourceNotCreatedException("Unble to add Member"+ex.getMessage());
     }
 }
	@PostMapping("/contact")
	public ResponseEntity<?> newContact(@RequestBody Contact contact){
		try {
			return new ResponseEntity<Contact>(authService.newContact(contact),HttpStatus.CREATED);
		}
		catch(Exception ex) {
			throw new ResourceNotCreatedException("Unable to add the contact information\n"+ex.getMessage());
		}
}

	@GetMapping("/allMember")
	public ResponseEntity<?> getAllMembers(){
		return new ResponseEntity<List<Member>>(authService.getAllMembers(),HttpStatus.OK);
   }
}
