const httpStatus = require('http-status');

const workProfileView = (workProfileSequelize) => {
  return {
    status: httpStatus.OK,
    message: "OK",
    data: {
      work_profile: {
        id: workProfileSequelize.id
      }
    }
  };
};

module.exports = workProfileView;
