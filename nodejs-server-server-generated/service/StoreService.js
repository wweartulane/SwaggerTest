'use strict';


/**
 * Delete purchase order by ID
 * For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors
 *
 * orderId Long ID of the order that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteOrder = function(orderId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Returns pet inventories by status
 * Returns a map of status codes to quantities
 *
 * returns Map
 **/
exports.getInventory = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find purchase order by ID
 * For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions
 *
 * orderId Long ID of pet that needs to be fetched
 * returns Order
 **/
exports.getOrderById = function(orderId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Place an order for a pet
 *
 * body Order order placed for purchasing the pet
 * returns Order
 **/
exports.placeOrder = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

