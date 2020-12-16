package ginb.skillxt.persistence.repository;

import ginb.skillxt.persistence.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findUserEntityByEmail(String email);

    Boolean existsByEmail(String email);
//    Optional<UserEntity> registerUserEntitybyEmail(String email, String name, String family, String password);
}
