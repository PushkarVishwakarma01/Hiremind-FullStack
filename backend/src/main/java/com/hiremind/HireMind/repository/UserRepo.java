package com.hiremind.HireMind.repository;

import com.hiremind.HireMind.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User,Long> {
    User findByEmail(String username);
    boolean existsByEmail(String email);
}

//repo.save(user)