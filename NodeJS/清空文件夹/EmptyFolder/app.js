const fs = require('fs')

const emptyDir = (dirPath) => {
    fs.readdir(dirPath, (err, files) => {
        // 失败则打印错误信息并终止函数
        if (err) return console.log(err)
        files.forEach((file) => {
            // 判断是文件还是文件夹
            fs.stat(`${dirPath}/${file}`, (err, stat) => {
                if (err) return console.log(err)
                if (stat.isFile()) fs.unlinkSync(`${dirPath}/${file}`)
                else emptyDir(`${dirPath}/${file}`)
            })
        })
    })
}
emptyDir('./dir/')