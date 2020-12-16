package ginb.skillxt.domain.service;

import ginb.skillxt.domain.mapper.DTOMapper;
import ginb.skillxt.persistence.repository.UserRepository;
import ginb.skillxt.rest.v1.model.UserDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final DTOMapper dtoMapper;

    public UserService(UserRepository userRepository, DTOMapper dtoMapper) {
        this.userRepository = userRepository;
        this.dtoMapper = dtoMapper;
    }

    public ResponseEntity<Void> addUser(UserDTO userDTO) {
        //TODO: check input params
        if (userRepository.existsByEmail(userDTO.getEmail())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        } else {
            userRepository.save(dtoMapper.map(userDTO));
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }
    }
}
