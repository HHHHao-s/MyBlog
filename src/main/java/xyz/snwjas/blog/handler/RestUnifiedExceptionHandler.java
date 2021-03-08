package xyz.snwjas.blog.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.support.MissingServletRequestPartException;
import xyz.snwjas.blog.constant.ResponseStatus;
import xyz.snwjas.blog.exception.ServiceException;
import xyz.snwjas.blog.model.R;
import xyz.snwjas.blog.utils.IPUtils;
import xyz.snwjas.blog.utils.RUtils;

import javax.validation.ConstraintViolationException;
import java.util.HashMap;
import java.util.Map;

/**
 * 统一异常处理
 *
 * @author Myles Yang
 */
@RestControllerAdvice
@Slf4j
public class RestUnifiedExceptionHandler {

	/**
	 * 服务异常
	 */
	@ExceptionHandler({ServiceException.class})
	public R handleServiceException(ServiceException ex) {
		return RUtils.result(ex.getStatus(), ex.getMessage(), ex.getErrorData());
	}

	/**
	 * 参数校验失败异常
	 */
	@ExceptionHandler({MethodArgumentNotValidException.class})
	public R handleMethodArgumentNotValidException(MethodArgumentNotValidException ex) {
		log.warn(ResponseStatus.ILLEGAL_PARAMETER.message(), ex.getCause());
		BindingResult bindingResult = ex.getBindingResult();
		Map<String, String> errors = new HashMap<>(4);
		for (FieldError fieldError : bindingResult.getFieldErrors()) {
			errors.put(fieldError.getField(), fieldError.getDefaultMessage());
		}
		return RUtils.fail(ResponseStatus.ILLEGAL_PARAMETER, errors);
	}

	/**
	 * 参数校验失败异常
	 */
	@ExceptionHandler({ConstraintViolationException.class})
	public R handleConstraintViolationException(ConstraintViolationException ex) {
		log.warn(ResponseStatus.ILLEGAL_PARAMETER.message(), ex.getCause());
		return RUtils.fail(ResponseStatus.ILLEGAL_PARAMETER);
	}

	// @RequestParam 没有匹配到值
	@ExceptionHandler(MissingServletRequestParameterException.class)
	public R handleMissingServletRequestParameterException(MissingServletRequestParameterException ex) {
		log.warn(ResponseStatus.ILLEGAL_PARAMETER.message(), ex.getCause());
		return RUtils.fail(ResponseStatus.ILLEGAL_PARAMETER);
	}

	// @RequestPart 没有匹配到值
	@ExceptionHandler(MissingServletRequestPartException.class)
	public R handleMissingServletRequestPartException(MissingServletRequestPartException ex) {
		log.warn(ResponseStatus.ILLEGAL_PARAMETER.message(), ex.getCause());
		return RUtils.fail(ResponseStatus.ILLEGAL_PARAMETER);
	}

	// @RequestBody 没有匹配到值
	@ExceptionHandler(HttpMessageNotReadableException.class)
	public R handleHttpMessageNotReadableException(HttpMessageNotReadableException ex) {
		log.warn(ResponseStatus.ILLEGAL_PARAMETER.message(), ex.getCause());
		return RUtils.fail(ResponseStatus.ILLEGAL_PARAMETER);
	}

	// 上传文件过大
	@ExceptionHandler(MaxUploadSizeExceededException.class)
	public R handleMaxUploadSizeExceededException(MaxUploadSizeExceededException ex) {
		log.warn(ResponseStatus.FILE_SIZE_LIMIT.message(), ex.getCause());
		return RUtils.fail(ResponseStatus.FILE_SIZE_LIMIT);
	}

	// 非法参数
	@ExceptionHandler(NumberFormatException.class)
	public R handleNumberFormatException(NumberFormatException ex) {
		log.warn(ResponseStatus.ILLEGAL_PARAMETER.message(), ex.getCause());
		return RUtils.fail(ResponseStatus.ILLEGAL_PARAMETER);
	}

	// 最后处理
	@ExceptionHandler(Exception.class)
	public R handleException(Exception ex) {
		log.error("系统错误，路径：{}，错误：{}", IPUtils.getRequest().getServletPath(), ex.getCause());
		ex.printStackTrace();
		return RUtils.fail(ResponseStatus.SYSTEM_ERROR);
	}

}
