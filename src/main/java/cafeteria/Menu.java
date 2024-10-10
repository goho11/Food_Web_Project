package cafeteria;

import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({ "cafeNum", "menuNum", "menuName", "menuPrice", "menuNamepic", "menuExplain"})
@Generated("jsonschema2pojo")
public class Menu {

	@JsonProperty("cafeNum")
	private Integer cafeNum;
	@JsonProperty("menuNum")
	private Integer menuNum;
	@JsonProperty("menuName")
	private String menuName;
	@JsonProperty("menuPrice")
	private Integer menuPrice;
	@JsonProperty("menuNamepic")
	private String menuNamepic;
	@JsonProperty("menuExplain")
	private String menuExplain;
	
}