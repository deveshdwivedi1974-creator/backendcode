class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }

//to keep every  succcessful API response in a consistent format.
/* this  automatically  cheks weather  response  is  true  or not

200 < 400 → true
201 < 400 → true
400 < 400 → false
404 < 400 → false
500 < 400 → false */