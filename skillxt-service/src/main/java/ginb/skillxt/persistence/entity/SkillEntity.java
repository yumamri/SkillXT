package ginb.skillxt.persistence.entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "skill")
public class SkillEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;

    @Column(name = "title")
    String title;

    @Column(name = "type")
    String type;

    @ManyToMany(mappedBy = "skillCompetence")
    private Set<UserEntity> userCompetence = new HashSet<>();

    @ManyToMany(mappedBy = "interestList")
    private Set<UserEntity> userInterest = new HashSet<>();

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Set<UserEntity> getUserCompetence() {
        return userCompetence;
    }

    public void setUserCompetence(Set<UserEntity> userCompetence) {
        this.userCompetence = userCompetence;
    }

    public Set<UserEntity> getUserInterest() {
        return userInterest;
    }

    public void setUserInterest(Set<UserEntity> userInterest) {
        this.userInterest = userInterest;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof SkillEntity)) return false;
        SkillEntity that = (SkillEntity) o;
        return id == that.id && title.equals(that.title);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title);
    }
}
