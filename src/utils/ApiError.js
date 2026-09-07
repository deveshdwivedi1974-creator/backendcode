class ApiError extends Error {
   /* 
     normal error   vs  api error 
     {
    "success": false,
    "message": "Validation failed",
    "errors": [
        "Email is required",
        "Password is too short"
    ]
}
   
   */
   
    constructor(
        statusCode,    
        message= "Something went wrong",
        errors = [],
        stack =""
    ){
        super(message)   //calls  parent class 
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack     //stack m koi error h to position dekho 

        } else{      //it will be okk
            Error.captureStackTrace(this, this.constructor)
            // ye  trace  karta  hai ki exactly  ki position pe error  aaa rahai  hai 
        }

    }
}

export {ApiError}