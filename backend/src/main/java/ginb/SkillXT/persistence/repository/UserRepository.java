package ginb.SkillXT.persistence.repository;

import ginb.SkillXT.persistence.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findUtilisateurEntityByNomAndPrenom(String nom, String prenom);
}
