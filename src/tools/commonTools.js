const fs = require("fs") 
const path = require("path");

    const { v2: cloudinary } = require("cloudinary");

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
        secure: true,
    });

    // for vercel deploy
    async function writeFile(name_file, imageData, savePath = "images") {
    try {
        // imageData là base64: chấp nhận cả dạng thuần lẫn data URI
        const dataUri = imageData.startsWith("data:")
        ? imageData
        : `data:image/png;base64,${imageData}`;

        // bỏ đuôi file, Cloudinary tự quản lý định dạng
        const publicId = name_file.replace(/\.[^/.]+$/, "");

        const result = await cloudinary.uploader.upload(dataUri, {
        folder: savePath,        
        public_id: publicId,
        overwrite: true,         
        resource_type: "image",
        });

        console.log("SAVEIMGSUCC", result.secure_url);
        return result.secure_url;  
    } catch (err) {
        console.log("SAVEIMGERR");
        console.log(err);
        return false;
    }
    }

    // for local test or vps/cloud
    // function writeFile(name_file,imageData, savePath = "images"){
    //     return new Promise((resolve, reject)=>{
    //         const imageDir = path.join(__dirname, "..", "..", savePath);
    //         console.log(imageDir);
    //         if (!fs.existsSync(imageDir)) {
    //             fs.mkdirSync(imageDir, { recursive: true });
    //         }
    //         const imagePath = path.join(imageDir, name_file);
    //         fs.writeFile(imagePath, imageData, "base64" , async (err)=>{
    //             if(err){
    //                 console.log("SAVEIMGERR");
    //                 console.log(err)
    //                 reject(false)
    //             }else{
    //                 console.log("SAVEIMGSUCC");
    //                 resolve(true)
    //             }
    //         })
    //     })
    // }

    function formatDateToSQL(date) {
        const pad = (n) => n < 10 ? '0' + n : n;
        return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
    }

    module.exports = {writeFile, formatDateToSQL}