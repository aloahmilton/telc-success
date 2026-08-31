/**
 * Browser stub for mongoose.
 * Mongoose is a Node.js-only library and cannot run in the browser.
 * All actual DB operations happen server-side (Cloudflare Workers / API routes).
 * This stub prevents "Class extends value undefined" and EventEmitter crashes.
 */

export class Schema {
  constructor(_definition?: unknown, _options?: unknown) {}
  index() { return this; }
  pre() { return this; }
  post() { return this; }
  virtual() { return { get: () => this, set: () => this }; }
  static Types = {
    ObjectId: String,
    String,
    Number,
    Boolean,
    Date,
    Mixed: Object,
    Array,
  };
}

export class Document {}

export class Model {
  static findOne() { return Promise.resolve(null); }
  static find() { return Promise.resolve([]); }
  static create() { return Promise.resolve(null); }
  static deleteOne() { return Promise.resolve({ deletedCount: 0 }); }
  static countDocuments() { return Promise.resolve(0); }
  static updateOne() { return Promise.resolve(null); }
}

const mongoose = {
  models: {} as Record<string, unknown>,
  connect: () => Promise.resolve(),
  connection: { readyState: 0 },
  model: (_name: string, _schema?: unknown) => Model,
  Schema,
  Document,
};

export default mongoose;
