// db.js
import { openDB } from 'idb';

const dbName = 'myDatabase';
const storeName = 'myStore';

const openDatabase = async () => {
  return openDB(dbName, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

const addData = async (data) => {
  const db = await openDatabase();
  const tx = db.transaction(storeName, 'readwrite');
  const store = tx.objectStore(storeName);
  await store.add(data);
  await tx.done;
};

const getAllData = async () => {
  const db = await openDatabase();
  const tx = db.transaction(storeName, 'readonly');
  const store = tx.objectStore(storeName);
  return store.getAll();
};

const deleteData = async (id) => {
  const db = await openDatabase();
  const tx = db.transaction(storeName, 'readwrite');
  const store = tx.objectStore(storeName);

  await store.delete(id);
  await tx.done;
};

const editData = async (id, newData) => {
  const db = await openDatabase();
  const tx = db.transaction(storeName, 'readwrite');
  const store = tx.objectStore(storeName);

  const existingData = await store.get(id);
  if (existingData) {
    Object.assign(existingData, newData);
    await store.put(existingData);
  }

  await tx.done;
};

const viewData = async (id) => {
  const db = await openDatabase();
  const tx = db.transaction(storeName, 'readonly');
  const store = tx.objectStore(storeName);

  return store.get(id);
};

export { addData, getAllData, deleteData, editData, viewData };
