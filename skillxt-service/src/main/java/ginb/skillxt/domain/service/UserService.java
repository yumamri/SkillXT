package ginb.skillxt.domain.service;

import ginb.skillxt.domain.exception.BadRequestException;
import ginb.skillxt.domain.exception.BusinessException;
import ginb.skillxt.domain.exception.UserExistsException;
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

    public void addUser(UserDTO userDTO) throws BusinessException {
        //TODO: check input params
        checkParams(userDTO);
        if (userRepository.existsByEmail(userDTO.getEmail())) {
            throw new UserExistsException();
        } else {
            userRepository.save(dtoMapper.map(userDTO));
        }
    }

    private void checkParams(UserDTO userDTO) throws BadRequestException {
        if (!StringUtils.hasText(userDTO.getEmail())) {
            throw new BadRequestException();
        }
    }
}
