class apiResponse extends Response{
    constructor(statusCode,data,message="success"){
   this.statusCode=statusCode
   this.message=message
   this.data=data
   this.success=statusCode<400
    }
}
module.exports=apiResponse