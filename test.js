var path = require('path'),
	fs = require('fs'),
	async = require('async'),
	easyzip = require('./easyzip');

var zip = new easyzip.EasyZip();
//add text 
zip.file('hello.txt','Hello World！');
zip.writeToFile('text.zip');//write zip data to disk

//add folder
var zip2 = new easyzip.EasyZip();
var jsFolder = zip2.folder('js');
jsFolder.file('hello.js','alert("hello world")');
zip2.writeToFile('folder.zip');

//add file
var zip3 = new easyzip.EasyZip();
zip3.addFile('main.js','easyzip.js',function(){
	zip3.writeToFile('file.zip');
});

//batch add files
var files = [
	{source : 'easyzip.js',target:'easyzip.js'},
	{target : 'img'},//if source is null,means make a folder
	{source : 'jszip.js',target:'lib/tmp.js'}
];
var zip4 = new easyzip.EasyZip();
zip4.batchAdd(files,function(){
	zip4.writeToFile('batchadd.zip');
});

//zip a folder
var zip5 = new easyzip.EasyZip();
zip5.zipFolder('../easy-zip',function(){
	zip5.writeToFile('folderall.zip');
});

//write data to http.Response
//zip.writeToResponse(response,'attachment.zip');

//write to file sync 
//zip.writeToFileSycn(filePath);
