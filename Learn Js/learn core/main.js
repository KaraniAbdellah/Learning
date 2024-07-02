// Quantifiers Leesson part 1
let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
console.log(mails.match(/\w+@\w+.\w+/gi));
console.log(mails.match(/\w*@\w+.com/gi));
console.log(mails.match(/\w?@\w+.com/gi));

// Part 2 Of Quantifiers
console.log(mails.match(/\w{3}@\w{2,7}.\w{2,}/gi));





















