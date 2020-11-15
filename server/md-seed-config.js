import mongoose from "mongoose";
import Users from "./seeders/users.seeder";

const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/mern";

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
export const seedersList = { Users };
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
export const connect = async () =>
  await mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
export const dropdb = async () => mongoose.connection.db.dropDatabase();
