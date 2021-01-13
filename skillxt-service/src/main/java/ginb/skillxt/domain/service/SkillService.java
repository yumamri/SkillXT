package ginb.skillxt.domain.service;

import ginb.skillxt.domain.exception.BusinessException;
import ginb.skillxt.domain.exception.UserDoesNotExistException;
import ginb.skillxt.domain.mapper.DTOMapper;
import ginb.skillxt.persistence.entity.SkillEntity;
import ginb.skillxt.persistence.entity.UserEntity;
import ginb.skillxt.persistence.repository.SkillRepository;
import ginb.skillxt.persistence.repository.UserRepository;
import ginb.skillxt.rest.v1.model.SkillDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SkillService {
    private final SkillRepository skillRepository;
    private final UserRepository userRepository;
    private final DTOMapper dtoMapper;

    public SkillService(SkillRepository skillRepository, UserRepository userRepository, DTOMapper dtoMapper) {
        this.skillRepository = skillRepository;
        this.userRepository = userRepository;
        this.dtoMapper = dtoMapper;
    }

    public List<SkillDTO> getUserCompetence(String email) throws BusinessException {
        userNotExist(email);
        List<SkillDTO> skillDTOList = new ArrayList<>();
        UserEntity userEntity = userRepository.findUserEntityByEmail(email);
        for (SkillEntity skillEntity : skillRepository.getUserCompetence(userEntity.getId())) {
            skillDTOList.add(dtoMapper.map(skillEntity));
        }
        return skillDTOList;
    }

    public List<SkillDTO> getUserInterest(String email) throws BusinessException {
        userNotExist(email);
        List<SkillDTO> skillDTOList = new ArrayList<>();
        UserEntity userEntity = userRepository.findUserEntityByEmail(email);
        for (SkillEntity skillEntity : skillRepository.getUserInterest(userEntity.getId())) {
            skillDTOList.add(dtoMapper.map(skillEntity));
        }
        return skillDTOList;
    }

    public List<SkillDTO> findAllSkillEntity() {
        List<SkillDTO> skillDTOList = new ArrayList<>();
        for (SkillEntity skillEntity : skillRepository.findAllSkillEntity()) {
            skillDTOList.add(dtoMapper.map(skillEntity));
        }
        return skillDTOList;
    }

    private void userNotExist(String email) throws UserDoesNotExistException {
        if (!userRepository.existsByEmail(email)) {
            throw new UserDoesNotExistException();
        }
    }
}
