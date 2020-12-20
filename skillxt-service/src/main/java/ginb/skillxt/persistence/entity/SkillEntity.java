package ginb.skillxt.persistence.entity;

import java.util.Objects;

//@Entity
public class SkillEntity {
    private int id;
    private String title;
    private SkillTypeEntity idType;

    public SkillEntity(int id, String title, SkillTypeEntity idType) {
        this.id = id;
        this.title = title;
        this.idType = idType;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public SkillTypeEntity getIdType() {
        return idType;
    }

    public void setIdType(SkillTypeEntity idType) {
        this.idType = idType;
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
