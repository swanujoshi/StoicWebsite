package com.swanand.StoicsAndSal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swanand.StoicsAndSal.model.User;

public interface UserRepository extends JpaRepository<User,Long>{

	User findByEmail(String email);

}
