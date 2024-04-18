import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// DONE: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');

  // Create a connection to the database and version we want to use.
  const contactDb = await openDB('jate', 1);
  
  // Create a new transaction and specify the database and data privileges,
  // since we're updating, we'll use 'readwrite' to change the value of the item in the database.
  const tx = contactDb.transaction('jate', 'readwrite');

  // Accessing the database so we can update the item within the database.
  const store = tx.objectStore('jate');

  // Whatever content was passed thought putDb will be sent to the item with an id of 1,
  // so it gets updated with that content.
  const request = store.put({ id: 1, value: content });

  // Get confirmation of the request.
  const result = await request;
  console.log('Data saved to the database', result);
};

// DONE: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET from the database");

  // Create a connection to the database and version we want to use.
  const contactDb = await openDB("jate", 1);

  // Create a new transaction and specify the database and data privileges,
  // since we're only reading the item in the database, we'll be using 'readonly'.
  const tx = contactDb.transaction("jate", "readonly");

  // Open up the desired object store.
  const store = tx.objectStore("jate");

  // Use .get(1) method to get the first item in the database,
  // since there will be no new items added to the database (due to no post request).
  const request = store.get(1);

  // Get confirmation of the request.
  const result = await request;
  console.log("result.value", result);
  return result;
};

initdb();
