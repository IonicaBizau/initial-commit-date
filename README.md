# initial-commit-date [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/initial-commit-date.svg)](https://travis-ci.org/IonicaBizau/initial-commit-date/) [![Version](https://img.shields.io/npm/v/initial-commit-date.svg)](https://www.npmjs.com/package/initial-commit-date) [![Downloads](https://img.shields.io/npm/dt/initial-commit-date.svg)](https://www.npmjs.com/package/initial-commit-date) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get the initial commit date from a git repository.

## :cloud: Installation
    
```sh
$ npm i --save initial-commit-date
```

            
## :clipboard: Example

        

```js
const initialCommitDate = require("initial-commit-date");

initialCommitDate((err, date) => {
    console.log(err || date);
    // => Mon Apr 18 2016 10:26:27 GMT+0300 (EEST)
});
```
    
## :memo: Documentation
        
### `initialCommitDate(cwd, cb)`
Get the initial commit date from a git repository.

#### Params
- **String** `cwd`: The path to the git repository.
- **Function** `cb`: The callback function.

        
## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :scroll: License
    
[MIT][license] © [Ionică Bizău][website]
    
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md