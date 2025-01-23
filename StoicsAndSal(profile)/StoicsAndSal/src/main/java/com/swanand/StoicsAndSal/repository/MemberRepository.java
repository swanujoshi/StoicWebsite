package com.swanand.StoicsAndSal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.swanand.StoicsAndSal.model.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member,Long>{
	
	
}
