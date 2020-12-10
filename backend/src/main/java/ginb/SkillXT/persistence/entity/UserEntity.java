package ginb.SkillXT.persistence.entity;

import javax.persistence.Entity;
import javax.persistence.Table;


public class UserEntity {

    String email;
    String name;
    String family;
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFamily() {
        return family;
    }

    public void setFamily(String family) {
        this.family = family;
    }
}
