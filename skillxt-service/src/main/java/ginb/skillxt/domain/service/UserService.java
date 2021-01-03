package ginb.skillxt.domain.service;

import ginb.skillxt.domain.exception.*;
import ginb.skillxt.domain.mapper.DTOMapper;
import ginb.skillxt.persistence.entity.SkillEntity;
import ginb.skillxt.persistence.entity.UserEntity;
import ginb.skillxt.persistence.repository.SkillRepository;
import ginb.skillxt.persistence.repository.UserRepository;
import ginb.skillxt.rest.v1.model.UserDTO;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final DTOMapper dtoMapper;
    private final SkillRepository skillRepository;

    public UserService(UserRepository userRepository, DTOMapper dtoMapper, SkillRepository skillRepository) {
        this.userRepository = userRepository;
        this.dtoMapper = dtoMapper;
        this.skillRepository = skillRepository;
    }
    public void addUser(UserDTO userDTO) throws BusinessException {
        checkParams(userDTO);
        if (userRepository.existsByEmail(userDTO.getEmail())) {
            throw new UserExistsException();
        } else {
            userRepository.save(dtoMapper.map(userDTO));
        }
    }

    public UserEntity addUserCompetence(String email, String title) throws BusinessException{
        if (userRepository.existsByEmail(email)) {
            UserEntity userEntity = userRepository.findUserEntityByEmail(email);
            SkillEntity skillEntity = skillRepository.findSkillEntityByTitle(title);
            userEntity.getCompetenceList().add(skillEntity);
            return userRepository.save(userEntity);
        } else {
            throw new UserDoesNotExistException();
        }
    }

    public UserDTO getUserByEmail(String email) throws BusinessException{
        if (userRepository.existsByEmail(email)) {
            return dtoMapper.map(userRepository.findUserEntityByEmail(email));
        } else {
            throw new UserDoesNotExistException();
        }
    }
    private boolean isEmail(String email) {
        String regex = "[a-z0-9._-]+@[a-z0-9]+.[a-z]{2,3}$";
        return email.matches(regex);
    }
    private void checkParams(UserDTO userDTO) throws BusinessException {
        if (!StringUtils.hasText(userDTO.getName())||
                !StringUtils.hasText(userDTO.getFamily())||
                !StringUtils.hasText(userDTO.getEmail())||
                !StringUtils.hasText(userDTO.getCountry())||
                !StringUtils.hasText(userDTO.getPassword())) {
            throw new BadRequestException();
        } else if (!isEmail(userDTO.getEmail())) {
            throw new BadEmailFormatException();
        }
    }
}
