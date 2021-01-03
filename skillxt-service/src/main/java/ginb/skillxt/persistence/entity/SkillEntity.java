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

    @ManyToMany(mappedBy = "competenceList")
    private Set<UserEntity> userCompetence = new HashSet<>();

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
