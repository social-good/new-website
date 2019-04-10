var markhamill = false;
var natalieportman = false;

window.onload = () => {
	drawTree(launchExample);
	drawTree2(launchSecondExample);
}

// TODO: Remove natalie portman's line, or make hers self-destructing. 

function launchExample() {
	markhamill = !markhamill;
	if (markhamill) {
		newPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		var originCode = 'US'
		var originCoords = document.getElementById(`${originCode}_centroid`);
		var destinationCode = 'GB'
		var destinationCoords = document.getElementById(`${destinationCode}_centroid`);
		newPath.setAttribute('class', 'debugline2');

		const involvedLands = [document.getElementById(originCode), document.getElementById(destinationCode)];
		newPath.setAttribute("id", "markhamill")
		newPath.setAttribute('stroke-width', 5);
		newPath.setAttribute('d', `M ${originCoords.cx.animVal.value},${originCoords.cy.animVal.value+0.5} L ${destinationCoords.cx.animVal.value},${destinationCoords.cy.animVal.value+0.5}`);
		document.getElementById('land-centroids-and-arcs').appendChild(newPath);
	} else {
		var markpath = document.getElementById('markhamill');
		markpath.parentNode.removeChild(markpath);
	}
}

function launchSecondExample() {
	natalieportman = !natalieportman;
	if (natalieportman) {
		newPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		var originCode = 'US'
		var originCoords = document.getElementById(`${originCode}_centroid`);
		var destinationCode = 'GB'
		var destinationCoords = document.getElementById(`${destinationCode}_centroid`);
		newPath.setAttribute('class', 'debugline2');

		newPath.setAttribute("id", "natalieportman1")
		newPath.setAttribute('stroke-width', 5);
		newPath.setAttribute('d', `M ${originCoords.cx.animVal.value},${originCoords.cy.animVal.value+0.5} L ${destinationCoords.cx.animVal.value},${destinationCoords.cy.animVal.value+0.5}`);
		document.getElementById('land-centroids-and-arcs').appendChild(newPath);
		
		newPath2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		var originCode = 'US'
		var originCoords = document.getElementById(`${originCode}_centroid`);
		var destinationCode = 'IL'
		var destinationCoords = document.getElementById(`${destinationCode}_centroid`);
		newPath2.setAttribute('class', 'debugline2');

		newPath2.setAttribute("id", "natalieportman2")
		newPath2.setAttribute('stroke-width', 5);
		newPath2.setAttribute('d', `M ${originCoords.cx.animVal.value},${originCoords.cy.animVal.value+0.5} L ${destinationCoords.cx.animVal.value},${destinationCoords.cy.animVal.value+0.5}`);
		document.getElementById('land-centroids-and-arcs').appendChild(newPath2);

		newPathError = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		var originCode = 'GB'
		var originCoords = document.getElementById(`${originCode}_centroid`);
		var destinationCode = 'IL'
		var destinationCoords = document.getElementById(`${destinationCode}_centroid`);
		newPathError.setAttribute('class', 'debugline1');

		newPathError.setAttribute("id", "natalieportmanError")
		newPathError.setAttribute('stroke-width', 5);
		newPathError.setAttribute('d', `M ${originCoords.cx.animVal.value},${originCoords.cy.animVal.value+0.5} L ${destinationCoords.cx.animVal.value},${destinationCoords.cy.animVal.value+0.5}`);
		document.getElementById('land-centroids-and-arcs').appendChild(newPathError);
	} else {
		var nataliePath1 = document.getElementById('natalieportman1');
		nataliePath1.parentNode.removeChild(nataliePath1);
		var nataliePath2 = document.getElementById('natalieportman2');
		nataliePath2.parentNode.removeChild(nataliePath2);
		var nataliePathError = document.getElementById('natalieportmanError');
		nataliePathError.parentNode.removeChild(nataliePathError);
	}
}

