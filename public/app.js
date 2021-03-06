
//Generate Tree Diagram
var margin = {top: 50, right: 120, bottom: 20, left: 80},
  width = 960 - margin.right - margin.left,
  height = 1000 - margin.top - margin.bottom;
  
var i = 0,
  duration = 750,
  root;

var tree = d3.layout.tree()
  .size([height, width]);

var diagonal = d3.svg.diagonal()
  .projection(function(d) { return [d.x, d.y]; });

var svg = d3.select(".main").append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

root = treeData[0];
root.x0 = height / 2;
root.y0 = 0;
  
update(root);

d3.select(".main").style("height", "500px");

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
    links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 100; });

  // Update the nodes…
  var node = svg.selectAll("g.node")
    .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + source.x0 + "," + source.y0 + ")"; })
    .on("click", click);

   
  if(node[0][0].__data__.icon){
    nodeEnter.append("image")
    .attr("xlink:href", function(d) { return d.icon; })
    .attr("x", "-28px")
    .attr("y", "-28px")
    .attr("width", "60px")
    .attr("height", "60px");

  }  else {

  nodeEnter.append("circle")
    .attr("r", 1e-6)
    .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  }


  function wrap(text, width) {
    text.each(function() {
      var text = d3.select(this),
          words = text.text().split(/\s+/).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1.1, // ems
          y = text.attr("y"),
          dy = 0.35,
          tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
    });
  };


  nodeEnter.append("text")
    .attr("y", function(d) { 
      if(d.bottom){
        return 40;
      } 
      else if(d.lift){
        return -75;
      }
      else if(d.liftless){
        return -55;
      }
      else if(d.liftleast){
        return -25;
      }
      else {
        return -44;
      }
    })
    .attr("text-anchor", function(d) { 
      if(d.left){
        return "end";
      }
      else if(d.right){
        return "start";
      }
      else {
        return "middle";
      }
    })
    .text(function(d) { return d.name; })
    .style("fill-opacity", 1e-6)
    .style("font", function(d){ 
        if(d.bottom){
          return "15px sans-serif";
        }
    })
    .style("text-decoration", function(d){ 
        if(d.url){
          return "underline";
        }
    })
    .on("click", function(d) { 
      if(d.url){
      window.open(d.url); 
      }
    })
    .call(wrap, 280);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
    .duration(duration)
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  nodeUpdate.select("circle")
    .attr("r", 14)
    .style("fill", function(d) { 
      if(d.bottom){
        return "#CC1222";
      }
      else if(d._children){
        return "#006D2A";
      }
      else {
        return "#fff"
      }

    });

  nodeUpdate.select("text")
    .style("fill-opacity", function(d) { 
      if(d.bottom){
        return 1;
      }
      else if(d._children){
        return 1;
      }
      else {
        return 0.15;
      }
      
    });

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
    .duration(duration)
    .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
    .remove();

  nodeExit.select("circle")
    .attr("r", 1e-6);

  nodeExit.select("text")
    .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
    .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
    .attr("class", "link")
    .attr("d", function(d) {
    var o = {x: source.x0, y: source.y0};
    return diagonal({source: o, target: o});
    });

  // Transition links to their new position.
  link.transition()
    .duration(duration)
    .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
    .duration(duration)
    .attr("d", function(d) {
    var o = {x: source.x, y: source.y};
    return diagonal({source: o, target: o});
    })
    .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
  d.x0 = d.x;
  d.y0 = d.y;
  });
}

// Toggle children on click.
function click(d) {
  if (d.children) {
  d._children = d.children;
  d.children = null;
  } else {
  d.children = d._children;
  d._children = null;
  }
  update(d);
}