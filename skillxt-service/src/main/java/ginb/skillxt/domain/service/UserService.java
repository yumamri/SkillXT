package ginb.skillxt.domain.service;

import ginb.skillxt.domain.mapper.DTOMapper;
import ginb.skillxt.persistence.repository.UserRepository;
import ginb.skillxt.rest.v1.model.UserDTO;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final DTOMapper dtoMapper;

    public UserService(UserRepository userRepository, DTOMapper dtoMapper) {
        this.userRepository = userRepository;
        this.dtoMapper = dtoMapper;
    }

    public boolean addUser(UserDTO userDTO) {
        //TODO: check input params
        userRepository.save(dtoMapper.map(userDTO));
        return true;
    }
}
