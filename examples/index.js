voronoiTree = require("biojs-voronoitreemap");

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

voronoiTree.vtreemap(conf1);

// var conf2 = {
//   json : "../data/test.json",
//   ratio : 1,
//   width : 200,
//   height : 300,
//   sideid : "#sides2",
//   polygonid : "#polygon2",
//   sizeid : "#size2",
//   countid : "#count2",
//   chartid : "#chart2",
//   errorsid : "#errors2"
// }

// voronoiTree.vtreemap(conf2);

// var conf3 = {
//   json : "../data/flare.json",
//   ratio : 1,
//   width : 400,
//   height : 300,
//   sideid : "#sides3",
//   polygonid : "#polygon3",
//   sizeid : "#size3",
//   countid : "#count3",
//   chartid : "#chart3",
//   errorsid : "#errors3"
// }

// voronoiTree.vtreemap(conf3);








