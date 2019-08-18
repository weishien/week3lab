/* Add a new item to the warehouse through the URL.
- E.g: http://localhost:8080/newItem/Tv/20/1500
- Object {id:348, name:’TV’, quantity:20, price:1500} should be saved in the DB
*/

/* Delete an item
- URL: http://localhost:8080/deleteItem/938, 
- where 938 is the id of the item that should be deleted
*/

/* Get warehouse value
- URL: http://localhost:8080/totalValue
- where the warehouse value is equal to ∑n0item.quantity∗item.price
  for all n items in the array DB
*/

/* List all items
- The output should have five columns: id, name, quantity, price, and cost (quantity * price)
- HINT: use function generateList as a reference
- URL: http://localhost:8080/listAllItems
*/


let express = require('express');
let router = express.Router();
