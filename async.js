var fs=require("fs")

var readFile=function(filename){
    return new Promise(function(resolve,reject){
        fs.readFile(filename,(err,data)=>{
            if(err) throw err
            resolve(data)
        })
    })
}

// async 是generator 的语法糖

async function show(){
    var s1=await readFile("data/a.txt")
    console.log(s1.toString())
    var s2=await readFile("data/b.txt")
    console.log(s2.toString())
    var s3=await readFile("data/c.txt")
    console.log(s3.toString())
}
show()
console.log(show())