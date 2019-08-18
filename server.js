// build a web application that represents warehouse management system

// import express
let express = require('express');

// create an instance
let app = express();

// store db in an array
let db = [];


/* Add a new item to the warehouse through the URL.
- E.g: http://localhost:8080/newItem/Tv/20/1500
- Object {id:348, name:’TV’, quantity:20, price:1500} should be saved in the DB
*/
app.get('/newItem/:name/:quantity/:price', function(req,res) {

    let record = {
        // id is randomly created and has to be converted to string to be checked with the id from the url
        // name, quantity and price are from the route parameters
        id: Math.round(Math.random()*1000).toString(),
        name : req.params.name,
        quantity : req.params.quantity,
        price : req.params.price
    };
    // console.log(record);

    // add the item to our database
    db.push(record);
    console.log(db);
    console.log('---');

    // respond to user with a string 
    res.send('Item added!');

    // res.send(generateList());
});


/* Delete an item
- URL: http://localhost:8080/deleteItem/938, 
- where 938 is the id of the item that should be deleted
*/
app.get('/deleteItem/:id',function (req,res) {

    // retrieve the id from the route parameter
    let id = req.params.id;

    // use while loop to search for the matching id
    let index = 0;
    while (index < db.length) {
        if (db[index].id === id) {
            // remove the item from our database
            db.splice(index,1);
            break;
        }
        else {
            index++;
        }
    }

    console.log(db);

    // respond to user on the webpage
    res.send('Item deleted!');
    // res.send(generateList());
});


/* Get warehouse value
- URL: http://localhost:8080/totalValue
- where the warehouse value is equal to ∑n0item.quantity∗item.price
  for all n items in the array DB
*/
app.get('/totalValue',function (req,res) {
    for (let i = 0; i < db.length; i++) {
        
    }
});

/* List all items
- The output should have five columns: id, name, quantity, price, and cost (quantity * price)
- HINT: use function generateList as a reference
- URL: http://localhost:8080/listAllItems
*/
app.get('/listAllItems',function (req,res) {

});

// build a function that generates a string containing the list of users
function generateList() {
    let msg = 'Id  Name  Quantity  Price </br>';
    for (let i = 0; i < db.length; i++) {
        msg += db[i].id + ' | ' + db[i].name + ' | ' + db[i].quantity + ' | ' + db[i].price + '</br>';
    }
    return msg;
}

app.listen(8080);