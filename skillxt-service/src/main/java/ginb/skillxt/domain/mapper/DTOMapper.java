package ginb.skillxt.domain.mapper;

import ginb.skillxt.persistence.entity.UserEntity;
import ginb.skillxt.rest.v1.model.UserDTO;
import org.mapstruct.CollectionMappingStrategy;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", collectionMappingStrategy = CollectionMappingStrategy.ADDER_PREFERRED)
public interface DTOMapper {

    UserDTO map(UserEntity value);

    UserEntity map(UserDTO value);

}
