let dotenv = require('dotenv');
dotenv.config();
module.exports = {
    ENV: process.env.SDK_ENV || "dev",
    PORT: process.env.PORT || 8080,

    CONTRACT_ADDRESS: "0x827574d350E74AEF516A7a76aa468f2dB93ac1FE",
    ACCOUNT_ADDRESS: "0x87Eb6936dBdB77D93d820260858e93977Eb496A4",


};