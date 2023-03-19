let dotenv = require('dotenv');
dotenv.config();
module.exports = {
    ENV: process.env.SDK_ENV || "dev",
    PORT: process.env.PORT || 8080,

    CONTRACT_ADDRESS: "0x6ecB99BCa7fc32f7ab75a0a722551ECbC25E66d8",
    ACCOUNT_ADDRESS: "0x43D6B499f4cA3a5711c11Bca9D644f14D38bDa8b",


};