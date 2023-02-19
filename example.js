import { createDB } from "./index.js";

const db = await createDB('testDB');
console.log(db);
const coll = await db.createCollection('testCollection');
console.log(coll);

await coll.createDocument({hello:'world'});

console.log(await coll.findAll());