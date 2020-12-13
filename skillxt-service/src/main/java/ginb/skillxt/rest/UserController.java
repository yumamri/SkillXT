package ginb.skillxt.rest;

import ginb.skillxt.domain.service.UserService;
import ginb.skillxt.rest.v1.handler.UsersApi;
import ginb.skillxt.rest.v1.model.UserDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

        if (userService.addUser(body)) {
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .build();
        } else {
            return ResponseEntity.badRequest().build();
        }

    }

    @Override
    public ResponseEntity<List<UserDTO>> searchUsers(@Valid String searchString) {

        return ResponseEntity.ok(Collections.emptyList());
    }
}
