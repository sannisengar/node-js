const student = {
    name: "ram",
    city: "gwalior",
    phone: 12345,
    address: "gwalior city",
    collage: "jiwaji gwalior",
}
const user = {
    name: "rohit",
    city: "gwalior",
    phone: 1325464,
    itm: ["raj", 12, true],
    mpct: function () {
        console.log("hello mpct")
    }

}
const pn = () => {
    console.log("hello pn")
}
module.exports = {
    student,
    user,
    pn
}