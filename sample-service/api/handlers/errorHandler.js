/**
 *
 * @param {Object} err
 */
const errorHandler = (err) => {
  if (err) {
    throw new Error(err.sqlMessage);
  }
};

export default errorHandler;
