"use strict";

const spawn = require("spawno")
    , oargv = require("oargv")
    ;

/**
 * initialCommitDate
 * Get the initial commit date from a git repository.
 *
 * @name initialCommitDate
 * @function
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
 */
module.exports = function initialCommitDate (cwd, cb) {
    let opts = {
        cwd: cwd
    };
    if (typeof cwd === "function") {
        cb = cwd;
        delete opts.cwd;
    }
    spawn("git", oargv({
        pretty: "format:%ad"
      , "max-parents": "0"
      ,  __: "="
    }, "log"), opts, (err, stdout, stderr) => {
        debugger
    });
};
