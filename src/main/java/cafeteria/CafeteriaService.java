package cafeteria;

//
import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

// 메서드 간단하게 사용하는 클래스
public interface CafeteriaService {
	List<Cafeteria> selectAll();

	List<Cafeteria> showByPic(int cafeNum);

	Cafeteria update(Cafeteria cafeteria);

	Cafeteria selectByName(String cafeName);

	int insert(Cafeteria cafetria);

	int insertMenu(Menu menu);

	int delete(int cafeNum);

	List<Cafeteria> searchByAll(String menuName, String categoryName, String cafetag, String cafeName,
			String cafeAddress);

	double selectAvg(int cafeNum);

//	List<Cafeteria> searchByPT(int cafePrice, List<String> cafetags);
	List<Cafeteria> getCafeByPriceAndTags(int cafePrice, List<String> cafetags);

	List<Menu> showCafeMenu(int cafeNum);

	int insertReview(CafeReview cafeReview);

	List<CafeReview> selectCafeReview(int cafeNum);

	List<CafeCategory> selectCategoryAll();

	int insertCategoryM(int cafeNum, int categoryNum);

	int insertPic(int cafeNum, String cafePic);

	int insertTag(int cafeNum, String cafeTag);

	CafePic selectCafePic(int cafeNum);

	List<Integer> selectCategoryNum(int cafeNum);

	CafeCategory selectCategory(int categoryNum);

	List<CafeTag> selectCafeTag(int cafeNum);

	Integer selectAvgPayment(int cafeNum);

	List<Cafeteria> selectByArea(List<String> addressList);

	List<Menu> selectMenu( int cafeNum);

	List<CafePic> selectCafePicAll();
	
    List<CafePic> selectPicsByCafeNum(int cafeNum);

    int selectCafeNumBycafeOwner( String cafeOwner);


}
