package ginb.skillxt.persistence.repository;

import ginb.skillxt.persistence.entity.SkillEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SkillRepository extends JpaRepository<SkillEntity, Long> {

    Optional<SkillEntity> findSkillEntityByTitle(String title);

    @Query("select s from SkillEntity s join s.userInterest t where t.id =: id")
    List<SkillEntity> getInterestSkillByUserId(int id);
}
