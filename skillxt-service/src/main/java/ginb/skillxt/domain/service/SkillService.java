package ginb.skillxt.domain.service;

import ginb.skillxt.domain.mapper.DTOMapper;
import ginb.skillxt.persistence.entity.SkillEntity;
import ginb.skillxt.persistence.repository.SkillRepository;
import ginb.skillxt.rest.v1.model.SkillDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SkillService {
    private final SkillRepository skillRepository;
    private final DTOMapper dtoMapper;

    public SkillService(SkillRepository skillRepository, DTOMapper dtoMapper) {
        this.skillRepository = skillRepository;
        this.dtoMapper = dtoMapper;
    }

    public List<SkillDTO> findAllSkillEntity() {
        List<SkillDTO> skillDTOList = new ArrayList<>();
        for (SkillEntity skillEntity : skillRepository.findAllSkillEntity()) {
            skillDTOList.add(dtoMapper.map(skillEntity));
        }
        return skillDTOList;
    }
}
