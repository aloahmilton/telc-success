import mongoose from "mongoose";

const MONGODB_URI =
  process.env["MONGODB_URI"] ||
  "mongodb+srv://ialoahmilton_db_user:ZBmz29Y0jgD5N9Sp@cluster0.lrgq2kv.mongodb.net/telc_db?retryWrites=true&w=majority";

if (!MONGODB_URI) {
  throw new Error("Bitte definieren Sie MONGODB_URI in der .env Datei");
}

/**
 * Global instance cache for hot reloading in development.
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      console.log("✅ Erfolgreich mit MongoDB Atlas verbunden (telc_db)");
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
