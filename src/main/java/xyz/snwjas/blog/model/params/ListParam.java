package xyz.snwjas.blog.model.params;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.experimental.Delegate;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;


@ApiModel("列表参数")
public class ListParam<E> implements List<E> {


	@Valid // 一定要加@Valid注解
	@ApiModelProperty("列表数据")
	@Delegate // 一定要加@Delegate注解
	public   List<E> list = new ArrayList<>();

	// 一定要记得重写toString方法
	@Override
	public String toString() {
		return list.toString();
	}
}
