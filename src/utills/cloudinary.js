const cloudinary=require("cloudinary");
const fs=require("fs")

cloudinary.config({ 
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
    api_key:process.env.CLOUDINARY_API_KEY, 
    api_secret:process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});
 const uploadOnCloudinary=async (localFilePath)=>{
   try {
    if(!localFilePath) return null
    const response=await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
        //file is uploaded successfully
        
    })
    console.log("file is uploaded successfully",response.url);
  return response
   } catch (error) {
    fs.unlinkSync(localFilePath)//remove the locally saved temporary file as the operation got failed
    return null
    
   }
 }
 module.exports=uploadOnCloudinary



 
  cloudinary.uploader.upload(
     'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
         public_id: 'shoes',
     }
 )