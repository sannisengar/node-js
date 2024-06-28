const f = require('fs')
try {

    f.readFile(__dirname + "/hello.txt", "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);

    });
} catch (error) {
    console.log(error)
}
console.log("web design full stack")