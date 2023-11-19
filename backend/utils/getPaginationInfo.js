import dotenv from "dotenv";

dotenv.config();

const { DEFAULT_PAGE_LIMIT } = process.env;

async function getPaginationInfo(Model, requestQuery) {
  const totalDocs = await Model.countDocuments();

  const pageLimit = requestQuery.limit || DEFAULT_PAGE_LIMIT;
  const totalPages = Math.ceil(totalDocs / pageLimit);

  return { totalDocs, pageLimit, totalPages };
}

export default getPaginationInfo;
