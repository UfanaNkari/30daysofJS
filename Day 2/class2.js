let challenge = '30 Days of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0,10));
console.log(challenge.slice(3));
console.log(challenge.includes('Script'));
console.log(challenge.split(""));

let media = 'Facebook,Google,Microsoft, Apple,IBM,Oracle,Amazon';
let mediaArray = media.split(",");
console.log(mediaArray);

console.log(challenge.replace('JavaScript','Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));

console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let Sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(Sentence.indexOf('because'));
console.log(Sentence.lastIndexOf('because'));
console.log(Sentence.search('because'));
console.log(challenge.trim());
console.log(challenge.startsWith('3'));
console.log(challenge.endsWith('t'));
console.log(challenge.match(/a/g));  

let class1 = '30 Days of';
let class2 = 'JavaScript'
let Joined = class1 + ' ' + class2;
console.log(Joined);

console.log(challenge.repeat(5));

let Quote = 'There is no exercise better for the heart than reaching down and lifting people up.';
let Author = 'by John Holmes';
let End = 'teaches us to help one another.'
let Together = Quote + ' '+ Author + ' '+ End;
console.log(Together);

let quote1 = "Love is not patronizing and charity isn't about pity, it is about love.";
let quote2 = "Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
let spokesMan = 'Mother Teresa';
let All = quote1 + ' ' + quote2 + ' by' + spokesMan;
console.log(All);

let num = '10';
console.log(typeof(num));
console.log(typeof(10));