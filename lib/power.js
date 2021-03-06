require("./d3.geom.nhull");

var hull3d = d3.geom.nhull(3);

d3.geom.power = function(points, weight) {
  var triangles = regularTriangulation(points, weight),
      edgeByStart = [];

  triangles.forEach(function(t) {
    edgeByStart[t.a.p.i] = t.a;
    edgeByStart[t.b.p.i] = t.b;
  });

  return points.map(function(_, i) {
    var cell = [],
        neighbors = cell.neighbors = [],
        e00 = edgeByStart[i],
        e0 = e00,
        e = e0;
    if (!e) return null;
    do {
      var centre = e.triangle.centre, neighbor = e.neighbor;
      if (!centre.negative) cell.push(centre);
      if (!neighbor.triangle.centre.negative) neighbors.push(neighbor.p.i);
      if (e === e00 && e0 !== e00) break;
      e = (e0 = e).next.next.neighbor;
    } while (1);
    return cell;
  });
};

function regularTriangulation(points, weight) {
  weight = weight || function() { return 0; };

  return hull3d(points.map(function(p, i) {
    var x = p[0], y = p[1];
    return [x, y, x * x + y * y - weight(p, i)];
  })).filter(function(t) {
    t.coordinates = [points[t.a.p.i], points[t.b.p.i], points[t.c.p.i]];
    var p1 = t.a.p,
        p2 = t.b.p,
        p3 = t.c.p,
        a = p1[1] * (p2[2]-p3[2]) + p2[1] * (p3[2]-p1[2]) + p3[1] * (p1[2]-p2[2]),
        b = p1[2] * (p2[0]-p3[0]) + p2[2] * (p3[0]-p1[0]) + p3[2] * (p1[0]-p2[0]),
        c = p1[0] * (p2[1]-p3[1]) + p2[0] * (p3[1]-p1[1]) + p3[0] * (p1[1]-p2[1]);
    t.centre = [-.5 * a / c, -.5 * b / c];
    return !(t.centre.negative = t.n[2] >= 0);
  });
};

module.exports = d3.geom.power;
