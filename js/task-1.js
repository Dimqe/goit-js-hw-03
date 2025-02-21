function slugify(title) {
  return title.toLowerCase().split(' ').join('-');
}

console.log(slugify("Arrays for Beginners"));
console.log(slugify("JavaScript is Awesome")); 
console.log(slugify("Learn to Code")); 