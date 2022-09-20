module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },
  // program to get a random item from an array

getRandomItem: (arr) => {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr);

  // get random item
  const item = arr[randomIndex];
  console.log(arr,randomIndex)
  return randomIndex;
},
getAge: (date) => {
  var dob = new Date(date);  
  var dobyear = dob.getFullYear(); 
  var year = new Date();
  year = year.getFullYear();
  var userage = (year-dobyear);
  return userage;
}
};
