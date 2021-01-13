package ginb.skillxt.persistence.repository;
import ginb.skillxt.persistence.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.validation.constraints.Email;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    UserEntity findUserEntityByEmail(String email);

    @Query("select u from UserEntity u")
    List<UserEntity> findAllUserEntity();

    Boolean existsByEmail(@Email String email);
    Boolean existsByPassword(String password);
}
