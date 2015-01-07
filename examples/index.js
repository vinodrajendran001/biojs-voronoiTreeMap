irisTree = require("biojs-voronoitreemap");

var conf1 = {
  json : "../data/flare.json",
  ratio : 1,
  width : 400,
  height : 400,
  sideid : "#sides1",
  polygonid : "#polygon1",
  sizeid : "#size1",
  countid : "#count1",
  chartid : "#chart1",
  errorsid : "#errors1"
}

irisTree.vtreemap(conf1);

var conf3 = {
  json : "../data/test.json",
  ratio : 1,
  width : 400,
  height : 300,
  sideid : "#sides3",
  polygonid : "#polygon3",
  sizeid : "#size3",
  countid : "#count3",
  chartid : "#chart3",
  errorsid : "#errors3"
}

irisTree.vtreemap(conf3);








