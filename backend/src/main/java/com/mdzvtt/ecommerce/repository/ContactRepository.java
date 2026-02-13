package com.mdzvtt.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mdzvtt.ecommerce.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {

}
