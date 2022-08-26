const axios = require('axios');
const httpStatus = require("http-status");
const { wrapperAsync } = require("../middlewares/async-wrapper");
const { GETONBOARD_BASE_URL } = require('../constants');

const getCategories = wrapperAsync(async (req, res) => {

  const config = {
    method: 'get',
    url: GETONBOARD_BASE_URL + 'categories?per_page=10&page=1',
    headers: {}
  };

  await axios(config)
    .then(function (response) {
      //console.log(JSON.stringify(cat.data));
      const categories = response.data.data;
      res.status(httpStatus.OK).json({ success: true, message: "categories obtained", data: categories });
    })
    .catch(function (error) {
      console.log(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: "Error getting categories", error });
    });
});


const retrieveCategory = wrapperAsync(async (req, res) => {

  const { catname } = req.params;

  const config = {
    method: 'get',
    url:  GETONBOARD_BASE_URL + 'categories/' + catname,
    headers: {}
  };

  await axios(config)
    .then(function (cat) {
      //console.log(JSON.stringify(cat.data));
      const category = cat.data.data;
      res.status(httpStatus.OK).json({ success: true, message: "categories obtained", category });
    })
    .catch(function (error) {
      console.log(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: "Error getting categories", error });
    });
});

const jobsCategories = wrapperAsync(async (req, res) => {

  const { catname } = req.params;

  var config = {
    method: 'get',
    url: GETONBOARD_BASE_URL + 'categories/' + catname + '/jobs?per_page=20&page=1&expand=["company"]',
    headers: { }
  };

  await axios(config)
    .then(function (response) {
      //console.log(JSON.stringify(cat.data));
      const categoryJob = response.data.data;
      res.status(httpStatus.OK).json({ success: true, message: "categories obtained", data: categoryJob });
    })
    .catch(function (error) {
      console.log(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: "Error getting categories", error });
    });
});

module.exports = {
  getCategories,
  retrieveCategory,
  jobsCategories
};
