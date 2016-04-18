"use strict";

const spawn = require("spawno")
    , oargv = require("oargv")
    , dateIsInvalid = require("date-is-invalid")
    ;

/**
 * initialCommitDate
 * Get the initial commit date from a git repository.
 *
 * @name initialCommitDate
 * @function
 * @param {String} cwd The path to the git repository.
 * @param {Function} cb The callback function.
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
        err = err || stderr;
        if (err) { return cb(new Error(err)); }
        let str = stdout.trim().split("\n").slice(-1)[0];
        if (!str) {
            return cb(new Error("Cannot find the first commit date."));
        }
        let d = new Date(str);
        if (dateIsInvalid(d)) {
            return cb(new Error("The date is invalid."));
        }

        cb(null, d);
    });
};
