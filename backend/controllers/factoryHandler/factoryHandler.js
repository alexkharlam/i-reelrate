import ApiFeatures from "../../config/ApiFeatures";
import catchAsync from "../../utils/catchAsync";

export const getMany = (Model) =>
  catchAsync(async (req, res, next) => {
    const filter = req.body.filter || null;

    const resultsLength = await Model.countDocuments(filter);

    const docsPromise = new ApiFeatures(Model.find(filter), req.query)
      .limit()
      .limitFields()
      .paginate()
      .sort();

    const documents = await docsPromise.query;

    res.status(200).json({
      results: resultsLength,
      documents,
    });
  });

export const getOne = "";
