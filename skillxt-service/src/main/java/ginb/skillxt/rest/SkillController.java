package ginb.skillxt.rest;

import ginb.skillxt.domain.exception.*;
import ginb.skillxt.domain.service.SkillService;
import ginb.skillxt.rest.v1.handler.SkillsApi;
import ginb.skillxt.rest.v1.model.SkillDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
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

    @Override
    public ResponseEntity<List<SkillDTO>> getUserCompetence(String email) {
        try {
            return ResponseEntity.ok(skillService.getUserCompetence(email));
        } catch (BusinessException e) {
            if (e instanceof UserDoesNotExistException) {
                return ResponseEntity
                        .status(HttpStatus.NOT_FOUND)
                        .build();
            } else {
                return ResponseEntity
                        .badRequest()
                        .build();
            }
        }
    }

    private ResponseEntity<Void> handleErrorsResponseEntity(@NonNull BusinessException e) {
        if (e instanceof UserDoesNotExistException || e instanceof SkillDoesNotExistException) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .build();
        } else if (e instanceof BadRequestException) {
            return ResponseEntity
                    .badRequest()
                    .build();
        } else {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .build();
        }
    }
}
