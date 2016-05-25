attachmentName = "fagner.js";
attachmentName = (attachmentName.match(/\.[a-zA-Z]{2,}/gi)) ? attachmentName : attachmentName+'.zip';
console.log(attachmentName);
