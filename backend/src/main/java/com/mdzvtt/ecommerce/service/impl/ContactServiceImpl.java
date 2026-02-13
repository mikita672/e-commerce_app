package com.mdzvtt.ecommerce.service.impl;

import java.time.Instant;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.mdzvtt.ecommerce.dto.ContactRequestDto;
import com.mdzvtt.ecommerce.entity.Contact;
import com.mdzvtt.ecommerce.repository.ContactRepository;
import com.mdzvtt.ecommerce.service.IContactService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements IContactService {
    private final ContactRepository contactRepository;

    @Override
    public boolean saveContact(ContactRequestDto contactRequestDto) {
        try {
            Contact contact = transformToEntity(contactRequestDto);
            contact.setCreatedAt(Instant.now());
            contact.setCreatedBy(contactRequestDto.getName());
            contactRepository.save(contact);
            return true;
        } catch (Exception exception) {
            return false;
        }
    }

    private Contact transformToEntity(ContactRequestDto contactRequestDto) {
        Contact contact = new Contact();
        BeanUtils.copyProperties(contactRequestDto, contact);
        return contact;
    }
}
