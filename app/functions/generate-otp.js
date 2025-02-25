module.exports = function(){
    let otp = [];
    for (let i = 0; i < 4; i++){
        const randomInt = Math.floor(Math.random() * 10)
        otp.push(randomInt)
    }
    return otp.join("")
}