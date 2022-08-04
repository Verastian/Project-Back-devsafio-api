const { Tool } = require("../models");
const { wrapperAsync } = require("../middlewares/async-wrapper");
const level = [1,2,3,4,5];

const getTool = wrapperAsync(async(req,res)=>{
  const getTool = await Tool.findAll();
  res.getTool
})

const saveTool = [
    {
        value: 1,
        text: "Adobe Illustrator",
      },
      {
        value: 2,
        text: "Adobe PhotoShop",
      },
      {
        value: 3,
        text: "Adobe XD",
      },
      {
        value: 4,
        text: "AWS",
      },
      {
        value: 5,
        text: "Docker",
      },
      {
        value: 6,
        text: "Figma",
      },
      {
        value: 7,
        text: "Git",
      },
      {
        value: 8,
        text: "Google Analytics",
      },
      {
        value: 9,
        text: "Google Cloud Platform",
      },
      {
        value: 10,
        text: "Google Data Studio",
      },
      {
        value: 11,
        text: "Invision",
      },
      {
        value: 12,
        text: "inVision Studio",
      },
      {
        value: 13,
        text: "Jira",
      },
      {
        value: 14,
        text: "Kubermetes",
      },
      {
        value: 15,
        text: "Marvel",
      },
      {
        value: 16,
        text: "Microft Excel",
      },
      {
        value: 17,
        text: "Microft Azure",
      },
      {
        value: 18,
        text: "Miro",
      },
      {
        value: 19,
        text: "Power BI",
      },
      {
        value: 20,
        text: "Proto.io",
      },
      {
        value: 21,
        text: "Qlik",
      },
      {
        value: 22,
        text: "Sketch",
      },
      {
        value: 23,
        text: "SPSS",
      },
      {
        value: 24,
        text: "Tableau",
      },
      {
        value: 25,
        text: "Unity 3D",
      },
      {
        value: 26,
        text: "Unreal Engine",
      },
      {
        value: "zeplin",
        text: "Zeplin",
      },
    ]  

const toollevel = wrapperAsync(async (req, res) => {
  res.status(200).json( {
    label: "¿En qué nivel? ",
    id: "level",
    name: "level",
    type: "select",
    dataset: 'generatedFormTools',
    options: [ 
      {
        value: 1,
        text: "1",
      },
      {
        value: 2,
        text: "2",
      },
      {
        value: 3,
        text: "3",
      },
      {
        value: 4,
        text: "4",
      },
      {
        value: 5,
        text: "5",
      },
    ]
  });
});

module.exports = { 
    getTool,
    saveTool,
    toollevel}; 