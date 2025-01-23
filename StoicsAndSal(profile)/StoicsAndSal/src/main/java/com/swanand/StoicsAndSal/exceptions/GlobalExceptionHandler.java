package com.swanand.StoicsAndSal.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.swanand.StoicsAndSal.dto.ApiResponse;


@RestControllerAdvice
public class GlobalExceptionHandler {

	
	@ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiResponse> handlerResourceNotFoundException(ResourceNotFoundException ex){
        String message=ex.getMessage();
        ApiResponse response=new ApiResponse();
        response.setMessage(message);
        response.setSuccess(false);
        response.setStatus(HttpStatus.NOT_FOUND);
        return new ResponseEntity<ApiResponse>(response,HttpStatus.NOT_FOUND);

    }
	
	
	@ExceptionHandler(DuplicateEmailException.class)
	public ResponseEntity<ApiResponse> handlerDuplicateEmailException(DuplicateEmailException ex){
		ApiResponse response=new ApiResponse();
		response.setMessage(ex.getMessage());
		response.setStatus(HttpStatus.CONFLICT);
		response.setSuccess(false);
		return new ResponseEntity<ApiResponse>(response,HttpStatus.CONFLICT);
	}

	@ExceptionHandler(ResourceNotCreatedException.class)
	public ResponseEntity<ApiResponse> handlerResourceNotCreatedException(ResourceNotCreatedException ex){
		ApiResponse response=new ApiResponse();
		response.setMessage(ex.getMessage());
		response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
		response.setSuccess(false);
		return new ResponseEntity<ApiResponse>(response,HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
