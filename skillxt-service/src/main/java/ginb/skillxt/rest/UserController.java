package ginb.skillxt.rest;

import ginb.skillxt.domain.exception.*;
import ginb.skillxt.domain.service.UserService;
import ginb.skillxt.rest.v1.handler.UsersApi;
import ginb.skillxt.rest.v1.model.SkillDTO;
import ginb.skillxt.rest.v1.model.UserDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Collections;
import java.util.List;

@RestController
public class UserController implements UsersApi {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @Override
    public ResponseEntity<Void> addUser(@Valid UserDTO body) {
        try {
            userService.addUser(body);
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .build();
        } catch (BusinessException e) {
            return handleErrorsResponseEntity(e);
        }
    }

    @Override
    public ResponseEntity<Void> addUserCompetence(String email, String skill) {
        try {
            userService.addUserCompetence(email, skill);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .build();
        } catch (BusinessException e) {
            return handleErrorsResponseEntity(e);
        }
    }

    @Override
    public ResponseEntity<Void> deleteUserCompetence(String email, String skill) {
        try {
            userService.deleteUserCompetence(email, skill);
            return ResponseEntity.status(HttpStatus.OK).build();
        } catch (BusinessException e) {
            return handleErrorsResponseEntity(e);
        }
    }

    @Override
    public ResponseEntity<Void> addUserInterest(String email, String skill) {
        try {
            userService.addUserInterest(email, skill);
            return ResponseEntity.status(HttpStatus.OK).build();
        } catch (BusinessException e) {
            return handleErrorsResponseEntity(e);
        }
    }

    @Override
    public ResponseEntity<Void> deleteUserInterest(String email, String skill) {
        try {
            userService.deleteUserInterest(email, skill);
            return ResponseEntity.status(HttpStatus.OK).build();
        } catch (BusinessException e) {
            return handleErrorsResponseEntity(e);
        }
    }

    @Override
    public ResponseEntity<UserDTO> getUserByEmail(String email){
        try {
            return ResponseEntity.ok(userService.getUserByEmail(email));
        } catch (BusinessException e) {
            return ResponseEntity
                    .badRequest()
                    .build();
        }
    }

    @Override
    public ResponseEntity<UserDTO> searchUser(@Valid String searchString) {
        try {
            return ResponseEntity.ok(userService.searchUser(email, password));
        } catch (BusinessException e) {
            return ResponseEntity
                    .badRequest()
                    .build();
        }
    }

    private ResponseEntity<Void> handleErrorsResponseEntity(@NonNull BusinessException e) {
        if (e instanceof UserExistsException) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .build();
        } else if (e instanceof BadRequestException) {
            return ResponseEntity
                    .badRequest()
                    .build();
        } else if (e instanceof BadEmailFormatException) {
            return ResponseEntity
                    .status(HttpStatus.PRECONDITION_FAILED)
                    .build();
        } else if (e instanceof UserDoesNotExistException || e instanceof SkillDoesNotExistException) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .build();
        } else {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .build();
        }
    }
}