function launchSequenceSample() {

	var markpath = document.getElementById('markhamill');
	var nataliePath1 = document.getElementById('natalieportman1');
	var nataliePath2 = document.getElementById('natalieportman2');
	var nataliePathError = document.getElementById('natalieportmanError');
	if (markpath) {
		markpath.parentNode.removeChild(markpath);
		markhamill = false;
	}
	if (nataliePath1) {
		nataliePath1.parentNode.removeChild(nataliePath1);
		natalieportman = false;
	}
	if (nataliePath2) {
		nataliePath2.parentNode.removeChild(nataliePath2);
		natalieportman = false;
	}
	if (nataliePathError) {
		nataliePathError.parentNode.removeChild(nataliePathError);
		natalieportman = false;
	}

	var starWars = JSON.parse(StarWarsJSON);
	const cast = Object.entries(starWars.cast);
	const crew = Object.entries(starWars.crew);
	const destinations = {};
	for (var i = 0; i < cast.length; i++) {
		if (!destinations[cast[i][1]])
			destinations[cast[i][1]] = 0;
		destinations[cast[i][1]]++;
	}
	for (var i = 0; i < crew.length; i++) {
		if (!destinations[crew[i][1]])
			destinations[crew[i][1]] = 0;
		destinations[crew[i][1]]++;
	}
	const destinationCodes = Object.keys(destinations);
	console.log(destinations);
	console.log(`hsl(${parseInt(86/destinationCodes.length*256)}%,${100}%,${60}%)`)
	for (var i = 0; i < destinationCodes.length; i++) {
		newPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		var originCode = 'US'
		var originCoords = document.getElementById(`${originCode}_centroid`);
		var destinationCode = destinationCodes[i];
		var destinationCoords = document.getElementById(`${destinationCode}_centroid`);
		const id = `path_crew_${i}`
		newPath.setAttribute('class', 'blankline');
		newPath.setAttribute("id", id)
		newPath.setAttribute('stroke-width', destinations[destinationCodes[i]] > 10 ? 15 : destinations[destinationCodes[i]]);
		newPath.setAttribute('stroke', `hsl(${parseInt(i/destinationCodes.length*256)},${100}%,${60}%)`);
		newPath.setAttribute('d', `M ${originCoords.cx.animVal.value},${originCoords.cy.animVal.value+0.5} L ${destinationCoords.cx.animVal.value},${destinationCoords.cy.animVal.value+0.5}`);
		document.getElementById('land-centroids-and-arcs').appendChild(newPath);
		setTimeout(() => {
			var oldPath = document.getElementById(id);
			oldPath.parentNode.removeChild(oldPath);
		}, 2100);
	}
}

async function launchNameChange() {

	var markpath = document.getElementById('markhamill');
	var nataliePath1 = document.getElementById('natalieportman1');
	var nataliePath2 = document.getElementById('natalieportman2');
	var nataliePathError = document.getElementById('natalieportmanError');
	if (markpath) {
		markpath.parentNode.removeChild(markpath);
		markhamill = false;
	}
	if (nataliePath1) {
		nataliePath1.parentNode.removeChild(nataliePath1);
		natalieportman = false;
	}
	if (nataliePath2) {
		nataliePath2.parentNode.removeChild(nataliePath2);
		natalieportman = false;
	}
	if (nataliePathError) {
		nataliePathError.parentNode.removeChild(nataliePathError);
		natalieportman = false;
	}

	var yearData = JSON.parse(NameChangeJSON);

	var yearDataBreakdown = Object.entries(yearData);
	var leanCodeMap = {};
	
	for (var i = 0; i < yearDataBreakdown.length; i++) {
		var year = yearDataBreakdown[i][0];
		var outgoingBreakdown = Object.entries(yearDataBreakdown[i][1]);
		for (var j = 0; j < outgoingBreakdown.length; j++) {
			var originCode = outgoingBreakdown[j][0];
			var destinationsBreakdown = Object.entries(yearData[year][originCode]);
			for (var k = 0; k < destinationsBreakdown.length; k++) {
				var destinationCode = destinationsBreakdown[k][0];
				var weight = destinationsBreakdown[k][1];
				// console.log(year, originCode, destinationCode, weight);
				var originCoords = document.getElementById(`${originCode}_centroid`);
				var destinationCoords = document.getElementById(`${destinationCode}_centroid`);
				if (originCoords == null || destinationCoords == null)
					console.log(originCode, originCoords, destinationCode, destinationCoords);
				const involvedLands = [document.getElementById(originCode), document.getElementById(destinationCode)]
				newPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
				if (destinationCode == 'GB') {
					newPath.setAttribute('class', 'influx-line');
				} else if (originCode == 'GB') {
					newPath.setAttribute('class', 'outflux-line');
				} else {
					newPath.setAttribute('class', 'peripheral-line');
				}
				const id = `${year}_${i}_${j}`;
				involvedLands[0].classList.remove('activated-land');
				involvedLands[1].classList.remove('activated-land');
				involvedLands[0].classList.add('activated-land');
				involvedLands[1].classList.add('activated-land');
				// console.log(involvedLands[0].classList, involvedLands[1].classList)

				newPath.setAttribute('id', id);
				newPath.setAttribute('stroke-width', weight);
				newPath.setAttribute('d', `M ${originCoords.cx.animVal.value},${originCoords.cy.animVal.value+0.5} L ${destinationCoords.cx.animVal.value},${destinationCoords.cy.animVal.value+0.5}`);

				document.getElementById('land-centroids-and-arcs').appendChild(newPath);
				setTimeout(() => {
					var oldPath = document.getElementById(id);
					oldPath.parentNode.removeChild(oldPath);
					involvedLands[0].classList.remove('activated-land');
					involvedLands[1].classList.remove('activated-land');
				}, 2100);
			}
		}
		await sleep(100);

	}
}

// Promise
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
