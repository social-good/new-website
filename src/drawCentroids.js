window.onload = async () => {
	var objects = Object.entries(document.getElementById('land-centroids-and-arcs').childNodes);
	var centroidToCountry = {};
	var satisfied = {};
	var codeToCountry = {};
	var landIds = objects.filter(childNode => childNode[1].tagName === "path" && childNode[1].id).map(childNode =>  {
		var landId = childNode[1].id;
		var expected = `${landId}_centroid`;
		centroidToCountry[expected] = landId;
		satisfied[landId] = false;
		codeToCountry[landId] = childNode;
		return landId;
	});

	var coveredIds = objects.filter(childNode => childNode[1].tagName === "circle" && childNode[1].id)//.map(childNode => childNode[1].id);
	for (var i = 0; i < coveredIds.length; i++) {
		satisfied[centroidToCountry[coveredIds[i]]] = true;
	}
	// console.log(coveredIds[50][1].cy.animVal.value)

	var unsatisfied = objects.filter(childNode => childNode[1].tagName === "circle" && childNode[1].cx.animVal.value === 5 && childNode[1].cy.animVal.value === 5);
	console.log(coveredIds);
	unsatisfied.map(unsat => {
		var domCircle = document.getElementById(unsat[1].id);
		var landPath = document.getElementById(centroidToCountry[unsat[1].id]);
		var coords = landPath.getAttribute("d");
		// console.log(coords);
		var reg = new RegExp('[A-Za-z, ]');
		cx = coords.split(reg)[1];
		cy = coords.split(reg)[2];
		console.log(cx, cy);

		domCircle.setAttribute('cx', cx);
		domCircle.setAttribute('cy', cy);
	})

	
}