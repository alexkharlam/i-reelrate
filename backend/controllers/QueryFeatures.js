import dotenv from "dotenv";

dotenv.config();
const { DEFAULT_PAGE_LIMIT } = process.env;

class QueryFeatures {
  constructor(mongooseQuery, requestQuery) {
    this.mongooseQuery = mongooseQuery;
    this.requestQuery = requestQuery || {};
  }

  sort() {
    if (this.requestQuery.sortBy) {
      const sortBy = this.requestQuery.sortBy.split(",").join(" ");
      this.mongooseQuery = this.mongooseQuery.sort(sortBy);
    } else {
      this.mongooseQuery = this.mongooseQuery.sort("-createdAt");
    }

    return this;
  }

  limitFields() {
    if (this.requestQuery.fields) {
      const fields = this.requestQuery.fields.split(",").join(" ");
      this.mongooseQuery = this.mongooseQuery.select(fields);
    } else {
      this.mongooseQuery = this.mongooseQuery.select("-__v");
    }

    return this;
  }

  paginate() {
    const page = this.requestQuery.page * 1 || 1;

    const limit = this.requestQuery.limit * 1 || DEFAULT_PAGE_LIMIT;

    const skip = (page - 1) * limit;

    this.mongooseQuery = this.mongooseQuery.skip(skip).limit(limit);

    return this;
  }

  populate(options) {
    this.mongooseQuery = this.mongooseQuery.populate(options);

    return this;
  }
}

export default QueryFeatures;
