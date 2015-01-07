# biojs-voronoiTreeMap

[![NPM version](http://img.shields.io/npm/v/biojs-voronoitreemap.svg)](https://www.npmjs.org/package/biojs-voronoitreemap) 

> reusable Voronoi TreeMap

## Getting Started
Install the module with: `npm install biojs-voronoitreemap`

## Documentation

#### How to have a new TreeMap with different .json file?

For example, in your index**.js**
```javascript
voronoiTree = require('biojs-voronoitreemap');

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
```

And in your index**.html**, 

- change the **id** name according to your .js file. 

    ```HTML
    <div id="chart1"></div>
    <aside id="errors1"></aside>
    <div style="margin: 1em 0; font-style: italic; font-size: small">
      File of the <a href="http://biojs.net/">flare.json</a> by 
      <label for="size"><input id="size1" type="radio" name="treemap-value" checked> size</label> or
      <label for="count"><input id="count1" type="radio" name="treemap-value"> count</label>, by subdividing a polygon
      <span id="polygon1"></span>
      <input id="sides1" type="range" min="3" max="13" value="13">.
    </div>
    ```
- Add your new ```<style>``` for the Errors histogram of your new visualization.

    ```css
    #errors1 text {
      font: 10px sans-serif;
    }
    #errors1 path, #errors1 line {
      stroke: #999;
      shape-rendering: crispEdges;
    }
    #errors1 rect {
      fill: #666;
    }
    ```

With all the parameters, you have to change them accordingly. Here are the descriptions:

- **"json"** : the **.json** file that you would like to visulaize.
- **"ratio"** : the ratio of the visualization component.
- **"width"** : the width of the visualization component.
- **"height"** : the height of the visualization component. 
- **"sidedid"** :  the id of the ```<input>``` for the sides of polygon while changing the shape accordingly.
- **"polygonid"** : the id of the ```<span>``` for the small visualization next to the subdividing polygon bar.
- **"sizeid"** : the id of the ```<label>``` for the visualization according to the size of the treemap value.
- **"countid"** : the id of the ```<label>``` for the visualization according to the count of the treemap value.
- **"chartid"** : the id of the ```<div>``` for the visualization component.
- **"errorsid"** :  the id of the ```<aside>``` for the Errors histogram visualization of the treemap while calcualting.



Additionally, by **"click"** you can checkout the mouse click event in the console to get the information of the treemap.

## Contributing

All contributions are welcome.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/IriscShih/biojs-voronoitreemap/issues).

## License 
This software is licensed under the Apache 2 license, quoted below.

Copyright (c) 2015, iris.cshih

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
