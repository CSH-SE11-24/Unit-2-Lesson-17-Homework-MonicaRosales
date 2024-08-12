const prompt = require('prompt-sync')()
// Create an object that represents your favorite restaurant with the keys name (string), cuisine (string), and rating (number)
let favRestaurant = {
  Restaurant: "Ihop",
  Cuisine: "Buttermilk Pancakes",
  Rating: 10
}

// Console log the restaurant's name using the object
console.log(favRestaurant.Restaurant)


// Add a new key called location and add the restaurant's location
favRestaurant.Location = "1001 White Plains Rd "


// Change the rating of the restaurant to increase it by one
favRestaurant.Rating++


// Add a new key called test and set the value to null
favRestaurant.test = null


// Delete the test key
delete favRestaurant.test


// Console log the object to see if the test key is gone
console.log(favRestaurant)



// Loop through the object and print every key and element.
// It should look like: 
// name is Ugly Baby
// cuisine is thai
// rating is 10
// location is 407 Smith St, Brooklyn

for(let key in favRestaurant){
  console.log(key, "is", favRestaurant[key])
}



