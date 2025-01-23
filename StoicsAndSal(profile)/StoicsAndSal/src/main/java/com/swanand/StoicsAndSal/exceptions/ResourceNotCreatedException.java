package com.swanand.StoicsAndSal.exceptions;

public class ResourceNotCreatedException extends RuntimeException{



    public ResourceNotCreatedException() {
        super();
    }
    public ResourceNotCreatedException(String message) {
        super(message);
    }

}
