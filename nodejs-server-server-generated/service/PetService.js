'use strict';


/**
 * Add a new pet to the store
 *
 * body Pet Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addPet = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a pet
 *
 * petId Long Pet id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deletePet = function(petId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds Pets by status
 * Multiple status values can be provided with comma separated strings
 *
 * status List Status values that need to be considered for filter
 * returns List
 **/
exports.findPetsByStatus = function(status) {
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
 * Finds Pets by tags
 * Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
 *
 * tags List Tags to filter by
 * returns List
 **/
exports.findPetsByTags = function(tags) {
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
 * Find pet by ID
 * Returns a single pet
 *
 * petId Long ID of pet to return
 * returns Pet
 **/
exports.getPetById = function(petId) {
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
 * Update an existing pet
 *
 * body Pet Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updatePet = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates a pet in the store with form data
 *
 * petId Long ID of pet that needs to be updated
 * name String  (optional)
 * status String  (optional)
 * no response value expected for this operation
 **/
exports.updatePetWithForm = function(petId,name,status) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * uploads an image
 *
 * petId Long ID of pet to update
 * additionalMetadata String  (optional)
 * file byte[]  (optional)
 * returns ApiResponse
 **/
exports.uploadFile = function(petId,additionalMetadata,file) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

