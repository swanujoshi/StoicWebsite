package com.swanand.StoicsAndSal.dto;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


public class ApiResponse {
	 private String message;
	    private boolean success;
	    private HttpStatus status;
	    
	    
	    
	    
		public ApiResponse() {
			
		}
		public ApiResponse(String message, boolean success, HttpStatus status) {
			super();
			this.message = message;
			this.success = success;
			this.status = status;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
		public boolean isSuccess() {
			return success;
		}
		public void setSuccess(boolean success) {
			this.success = success;
		}
		public HttpStatus getStatus() {
			return status;
		}
		public void setStatus(HttpStatus status) {
			this.status = status;
		}
	    
	    
}
