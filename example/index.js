"use strict";

const initialCommitDate = require("../lib");

initialCommitDate((err, date) => {
    console.log(err || date);
    // => Mon Apr 18 2016 10:26:27 GMT+0300 (EEST)
});
