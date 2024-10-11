package user.suggestion;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

public interface SuggestionMapper {
	@Select("SELECT * FROM user_suggestion")
	List<Suggestion> select();

	@Insert("INSERT INTO `user_suggestion` (`userId`, `title`, `suggestion`) VALUES (#{userId}, #{title}, #{suggestion})")
	int insert(Suggestion suggestion);
}