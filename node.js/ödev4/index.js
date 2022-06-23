const fs = require("fs");
const { resolve } = require("path");

const obj1 = {
  name: "employee 1",
  salary: 2500,
};

const updatedobj = {
  name: "employee 2",
  salary: 3000,
};

function writeFile() {
    return new Promise((res,rej)=>{
        fs.writeFile("employees.json", JSON.stringify(obj1), "utf-8", function (err) {
            if (err) {
              rej(err);
            }
            console.log("The file was saved!");
            res();
          });
    })
}

function readFile() {
    return new Promise((res,rej)=>{
        fs.readFile("employees.json", "utf8", (err, data) => {
            if (err) {
              rej(err);
            }
            console.log("data :/n", data);
            res();
          });
    })
  
}

function updateFile() {
    return new Promise((res,rej)=>{
        fs.appendFile(
            "employees.json",
            JSON.stringify(updatedobj),
            "utf-8",
            (err) => {
              if (err) {
                rej(err)
              }
              console.log("The File was updated");
              res();
            }
          );
    })
  
}

function deleteFile() {
    return new Promise((res,rej)=>{
        fs.unlink("employees.json", function (err) {
            if (err) rej(err);
            console.log("File deleted!");
            res();
          });
    })
  
}

async function main(){
    await writeFile();
    await readFile();
    await updateFile();
    await deleteFile();
}

main();