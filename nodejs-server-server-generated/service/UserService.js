'use strict';


/**
 * Create user
 * This can only be done by the logged in user.
 *
 * body User Created user object
 * no response value expected for this operation
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Creates list of users with given input array
 *
 * body List List of user object
 * no response value expected for this operation
 **/
exports.createUsersWithArrayInput = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Creates list of users with given input array
 *
 * body List List of user object
 * no response value expected for this operation
 **/
exports.createUsersWithListInput = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete user
 * This can only be done by the logged in user.
 *
 * username String The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteUser = function(username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get user by user name
 *
 * username String The name that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
exports.getUserByName = function(username) {
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
 * Logs user into the system
 *
 * username String The user name for login
 * password String The password for login in clear text
 * returns String
 **/
exports.loginUser = function(username,password) {
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
 * Logs out current logged in user session
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updated user
 * This can only be done by the logged in user.
 *
 * body User Updated user object
 * username String name that need to be updated
 * no response value expected for this operation
 **/
exports.updateUser = function(body,username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

