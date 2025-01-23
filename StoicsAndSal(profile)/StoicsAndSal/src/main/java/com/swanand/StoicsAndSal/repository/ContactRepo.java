package com.swanand.StoicsAndSal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swanand.StoicsAndSal.model.Contact;

public interface ContactRepo extends JpaRepository<Contact,String>{

}
