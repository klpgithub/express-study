var fs = require('fs');

//使用fs.readFileSync从源路径读取文件内容，并使用fs.writeFileSync将文件内容写入目标路径。
function copy(src, dst) {
    //fs.writeFileSync(dst, fs.readFileSync(src));//拷贝小文件
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

console.time('c');
copy('E:\\idea.exe', 'F:\\idea.exe');
console.timeEnd('c');