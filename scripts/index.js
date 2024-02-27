function genImgList() {
    const fs = require('fs');
    const path = require('path');
    console.log(process.cwd());
    const directoryPath = path.join(__dirname, '../uPic');
    const filePath = path.join(__dirname, '../docs/images.json');
    fs.readdir(directoryPath, function (err, files) {
        // 错误处理
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        // 文件处理
        fs.writeFile(filePath, JSON.stringify(files), 'utf8', (err) => {
            if (err) {
                console.error('An error occurred:', err);
                return;
            }
            console.log('The file has been saved!');
        });
    });

}

genImgList()