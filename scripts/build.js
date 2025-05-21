// scripts/build.js
const path = require('path');
const fs = require('fs-extra');
// const { execSync } = require('child_process');

// Folder copy
const arrSrcFolder = ['../image', '../view', '../css', '../icons'];
const destFolderName = 'dist';
for (let folder of arrSrcFolder) {
    const srcSourceInput = path.resolve(__dirname, folder);
    const srcSourceOutput = path.resolve(__dirname, `../${destFolderName}/${folder.replace(/\.\.\//g, "")}`);
    console.log(`📂 Copying ${folder}`);
    fs.copySync(srcSourceInput, srcSourceOutput, {
        overwrite: true,
        errorOnExist: false,
        recursive: true,
    });
    console.log(`✅ Build ${destFolderName}/${folder.replace(/\.\.\//g, "")} hoàn tất!`);
}

//index.html copy
fs.copySync(path.resolve(__dirname, '../index.html'), path.resolve(__dirname, `../${destFolderName}/index.html`), {
    overwrite: true,
    errorOnExist: false,
    recursive: true,
});
//manifest.json copy
fs.copySync(path.resolve(__dirname, '../manifest.json'), path.resolve(__dirname, `../${destFolderName}/manifest.json`), {
    overwrite: true,
    errorOnExist: false,
    recursive: true,
});
console.log(`✅ Build ../${destFolderName}/index.html hoàn tất!`);


