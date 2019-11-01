import { createConnection } from "typeorm";

// import * as functions from 'firebase-functions';

// console.log(`connect to:"/cloudsql/${functions.config().db.conn}"`);

export const connection = createConnection("local");