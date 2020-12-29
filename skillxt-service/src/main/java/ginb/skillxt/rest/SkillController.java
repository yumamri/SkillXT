package ginb.skillxt.rest;

import ginb.skillxt.domain.service.SkillService;
import ginb.skillxt.rest.v1.handler.SkillsApi;
import ginb.skillxt.rest.v1.model.SkillDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SkillController implements SkillsApi {

    private final SkillService skillService;

    public SkillController(SkillService skillService) {
        this.skillService = skillService;
    }

    @Override
    public ResponseEntity<List<SkillDTO>> getSkills() {
        return ResponseEntity.ok(skillService.findAllSkillEntity());
    }
}
