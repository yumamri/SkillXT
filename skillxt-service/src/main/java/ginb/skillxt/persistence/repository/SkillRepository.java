package ginb.skillxt.persistence.repository;

import ginb.skillxt.persistence.entity.SkillEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SkillRepository extends JpaRepository<SkillEntity, Long> {

    SkillEntity findSkillEntityByTitle(String title);

    Boolean existsByTitle(String title);

    @Query("select s from SkillEntity s order by s.title asc")
    List<SkillEntity> findAllSkillEntity();

    @Query("select s from SkillEntity s join s.userCompetence t where t.email =: email")
    List<SkillEntity> getCompetenceSkillByUserId(String email);
}
