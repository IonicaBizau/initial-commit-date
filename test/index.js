"use strict";

const tester = require("tester")
    , icDate = require("..")
    ;

tester.describe("initial-commit-date", t => {
    t.should("get the initial commit date", (cb) => {
        icDate((err, d) => {
            t.expect(err).toBe(null);
            t.expect(d.getFullYear()).toBe(2016);
            cb();
        });
    });
});
