package ginb.skillxt.persistence.entity;

import javax.persistence.Entity;
import java.util.Objects;

//@Entity
public class SkillTypeEntity {
    private int id;
    private String type;

    public SkillTypeEntity(int id, String type) {
        this.id = id;
        this.type = type;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof SkillTypeEntity)) return false;
        SkillTypeEntity that = (SkillTypeEntity) o;
        return id == that.id && type.equals(that.type);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, type);
    }
}
