package com.mdzvtt.ecommerce.service;

import com.mdzvtt.ecommerce.dto.ContactRequestDto;

public interface IContactService {
    boolean saveContact(ContactRequestDto contactRequestDto);
}
