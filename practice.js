var index = 0;
window.onload = async () => {
	// setInterval(() => {
	// for (var i = 0; i < 700; i++) {
	// 	var newPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	// 	newPath.setAttribute('d', `M ${Math.random() * 1200},${Math.random() * 775} L ${Math.random() * 1200},${Math.random() * 775}`);
	// 	newPath.setAttribute('id', 'practiceline2');
	// 	// if (document.getElementById('arcs'))
	// 	// 	console.log(document.getElementById('arcs'));
	// 	document.getElementById('arcs').appendChild(newPath);
	// }
	// }, 500)

	// var newPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	// newPath.setAttribute('d', `M 109.25,279.8 L 10,10`);
	// newPath.setAttribute('id', 'practiceline');
	// document.getElementById('g4105').appendChild(newPath);

	// draw lat lines
	// for (var lat = 1; lat <= 100; lat ++) {
	// 	newPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	// 	newPath.setAttribute('d', `M ${lat * 10},0 L ${lat * 10},700`);
	// 	if (lat % 10 === 0) {
	// 		newPath.setAttribute('class', 'latitudeLineThick');
	// 	} else {
	// 		newPath.setAttribute('class', 'latitudeLineThin');
	// 	}
	// 	document.getElementById('g4105').appendChild(newPath);
	// }

	// for (var long = 1; long <= 70; long ++) {
	// 	newPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	// 	newPath.setAttribute('d', `M 0,${long * 10} L 1000,${long * 10}`);
	// 	if (long % 10 === 0) {
	// 		newPath.setAttribute('class', 'longitudeLineThick');
	// 	} else {
	// 		newPath.setAttribute('class', 'longitudeLineThin');
	// 	}
	// 	document.getElementById('g4105').appendChild(newPath);
	// }

	var centroids = {
		AE: {
			x: 0,
			y: 0,
			name: 'United Arab Emirates'
		},
		AF: {
			x: 0,
			y: 0,
			name: 'Afghanistan'
		},
		AL: {
			x: 0,
			y: 0,
			name: 'Albania'
		},
		AM: {
			x: 0,
			y: 0,
			name: 'Armenia'
		},
		AO: {
			x: 0,
			y: 0,
			name: 'Angola'
		},
		AR: {
			x: 0,
			y: 0,
			name: 'Argentina'
		},
		AT: {
			x: 0,
			y: 0,
			name: 'Austria'
		},
		AU: {
			x: 0,
			y: 0,
			name: 'Australia'
		},
		AZ: {
			x: 0,
			y: 0,
			name: 'Azerbaijan'
		},
		BA: {
			x: 0,
			y: 0,
			name: 'Bosnia and Herzegovina'
		},
		BD: {
			x: 0,
			y: 0,
			name: 'Bangladesh'
		},
		BE: {
			x: 0,
			y: 0,
			name: 'Belgium'
		},
		BF: {
			x: 0,
			y: 0,
			name: 'Burkina Faso'
		},
		BG: {
			x: 0,
			y: 0,
			name: 'Bulgaria'
		},
		BI: {
			x: 0,
			y: 0,
			name: 'Burundi'
		},
		BJ: {
			x: 0,
			y: 0,
			name: 'Benin'
		},
		BN: {
			x: 0,
			y: 0,
			name: 'Brunei Darussalam'
		},
		BO: {
			x: 0,
			y: 0,
			name: 'Bolivia'
		},
		BR: {
			x: 0,
			y: 0,
			name: 'Brazil'
		},
		BS: {
			x: 0,
			y: 0,
			name: 'Bahamas'
		},
		BT: {
			x: 0,
			y: 0,
			name: 'Bhutan'
		},
		BW: {
			x: 0,
			y: 0,
			name: 'Botswana'
		},
		BY: {
			x: 0,
			y: 0,
			name: 'Belarus'
		},
		BZ: {
			x: 0,
			y: 0,
			name: 'Belize'
		},
		CA: {
			x: 0,
			y: 0,
			name: 'Canada'
		},
		CD: {
			x: 0,
			y: 0,
			name: 'Democratic Republic of Congo'
		},
		CF: {
			x: 0,
			y: 0,
			name: 'Central African Republic'
		},
		CG: {
			x: 0,
			y: 0,
			name: 'Republic of Congo'
		},
		CH: {
			x: 0,
			y: 0,
			name: 'Switzerland'
		},
		CI: {
			x: 0,
			y: 0,
			name: 'Côte d\'Ivoire'
		},
		CL: {
			x: 0,
			y: 0,
			name: 'Chile'
		},
		CM: {
			x: 0,
			y: 0,
			name: 'Cameroon'
		},
		CN: {
			x: 0,
			y: 0,
			name: 'China'
		},
		CO: {
			x: 0,
			y: 0,
			name: 'Colombia'
		},
		CR: {
			x: 0,
			y: 0,
			name: 'Costa Rica'
		},
		CU: {
			x: 0,
			y: 0,
			name: 'Cuba'
		},
		CY: {
			x: 0,
			y: 0,
			name: 'Cyprus'
		},
		CZ: {
			x: 0,
			y: 0,
			name: 'Czech Republic'
		},
		DE: {
			x: 0,
			y: 0,
			name: 'Germany'
		},
		DJ: {
			x: 0,
			y: 0,
			name: 'Djibouti'
		},
		DK: {
			x: 0,
			y: 0,
			name: 'Denmark'
		},
		DO: {
			x: 0,
			y: 0,
			name: 'Dominican Republic'
		},
		DZ: {
			x: 0,
			y: 0,
			name: 'Algeria'
		},
		EC: {
			x: 0,
			y: 0,
			name: 'Ecuador'
		},
		EE: {
			x: 0,
			y: 0,
			name: 'Estonia'
		},
		EG: {
			x: 0,
			y: 0,
			name: 'Egypt'
		},
		EH: {
			x: 0,
			y: 0,
			name: 'Western Sahara'
		},
		ER: {
			x: 0,
			y: 0,
			name: 'Eritrea'
		},
		ES: {
			x: 0,
			y: 0,
			name: 'Spain'
		},
		ET: {
			x: 0,
			y: 0,
			name: 'Ethiopia'
		},
		FK: {
			x: 0,
			y: 0,
			name: 'Falkland Islands'
		},
		FI: {
			x: 0,
			y: 0,
			name: 'Finland'
		},
		FJ: {
			x: 0,
			y: 0,
			name: 'Fiji'
		},
		FR: {
			x: 0,
			y: 0,
			name: 'France'
		},
		GA: {
			x: 0,
			y: 0,
			name: 'Gabon'
		},
		GB: {
			x: 0,
			y: 0,
			name: 'United Kingdom'
		},
		GE: {
			x: 0,
			y: 0,
			name: 'Georgia'
		},
		GF: {
			x: 0,
			y: 0,
			name: 'French Guiana'
		},
		GH: {
			x: 0,
			y: 0,
			name: 'Ghana'
		},
		GL: {
			x: 0,
			y: 0,
			name: 'Greenland'
		},
		GM: {
			x: 0,
			y: 0,
			name: 'Gambia'
		},
		GN: {
			x: 0,
			y: 0,
			name: 'Guinea'
		},
		GQ: {
			x: 0,
			y: 0,
			name: 'Equatorial Guinea'
		},
		GR: {
			x: 0,
			y: 0,
			name: 'Greece'
		},
		GT: {
			x: 0,
			y: 0,
			name: 'Guatemala'
		},
		GW: {
			x: 0,
			y: 0,
			name: 'Guinea-Bissau'
		},
		GY: {
			x: 0,
			y: 0,
			name: 'Guyana'
		},
		HN: {
			x: 0,
			y: 0,
			name: 'Honduras'
		},
		HR: {
			x: 0,
			y: 0,
			name: 'Croatia'
		},
		HT: {
			x: 0,
			y: 0,
			name: 'Haiti'
		},
		HU: {
			x: 0,
			y: 0,
			name: 'Hungary'
		},
		ID: {
			x: 0,
			y: 0,
			name: 'Indonesia'
		},
		IE: {
			x: 0,
			y: 0,
			name: 'Ireland'
		},
		IL: {
			x: 0,
			y: 0,
			name: 'Israel'
		},
		IN: {
			x: 0,
			y: 0,
			name: 'India'
		},
		IQ: {
			x: 0,
			y: 0,
			name: 'Iraq'
		},
		IR: {
			x: 0,
			y: 0,
			name: 'Iran'
		},
		IS: {
			x: 0,
			y: 0,
			name: 'Iceland'
		},
		IT: {
			x: 0,
			y: 0,
			name: 'Italy'
		},
		JM: {
			x: 0,
			y: 0,
			name: 'Jamaica'
		},
		JO: {
			x: 0,
			y: 0,
			name: 'Jordan'
		},
		JP: {
			x: 0,
			y: 0,
			name: 'Japan'
		},
		KE: {
			x: 0,
			y: 0,
			name: 'Kenya'
		},
		KG: {
			x: 0,
			y: 0,
			name: 'Kyrgyzstan'
		},
		KH: {
			x: 0,
			y: 0,
			name: 'Cambodia'
		},
		KP: {
			x: 0,
			y: 0,
			name: 'North Korea'
		},
		KR: {
			x: 0,
			y: 0,
			name: 'South Korea'
		},
		XK: {
			x: 0,
			y: 0,
			name: 'Kosovo'
		},
		KW: {
			x: 0,
			y: 0,
			name: 'Kuwait'
		},
		KZ: {
			x: 0,
			y: 0,
			name: 'Kazakhstan'
		},
		LA: {
			x: 0,
			y: 0,
			name: 'Lao People\'s Democratic Republic'
		},
		LB: {
			x: 0,
			y: 0,
			name: 'Lebanon'
		},
		LK: {
			x: 0,
			y: 0,
			name: 'Sri Lanka'
		},
		LR: {
			x: 0,
			y: 0,
			name: 'Liberia'
		},
		LS: {
			x: 0,
			y: 0,
			name: 'Lesotho'
		},
		LT: {
			x: 0,
			y: 0,
			name: 'Lithuania'
		},
		LU: {
			x: 0,
			y: 0,
			name: 'Luxembourg'
		},
		LV: {
			x: 0,
			y: 0,
			name: 'Latvia'
		},
		LY: {
			x: 0,
			y: 0,
			name: 'Libya'
		},
		MA: {
			x: 0,
			y: 0,
			name: 'Morocco'
		},
		MD: {
			x: 0,
			y: 0,
			name: 'Moldova'
		},
		ME: {
			x: 0,
			y: 0,
			name: 'Montenegro'
		},
		MG: {
			x: 0,
			y: 0,
			name: 'Madagascar'
		},
		MK: {
			x: 0,
			y: 0,
			name: 'Macedonia'
		},
		ML: {
			x: 0,
			y: 0,
			name: 'Mali'
		},
		MM: {
			x: 0,
			y: 0,
			name: 'Myanmar'
		},
		MN: {
			x: 0,
			y: 0,
			name: 'Mongolia'
		},
		MR: {
			x: 0,
			y: 0,
			name: 'Mauritania'
		},
		MW: {
			x: 0,
			y: 0,
			name: 'Malawi'
		},
		MX: {
			x: 0,
			y: 0,
			name: 'Mexico'
		},
		MY: {
			x: 0,
			y: 0,
			name: 'Malaysia'
		},
		MZ: {
			x: 0,
			y: 0,
			name: 'Mozambique'
		},
		NA: {
			x: 0,
			y: 0,
			name: 'Namibia'
		},
		NC: {
			x: 0,
			y: 0,
			name: 'New Caledonia'
		},
		NE: {
			x: 0,
			y: 0,
			name: 'Niger'
		},
		NG: {
			x: 0,
			y: 0,
			name: 'Nigeria'
		},
		NI: {
			x: 0,
			y: 0,
			name: 'Nicaragua'
		},
		NL: {
			x: 0,
			y: 0,
			name: 'Netherlands'
		},
		NO: {
			x: 0,
			y: 0,
			name: 'Norway'
		},
		NP: {
			x: 0,
			y: 0,
			name: 'Nepal'
		},
		NZ: {
			x: 0,
			y: 0,
			name: 'New Zealand'
		},
		OM: {
			x: 0,
			y: 0,
			name: 'Oman'
		},
		PA: {
			x: 0,
			y: 0,
			name: 'Panama'
		},
		PE: {
			x: 0,
			y: 0,
			name: 'Peru'
		},
		PG: {
			x: 0,
			y: 0,
			name: 'Papua New Guinea'
		},
		PH: {
			x: 0,
			y: 0,
			name: 'Philippines'
		},
		PL: {
			x: 0,
			y: 0,
			name: 'Poland'
		},
		PK: {
			x: 0,
			y: 0,
			name: 'Pakistan'
		},
		PR: {
			x: 0,
			y: 0,
			name: 'Puerto Rico'
		},
		PS: {
			x: 0,
			y: 0,
			name: 'Palestinian Territories'
		},
		PT: {
			x: 0,
			y: 0,
			name: 'Portugal'
		},
		PY: {
			x: 0,
			y: 0,
			name: 'Paraguay'
		},
		QA: {
			x: 0,
			y: 0,
			name: 'Qatar'
		},
		RO: {
			x: 0,
			y: 0,
			name: 'Romania'
		},
		RS: {
			x: 0,
			y: 0,
			name: 'Serbia'
		},
		RU: {
			x: 0,
			y: 0,
			name: 'Russia'
		},
		RW: {
			x: 0,
			y: 0,
			name: 'Rwanda'
		},
		SA: {
			x: 0,
			y: 0,
			name: 'Saudi Arabia'
		},
		SB: {
			x: 0,
			y: 0,
			name: 'Solomon Islands'
		},
		SD: {
			x: 0,
			y: 0,
			name: 'Sudan'
		},
		SE: {
			x: 0,
			y: 0,
			name: 'Sweden'
		},
		SI: {
			x: 0,
			y: 0,
			name: 'Slovenia'
		},
		SJ: {
			x: 0,
			y: 0,
			name: 'Svalbard and Jan Mayen'
		},
		SK: {
			x: 0,
			y: 0,
			name: 'Slovakia'
		},
		SL: {
			x: 0,
			y: 0,
			name: 'Sierra Leone'
		},
		SN: {
			x: 0,
			y: 0,
			name: 'Senegal'
		},
		SO: {
			x: 0,
			y: 0,
			name: 'Somalia'
		},
		SR: {
			x: 0,
			y: 0,
			name: 'Suriname'
		},
		SS: {
			x: 0,
			y: 0,
			name: 'South Sudan'
		},
		SV: {
			x: 0,
			y: 0,
			name: 'El Salvador'
		},
		SY: {
			x: 0,
			y: 0,
			name: 'Syria'
		},
		SZ: {
			x: 0,
			y: 0,
			name: 'Swaziland'
		},
		TD: {
			x: 0,
			y: 0,
			name: 'Chad'
		},
		TF: {
			x: 0,
			y: 0,
			name: 'French Southern and Antarctic Lands'
		},
		TG: {
			x: 0,
			y: 0,
			name: 'Togo'
		},
		TH: {
			x: 0,
			y: 0,
			name: 'Thailand'
		},
		TJ: {
			x: 0,
			y: 0,
			name: 'Tajikistan'
		},
		TL: {
			x: 0,
			y: 0,
			name: 'Timor-Leste'
		},
		TM: {
			x: 0,
			y: 0,
			name: 'Turkmenistan'
		},
		TN: {
			x: 0,
			y: 0,
			name: 'Tunisia'
		},
		TR: {
			x: 0,
			y: 0,
			name: 'Turkey'
		},
		TT: {
			x: 0,
			y: 0,
			name: 'Trinidad and Tobago'
		},
		TW: {
			x: 0,
			y: 0,
			name: 'Taiwan'
		},
		TZ: {
			x: 0,
			y: 0,
			name: 'Tanzania'
		},
		UA: {
			x: 0,
			y: 0,
			name: 'Ukraine'
		},
		UG: {
			x: 0,
			y: 0,
			name: 'Uganda'
		},
		US: {
			x: 0,
			y: 0,
			name: 'United States'
		},
		UY: {
			x: 0,
			y: 0,
			name: 'Uruguay'
		},
		UZ: {
			x: 0,
			y: 0,
			name: 'Uzbekistan'
		},
		VE: {
			x: 0,
			y: 0,
			name: 'Venezuela'
		},
		VN: {
			x: 0,
			y: 0,
			name: 'Vietnam'
		},
		VU: {
			x: 0,
			y: 0,
			name: 'Vanuatu'
		},
		YE: {
			x: 0,
			y: 0,
			name: 'Yemen'
		},
		ZA: {
			x: 0,
			y: 0,
			name: 'South Africa'
		},
		ZM: {
			x: 0,
			y: 0,
			name: 'Zambia'
		},
		ZW: {
			x: 0,
			y: 0,
			name: 'Zimbabwe'
		}
	};

	var yearDataJSON = `{"1900":{},"1901":{},"1902":{},"1903":{"DE":{"NL":1}},"1904":{},"1905":{},"1906":{},"1907":{"GB":{"FR":1}},"1908":{"GB":{"CN":1}},"1909":{"GB":{"PT":2,"FR":1},"DE":{"GB":1}},"1910":{"GB":{"PT":1}},"1911":{"GB":{"PT":2,"CN":1},"DE":{"GB":1}},"1912":{"GB":{"PT":3,"IE":1,"DK":1},"ES":{"PT":1}},"1913":{"GB":{"DE":1,"PT":1},"ES":{"PT":1}},"1914":{"GB":{"ES":1,"DE":1}},"1915":{"GB":{"AT":1},"DE":{"GB":3}},"1916":{"GB":{"PT":11,"CN":3,"DE":1,"DK":1,"SE":1,"FR":2},"DE":{"DK":1,"PT":1,"PL":1,"GB":7,"IE":1},"IT":{"GR":1,"PT":1},"AT":{"DE":1},"ES":{"PT":2,"GB":1},"DK":{"IL":1},"RU":{"PT":1},"CZ":{"PT":1}},"1917":{"GB":{"PT":5,"FR":2},"DE":{"GB":3,"FR":1},"ES":{"PT":1},"RU":{"IL":1},"CZ":{"PT":1}},"1918":{"GB":{"ES":1,"PT":11,"FR":4,"CN":2,"DE":2,"IE":1,"IL":1},"DE":{"ES":1,"GB":4,"FR":1,"IE":1,"SE":1,"PT":1},"FR":{"IE":1,"PT":2},"IL":{"PT":1},"IT":{"PT":2}},"1919":{"GB":{"PT":8,"CN":2,"DE":2,"FR":7,"PK":1,"CG":1,"IL":1,"IE":1},"PT":{"GB":2},"DE":{"CN":1,"GB":10,"PT":4,"DK":1,"IE":1,"AT":1,"FR":1},"FR":{"PT":1,"IE":1},"IT":{"PT":1},"ES":{"PT":3},"AM":{"PT":1}},"1920":{"GB":{"DE":2,"IN":1,"CG":1,"PT":10,"IL":2,"FR":4,"PK":1,"CN":1},"DE":{"GB":8,"FR":1,"PT":4,"CN":1},"FR":{"PT":1,"DE":1},"IE":{"GB":1},"IT":{"PT":1},"ES":{"PT":1},"DK":{"IL":1},"RU":{"IL":1,"PT":1}},"1921":{"GB":{"IL":5,"DE":6,"SE":1,"GR":1,"FR":3,"PT":12,"NG":1,"ES":1,"IN":1},"DE":{"GB":8,"AT":2,"DK":1,"IL":1,"PT":5,"HU":1,"CN":1,"ES":1,"FR":1},"FR":{"GB":1,"IE":1},"IE":{"DK":1},"IL":{"GB":1},"IT":{"GB":1},"ES":{"PT":5},"DK":{"IL":1},"RU":{"PT":1,"IL":1}},"1922":{"GB":{"PT":12,"SE":1,"GR":1,"DE":2,"NG":1,"IN":1,"FR":3,"IL":1,"CN":2,"IE":1},"PT":{"GB":1},"DE":{"FR":1,"GB":10,"SE":1,"AT":1,"CN":1,"ES":1,"IL":1,"PT":1},"FR":{"PT":2},"IE":{"GB":1},"IL":{"GB":1},"IT":{"PT":1},"NL":{"DE":1,"GB":1},"ES":{"PT":4},"DK":{"IL":1},"SE":{"AT":1},"IN":{"NG":1},"RU":{"PT":1},"AM":{"PT":1}},"1923":{"GB":{"PT":17,"IN":2,"FR":5,"GR":1,"PK":1,"IT":1,"NG":1,"DE":4,"CN":2,"IE":1,"NL":1,"IL":3},"PT":{"GB":3},"DE":{"GB":12,"PT":6,"ES":1,"FR":1,"CN":1,"IL":1},"FR":{"PT":1,"IE":1,"GB":1},"IE":{"GB":1},"IL":{"GB":1},"ES":{"PT":5},"RU":{"GR":1,"PT":1},"AM":{"PT":1}},"1924":{"GB":{"FR":4,"DE":3,"NL":1,"GR":2,"IL":1,"PK":1,"PT":10,"CG":1,"CN":1,"IN":1},"PT":{"GB":2},"DE":{"GB":5,"NL":1,"HU":1,"CN":1,"ES":1,"FR":1,"PT":7,"IL":1,"IE":1},"FR":{"CG":1},"CN":{"GB":1},"ES":{"PT":3,"GB":1},"NO":{"GB":1},"RU":{"PK":1,"PT":1,"IL":1},"RS":{"PT":1},"LS":{"IL":1}},"1925":{"GB":{"FR":4,"GR":1,"PT":13,"NL":1,"DE":3,"IL":2,"IT":1,"CG":1},"PT":{"GB":1,"IE":1},"DE":{"GB":9,"PT":4,"AT":2,"SE":1,"CN":1,"ES":1,"IL":1},"FR":{"GB":4,"PT":1},"IL":{"GB":1},"IT":{"PT":1,"FR":1},"ES":{"PT":4,"GB":3},"NO":{"GB":1},"RU":{"IL":1},"AM":{"PT":1},"RS":{"PT":1,"GB":1}},"1926":{"GB":{"IT":3,"PT":13,"NL":2,"DE":5,"IN":1,"CN":2,"IL":2,"IE":1},"PT":{"GB":2},"DE":{"IL":2,"GB":8,"SE":1,"PT":7,"DK":1,"ES":1,"FR":1},"FR":{"PT":2,"GB":2,"IT":1},"IE":{"GB":1},"IL":{"GB":2},"IT":{"PT":1,"FR":1},"ES":{"PT":3,"GB":6},"DK":{"IL":1},"RU":{"IL":2,"PT":2,"FR":1},"MD":{"RU":1},"HU":{"PT":1},"AM":{"PT":1},"RS":{"RU":1}},"1927":{"GB":{"FR":1,"NL":1,"PT":14,"CN":3,"PK":1,"IT":1,"IL":2,"DE":2},"PT":{"GB":3},"DE":{"AT":1,"GB":11,"HU":1,"CN":1,"IL":4,"ES":1,"SE":1,"PT":3,"IE":1,"FR":1},"FR":{"GB":2,"IT":1},"IE":{"GB":1},"IL":{"GB":2},"IT":{"PT":1},"CN":{"GB":1},"NL":{"DE":1},"ES":{"GB":2,"PT":2},"DK":{"IL":1},"IN":{"NG":1},"NO":{"DK":1},"RU":{"GR":1,"PK":1,"PT":3,"IL":1,"DK":1},"HU":{"PT":1,"GB":1},"AM":{"PT":1},"RS":{"PT":1,"GB":1}},"1928":{"GB":{"FR":3,"PK":1,"PT":17,"ES":1,"IT":1,"NL":1,"SE":1,"DE":2,"IL":2},"PT":{"GH":1},"DE":{"PT":4,"IL":1,"DK":2,"GB":15,"HU":1,"AT":2,"IE":1,"CN":1},"FR":{"PT":1,"GB":4,"IE":1},"IL":{"GB":2,"PT":1},"ES":{"PT":4,"GB":1},"DK":{"IL":1},"RU":{"PT":3,"IL":2,"DK":1,"GE":1},"PL":{"GB":1},"HU":{"GB":1,"DE":1},"RS":{"GB":1,"PT":1},"LB":{"DK":1}},"1929":{"GB":{"IL":2,"NO":1,"PT":7,"IT":1,"ES":1,"FR":1,"DE":1,"CN":1},"DE":{"PT":4,"DK":3,"IL":4,"AT":1,"GB":3,"CN":1,"FR":1},"FR":{"PT":1},"IL":{"IE":1},"AT":{"DE":1},"ES":{"GB":1,"PT":1},"DK":{"IL":1,"PT":1},"RU":{"PT":1},"PL":{"PT":1},"HU":{"PT":3},"RS":{"PT":2},"RO":{"PT":1}},"1930":{"GB":{"GH":1,"PT":15,"GR":1,"IL":2,"DE":7,"IT":2,"CG":1,"HU":1,"FR":3,"IN":1},"PT":{"IE":1,"GB":1},"DE":{"NL":1,"PT":5,"HU":2,"GB":8,"ES":1,"SE":1,"CN":1,"IE":1,"FR":2,"AT":1},"FR":{"PT":1,"CN":1},"IL":{"GB":2,"IE":1},"IT":{"IE":1,"FR":1,"PT":1},"NL":{"GB":1},"ES":{"PT":3,"IL":1,"GB":1},"RU":{"IL":1,"PT":1},"HU":{"PT":1,"ES":1},"AM":{"PT":1},"RS":{"PT":1,"GB":1}},"1931":{"GB":{"IL":6,"PT":9,"DE":2,"AT":1,"GH":1,"FR":3,"IT":2,"CN":1,"ES":1,"GR":1},"DE":{"GB":15,"PT":4,"ES":1,"FR":1,"AT":1,"IT":1,"HU":1,"CN":1,"IL":1,"CG":1},"FR":{"GB":1,"IE":1,"CN":1},"IL":{"GB":1,"IE":1,"PT":1},"IT":{"FR":1},"AT":{"CG":1},"NL":{"GB":1},"ES":{"GB":3,"PT":7},"DK":{"GB":1},"NO":{"DK":1},"RU":{"PT":1},"HU":{"PT":3},"RS":{"PT":1,"GB":1}},"1932":{"GB":{"CN":1,"PT":6,"AT":2,"GH":2,"IL":3,"DE":3,"FR":1,"IE":2,"DK":1,"IT":2},"PT":{"GB":4},"DE":{"GB":13,"PT":5,"IL":1,"IE":1,"FR":1},"FR":{"GB":2},"IL":{"PT":1,"IE":1,"GB":1},"IT":{"FR":2,"IE":1},"CN":{"GB":1},"NL":{"GB":1},"ES":{"PT":1,"GB":2},"DK":{"GB":1},"RU":{"NL":1,"PT":3,"GR":1},"HU":{"PT":1},"CZ":{"GB":1},"AM":{"PT":1},"RS":{"GB":1}},"1933":{"GB":{"PT":16,"NL":1,"DE":1,"CG":2,"IL":3,"IE":1,"FR":4,"IN":1,"AT":3},"PT":{"GB":3},"DE":{"AT":1,"GB":14,"CN":1,"IL":2,"PT":5,"FR":3,"IE":1,"HU":1,"CH":1,"DK":1},"FR":{"PT":1,"CN":1},"IL":{"PT":1,"GB":2},"IT":{"FR":1},"ES":{"PT":8,"GB":2},"NO":{"DK":1},"RU":{"PT":1,"FR":1},"GR":{"CN":1},"HU":{"PT":1,"DE":1},"CZ":{"GB":1},"AM":{"PT":1}},"1934":{"GB":{"PT":16,"AT":1,"CN":2,"IT":2,"FR":2,"DE":3,"ES":1,"IL":2,"IE":2,"CG":2},"PT":{"GB":5},"DE":{"AT":2,"CG":1,"IL":3,"GB":13,"ES":1,"PT":3,"FR":2},"IL":{"GB":1},"IT":{"ES":1,"FR":1},"CN":{"GB":1},"NL":{"FR":1,"GB":1},"ES":{"PT":3},"DK":{"GB":1},"NO":{"DK":1},"RU":{"PT":1},"GR":{"CN":1},"HU":{"PT":1},"CZ":{"GB":1}},"1935":{"GB":{"PT":10,"GH":1,"CN":2,"IL":4,"AT":1,"DK":1,"IE":1,"FR":2,"DE":1},"PT":{"GB":3},"DE":{"GB":6,"PT":5,"IL":1,"FR":3,"AT":2},"IL":{"PT":1},"IT":{"FR":1},"CN":{"GB":1},"NL":{"GB":1},"ES":{"PT":3,"GB":1},"RU":{"PT":2,"IL":1},"GR":{"CN":1},"HU":{"PT":2}},"1936":{"GB":{"DE":3,"PT":18,"IL":4,"IE":2,"CN":1,"NL":1,"FR":1,"AT":1,"DK":1},"PT":{"GB":2},"DE":{"GB":13,"PT":5,"IL":3,"CN":1,"FR":4,"CH":1,"UM-DQ":1,"AT":1,"IT":1},"FR":{"CG":1},"IE":{"DK":1},"IL":{"PT":2,"GB":1},"IT":{"IE":1},"NL":{"GB":1},"ES":{"PT":4},"RU":{"PT":1},"GR":{"CN":1},"PL":{"PT":1},"HU":{"PT":1,"DE":1},"RS":{"IL":1}},"1937":{"GB":{"FR":4,"PT":11,"IL":3,"CN":1,"AT":2,"DE":4,"SE":1,"IT":1,"ES":1,"IE":1},"PT":{"IE":1,"GB":3},"DE":{"AT":2,"FR":3,"PT":6,"GB":7,"NL":1,"IL":3,"CH":1,"CN":1},"IE":{"PT":1},"IL":{"GB":1,"PT":1},"IT":{"FR":1},"JP":{"CN":1},"CN":{"GB":1},"NL":{"DE":1},"ES":{"PT":5,"GB":1},"DK":{"PT":1},"NO":{"DK":1},"RU":{"GB":1,"NL":1,"PT":1},"GR":{"CN":1},"PL":{"FR":1},"HU":{"NL":1}},"1938":{"GB":{"FR":3,"PT":15,"IL":5,"IE":2,"AT":1,"DE":1},"PT":{"IE":1,"GB":1},"DE":{"AT":1,"GB":12,"FR":3,"CH":1,"PT":3,"IL":4},"IL":{"PT":1,"GB":1,"RU":1},"IT":{"FR":1,"IE":1},"JP":{"CN":1},"NL":{"DE":1},"ES":{"PT":5,"GB":1},"SE":{"GB":1},"RU":{"GB":1},"HU":{"DE":1},"CZ":{"AT":1},"RO":{"PT":1}},"1939":{"GB":{"PT":13,"CG":1,"FR":5,"IT":3,"DE":2,"NL":1,"IE":1,"IL":1,"ES":2,"CN":1},"PT":{"GB":2},"DE":{"AT":3,"IL":3,"FR":4,"GB":8,"IT":1,"CH":1,"PT":3,"IE":1},"FR":{"GB":1,"PT":3},"IL":{"GB":1,"PT":1},"IT":{"IE":1,"FR":1},"JP":{"PT":1},"NL":{"GB":1},"ES":{"PT":4,"IT":1,"GB":1},"SE":{"GB":1},"GR":{"PT":1},"HU":{"PT":2},"CZ":{"CN":1,"GB":1}},"1940":{"GB":{"PT":12,"IL":5,"DE":4,"IT":1,"DK":1,"IE":1,"FR":2},"PT":{"GB":3},"DE":{"FR":1,"CN":1,"GB":11,"IL":1,"AT":1,"HU":1,"CH":1,"PT":2},"FR":{"GB":3,"IE":1,"IL":1},"IE":{"DK":1},"IL":{"PT":1},"IT":{"GB":1,"FR":1},"CN":{"GB":1},"ES":{"PT":9,"GB":2},"NO":{"DK":1},"RU":{"GB":1},"GR":{"PT":1},"HU":{"PT":1}},"1941":{"GB":{"DE":7,"IL":3,"CG":1,"PT":11,"IE":1,"FR":3,"ES":2,"SE":1,"AT":2,"CN":2,"IT":1,"RU":1},"PT":{"GB":4},"DE":{"GB":11,"PT":4,"FR":4,"IL":2,"NL":1,"UM-DQ":1,"CH":1,"CN":1},"FR":{"PT":1,"IE":1},"IL":{"GB":1},"IT":{"IE":1},"ES":{"GB":2,"PT":3,"IE":1},"DK":{"GB":1},"NO":{"DK":1},"RU":{"PT":2},"GR":{"PT":2,"CN":1},"HU":{"PT":2,"ES":1}},"1942":{"GB":{"PT":19,"IT":2,"FR":4,"NO":1,"CG":1,"AT":2,"ES":1,"SE":1,"IE":1},"PT":{"GB":4,"GH":1},"DE":{"PT":9,"IL":3,"GB":9,"FR":3,"CH":1,"HU":1},"FR":{"GB":3,"CG":1},"IL":{"PT":1},"IT":{"FR":1,"GB":1,"PT":1},"CN":{"GB":1},"ES":{"PT":6,"GB":2,"IT":1,"IE":1},"NO":{"DK":1},"RU":{"PT":2},"GR":{"PT":2},"UA":{"GB":1},"HU":{"PT":3,"ES":1,"AT":1}},"1943":{"GB":{"IL":4,"PT":20,"IT":2,"FR":1,"CN":2,"DE":1,"IE":1},"PT":{"GB":3},"DE":{"AT":1,"GB":13,"FR":1,"PT":7,"IL":2,"NL":1,"ID":1,"UM-DQ":1,"DK":1,"HU":1},"FR":{"IE":1},"IL":{"PT":1},"IT":{"PT":1,"FR":1},"NL":{"GB":2},"ES":{"IE":1,"PT":5},"DK":{"GB":1},"RU":{"PT":2,"GB":1},"GR":{"PT":1},"HU":{"GB":1,"PT":3,"DE":1},"TR":{"CG":1}},"1944":{"GB":{"DE":4,"IE":1,"PT":19,"IT":2,"ES":1,"CN":1,"CG":2,"AT":1,"FR":3,"IL":1},"PT":{"GB":2,"DE":1},"DE":{"GB":10,"PT":6,"AT":1,"UM-DQ":1,"KR":1,"CN":1,"IL":1,"SE":2,"IE":1,"FR":1},"FR":{"PT":1,"GB":1},"IL":{"GB":2,"PT":1,"IN":1},"IT":{"FR":1},"CN":{"GB":1},"NL":{"GB":1},"ES":{"PT":5},"RU":{"PL":1},"GR":{"PT":1},"PL":{"GB":1},"HU":{"PT":3,"IL":1,"GB":1},"TR":{"CG":1,"AT":1},"SI":{"PT":1}},"1945":{"GB":{"CG":2,"PT":11,"DE":1,"FR":2,"ES":1,"ZA":1,"CN":1,"IL":1,"UM-DQ":1,"NL":1},"PT":{"GB":2},"DE":{"GB":10,"CN":1,"PT":3,"KR":1,"CG":1,"IL":1},"IL":{"PT":1},"IT":{"FR":2},"CN":{"GB":1},"NL":{"GB":1},"ES":{"GB":2,"PT":5,"IE":1},"NO":{"DK":1},"RU":{"PT":2,"GB":1,"PL":1},"GR":{"PT":1},"HU":{"GB":1,"ES":1,"PT":1}},"1946":{"GB":{"PT":11,"PL":1,"IT":1,"FR":2,"ES":1,"DE":4,"IL":1},"PT":{"DE":1,"GB":1},"DE":{"PT":7,"IL":4,"GB":10,"FR":2,"NL":2,"CH":1,"ES":1,"UM-DQ":1},"FR":{"GB":1,"IL":1},"IL":{"PT":1,"GB":2},"IT":{"PT":1,"FR":2},"NL":{"GB":1},"ES":{"PT":3,"IT":1,"GB":1},"GR":{"PT":1},"HU":{"NL":1,"GB":1,"PT":3,"AT":1},"RS":{"GB":1},"RO":{"PT":1}},"1947":{"GB":{"PT":16,"IT":1,"AT":3,"FR":4,"CN":2,"DE":2,"GR":1,"IL":1},"PT":{"GB":2},"DE":{"IL":2,"GB":11,"PT":3,"NL":2,"FR":2,"AT":1},"FR":{"GB":1,"CN":1},"IL":{"GB":1},"IT":{"PT":1},"ES":{"FR":1,"GB":2,"PT":1,"IE":1},"DK":{"GB":1,"PT":1},"RU":{"GB":1,"PL":1,"PT":1},"GR":{"PT":1},"FI":{"GB":1},"HU":{"AT":1,"PT":2},"RS":{"GB":2}},"1948":{"GB":{"PT":9,"DE":4,"FR":6,"CN":4,"AT":2,"SE":1,"IL":3,"PL":1,"IT":1},"PT":{"GB":3,"DE":1},"DE":{"GB":9,"IL":3,"PT":2,"FR":1,"HU":1},"FR":{"RU":1},"IT":{"PT":1,"FR":1},"CN":{"JP":1,"GB":1},"ES":{"PT":11,"IT":1},"DK":{"GB":1},"RU":{"PT":2},"FI":{"GB":1},"HU":{"AT":1},"CZ":{"AT":1},"RO":{"PT":1}},"1949":{"GB":{"PT":9,"IL":2,"DE":4,"FR":3,"IT":1,"PL":1,"NL":1,"AT":1},"PT":{"GB":1},"DE":{"GB":16,"PT":2,"FR":2,"CH":1,"AT":2,"ES":1,"NL":1},"FR":{"GB":1},"IL":{"PT":2,"GB":2},"IT":{"FR":1},"NL":{"GB":1},"ES":{"GB":1,"PT":3},"SE":{"GB":1},"RU":{"GB":1,"DE":1,"PL":1,"IL":2},"FI":{"GB":1},"HU":{"IL":1,"GB":1,"PT":2},"CZ":{"AT":1},"RS":{"GB":1}},"1950":{"GB":{"IL":3,"FR":3,"ES":1,"IE":2,"PT":6,"DE":2,"CN":1,"IT":4,"PL":1,"NL":1},"PT":{"GB":2,"DE":1},"DE":{"GB":10,"IL":1,"PT":3,"ES":1,"NL":2,"FR":1,"DK":1},"FR":{"GB":1},"IL":{"GB":1,"PT":1},"IT":{"FR":1,"IE":1},"CN":{"GB":1},"ES":{"PT":3},"RU":{"PL":1,"PT":1,"IL":1},"FI":{"GB":1},"HU":{"GB":1},"CZ":{"GB":1},"RS":{"GB":1}},"1951":{"GB":{"PT":11,"DE":2,"ES":2,"IT":1,"IE":1,"FR":5,"CG":3,"IL":3,"SE":1},"PT":{"DE":1,"GB":3,"AT":1},"DE":{"GB":9,"PT":1,"GR":1,"CH":1,"IL":1,"NL":2,"DK":1,"UM-DQ":1},"FR":{"GB":1,"DE":1},"IT":{"PT":1,"GB":1,"FR":2,"IE":1},"ES":{"PT":6,"IT":2},"RU":{"GB":1,"PT":2},"GR":{"PT":1,"FR":1},"HU":{"PT":1},"AM":{"FR":1},"RS":{"GB":1}},"1952":{"GB":{"PT":11,"DE":6,"ES":3,"FR":5,"CN":2,"IL":1,"NL":1,"CG":1,"IT":2},"PT":{"NL":1,"GB":1},"DE":{"GB":9,"PT":4,"CG":1,"NL":2,"IL":2,"GR":1},"FR":{"PT":4,"NL":1},"IE":{"PT":1},"IL":{"GB":3},"IT":{"PT":2,"GB":1},"CN":{"JP":1},"NL":{"PT":1},"ES":{"PT":11,"IT":1,"IE":1,"GB":1},"DK":{"GB":1},"NO":{"DK":1},"RU":{"PT":2},"GR":{"PT":2},"FI":{"GB":1},"HU":{"PT":2,"GB":1},"SI":{"PT":1}},"1953":{"GB":{"DE":5,"FR":4,"PT":9,"IT":3,"IL":1,"AT":1,"ES":1,"NL":3,"IE":2},"PT":{"GB":2,"NL":1},"DE":{"SE":1,"PT":6,"AT":2,"GB":12,"CH":1,"IL":2,"DK":1,"CN":1,"NL":2,"UM-DQ":1,"CG":1},"FR":{"IL":1,"GB":1},"IT":{"FR":1,"PT":1},"AT":{"PT":1},"ES":{"PT":5,"GB":2},"RU":{"PT":2,"NL":1},"GR":{"CN":1},"PL":{"FR":1},"HU":{"IL":1,"GB":1,"PT":2,"GR":1},"CZ":{"AT":1},"RS":{"GB":1},"RO":{"PT":1}},"1954":{"GB":{"SE":1,"ES":2,"PT":9,"DE":6,"FR":2,"PL":1,"NL":1,"IL":1,"AT":2,"GR":1},"PT":{"GB":2},"DE":{"IE":1,"IL":3,"CH":1,"GB":11,"NL":1,"UM-DQ":1,"DK":1,"ES":1,"PT":3,"CN":1},"FR":{"PT":1,"GB":1},"IL":{"PT":1},"IT":{"PT":3},"AT":{"PT":1},"ES":{"GB":1,"PT":4},"RU":{"PT":2,"PL":1},"FI":{"GB":1},"PL":{"PT":1},"HU":{"DE":1,"PT":1,"IL":1,"IE":1},"CZ":{"AT":1}},"1955":{"GB":{"ES":1,"PT":7,"IT":1,"FR":4,"SE":1,"DE":4,"CG":1,"IE":1,"IL":1,"CN":1},"PT":{"GB":3},"DE":{"NL":4,"GB":13,"PT":2,"FR":1,"CH":1,"IL":1,"CG":1},"FR":{"GB":3,"PT":2,"CN":1,"PL":1},"IL":{"PT":1},"IT":{"FR":1,"PT":1,"GB":1},"ES":{"PT":6,"IT":1},"RU":{"GB":2,"PT":2},"GR":{"PT":1},"HU":{"IL":1},"BJ":{"FR":1}},"1956":{"GB":{"NE":1,"DE":3,"FR":5,"CN":4,"GR":1,"PT":8,"IL":1,"ES":2,"NL":1,"AT":1},"PT":{"GB":2},"DE":{"GB":9,"FR":1,"PT":6,"IL":1,"CG":1},"FR":{"PT":1,"GB":1,"DE":1},"IT":{"PT":2,"ES":1},"JP":{"TN":1},"ES":{"PT":6,"GB":2,"FR":1,"JP":1},"DK":{"GB":1,"PT":1},"NO":{"DK":1},"RU":{"PT":1,"GB":3,"PL":1},"GR":{"PT":1},"HU":{"PT":1},"RS":{"GB":1}},"1957":{"GB":{"NL":1,"SE":1,"FR":5,"DE":2,"PT":4,"ES":2,"IT":1,"DK":1,"IE":1,"JP":1},"PT":{"GB":1,"NL":1},"DE":{"GB":9,"GR":2,"SE":3,"PT":2,"IT":1,"NL":1,"IL":2,"DK":1},"FR":{"PT":3,"MU":1},"IL":{"CN":1,"GB":1},"IT":{"GB":4},"CN":{"GB":1},"ES":{"PT":4,"GB":1},"SE":{"IT":1},"RU":{"NL":1},"GR":{"PT":1}},"1958":{"GB":{"DE":3,"ES":1,"PT":13,"SE":3,"FR":2,"CN":1,"IT":3,"DK":1,"IE":1},"PT":{"GB":1,"NL":1,"DE":1},"DE":{"SE":2,"PT":1,"GB":12,"IL":3,"CH":1,"NL":1,"UM-DQ":1,"FR":1},"FR":{"PL":1},"IL":{"GB":3},"IT":{"PT":2},"CN":{"GB":1},"NL":{"CN":1},"ES":{"PT":2,"GB":1},"SE":{"PT":1},"RU":{"SE":1,"GB":2},"GR":{"PT":1},"HU":{"AT":1},"CZ":{"AT":1},"RS":{"RU":1},"LR":{"CN":1}},"1959":{"GB":{"FR":5,"DE":3,"GR":1,"PT":10,"DK":1,"IE":2,"CG":1,"KR":1,"SE":1,"CN":1},"PT":{"AT":1,"GB":1,"NL":1,"DE":1},"DE":{"GB":19,"IL":4,"PT":3,"SA":1,"CH":1,"NL":1},"FR":{"DE":1},"IE":{"GB":1},"IL":{"GB":1},"IT":{"PT":1,"ES":1,"FR":1},"ES":{"PT":2,"GB":2,"IE":1},"SE":{"GB":1},"IN":{"FR":1},"NO":{"DK":1},"RU":{"PL":1},"GR":{"PT":1},"FI":{"UM-DQ":1},"HU":{"PT":1},"CZ":{"AT":1},"IR":{"GB":1},"IS":{"SE":1},"LS":{"PT":1}},"1960":{"GB":{"PT":13,"GR":3,"DK":1,"DE":4,"IT":3,"CG":2,"AT":3,"SE":1,"FR":1},"PT":{"SE":1},"DE":{"GB":16,"PT":5,"IL":4,"AT":2,"SE":1,"FR":1,"GR":1,"UM-DQ":1,"DK":1,"NL":1,"CN":1},"FR":{"GB":1,"DK":1},"IL":{"GB":4},"IT":{"PT":3,"FR":1},"ES":{"IE":2,"PT":8},"SE":{"GB":1},"NO":{"PT":1,"DK":1},"RU":{"PT":1},"GR":{"PT":2},"PL":{"GB":1,"FR":1},"HU":{"IL":1,"PT":1},"CZ":{"AT":1},"AM":{"FR":1},"RS":{"GB":1},"IR":{"GB":1}},"1961":{"GB":{"DK":1,"ES":1,"FR":1,"PT":9,"CG":1,"DE":2,"IL":1,"IT":3,"AT":1,"PL":1,"GR":1,"CN":1},"PT":{"GB":1,"AT":1},"DE":{"PT":4,"FR":2,"HU":1,"SE":1,"GB":6,"IL":3,"CH":1,"IT":1},"FR":{"PT":1,"CN":1},"IL":{"PT":1},"IT":{"GB":1,"PT":2,"FR":1},"AT":{"DE":1},"ES":{"PT":5,"IT":4,"IE":1},"NO":{"DK":1},"HU":{"IL":1},"CZ":{"AT":1}},"1962":{"GB":{"DE":4,"CN":3,"PT":10,"AT":3,"MU":1,"NO":1,"CG":1,"IT":2,"ES":2,"FR":3,"IL":1},"PT":{"GB":3,"AT":1,"NL":1,"RU":1},"DE":{"PT":4,"GB":10,"IL":1,"SE":2,"NL":1,"UM-DQ":1},"FR":{"PT":1,"GB":2,"MU":1,"PL":1},"IL":{"GB":2,"PT":1},"IT":{"GB":1,"PT":2},"NL":{"PT":1},"ES":{"GB":1,"IE":1,"PT":3,"IT":1},"NO":{"DK":1},"RU":{"CN":1,"GB":1},"FI":{"PT":1},"HU":{"GB":1},"RS":{"GB":1}},"1963":{"GB":{"PT":8,"CN":1,"DE":2,"IT":1,"IE":1,"AT":1,"CG":2,"FR":4,"SE":1,"NO":1},"PT":{"GB":1,"RU":1},"DE":{"GR":1,"GB":7,"PT":2,"FR":1,"IL":2},"FR":{"PT":1},"IL":{"NL":1},"IT":{"DE":1,"GB":3,"PT":1},"JP":{"PT":1},"AT":{"CG":1},"ES":{"IT":1,"PT":13,"ES":1},"SE":{"PT":1},"RU":{"DE":1,"PL":1},"GR":{"CN":1},"PL":{"CZ":1},"HU":{"IL":1},"AM":{"FR":1}},"1964":{"GB":{"IT":4,"FR":3,"CG":1,"PT":5,"AT":1,"DE":1,"IL":2,"CN":2,"ES":1,"SN":1},"PT":{"GB":2},"DE":{"CN":2,"GB":4,"SE":2,"IL":1,"PT":3,"FR":3},"FR":{"PT":4,"ES":1,"GB":1,"DE":1,"IN":1},"IL":{"FR":1},"IT":{"GB":2},"ES":{"PT":4,"IT":1,"DK":1},"IN":{"FR":1},"RU":{"PT":2,"DE":1},"GR":{"GB":1,"CN":1},"IR":{"GB":1}},"1965":{"GB":{"JP":1,"FR":7,"SE":1,"PT":10,"DE":2,"CG":2,"IT":4,"AT":1,"IE":1,"PL":1,"IL":2,"CN":1},"PT":{"SE":1,"GB":3},"DE":{"GB":13,"FR":2,"PT":6,"IL":2,"GR":1,"NL":1},"FR":{"JP":1,"PT":4,"DE":2,"GB":3,"ES":1},"IL":{"GB":2,"RU":1},"IT":{"GB":1,"PT":2},"ES":{"PT":5,"IT":2},"NO":{"DK":1},"RU":{"GB":3,"PT":4},"GR":{"PT":1,"CN":1,"RO":1},"CZ":{"GR":1},"RS":{"GB":1,"FR":1}},"1966":{"GB":{"PT":9,"ZA":1,"FR":5,"DE":1,"MU":1,"CN":1},"PT":{"GB":4},"DE":{"PT":3,"FR":3,"CH":1,"GB":5,"AT":2,"IT":1},"FR":{"PT":3,"MU":1,"GB":1},"IE":{"GB":1},"IL":{"GB":1},"IT":{"PT":3,"FR":2},"JP":{"TN":1},"CN":{"GB":1},"ES":{"ES":1,"PT":8,"FR":1,"IT":1},"DK":{"GB":1},"RU":{"PT":2,"FR":1},"HU":{"IL":1,"GB":1}},"1967":{"GB":{"PT":7,"PL":1,"CH":1,"FR":3,"GR":1,"IL":1,"CN":2,"JP":1},"PT":{"NL":1,"GB":3},"DE":{"PT":4,"GB":13,"CN":2,"SE":1,"IE":1,"IT":1},"FR":{"GB":1},"IE":{"GB":1},"IL":{"GB":1},"IT":{"NE":1},"ES":{"PT":13,"IT":1,"GB":1},"RU":{"GB":2},"PL":{"CZ":1,"GB":1},"AM":{"CN":1},"RS":{"GB":1},"IR":{"PT":1}},"1968":{"GB":{"SE":1,"PT":9,"CG":2,"IT":3,"AT":1,"CN":1,"FR":1},"PT":{"GB":1},"DE":{"GB":7,"PT":3,"IE":1,"FR":1,"SE":2,"NL":1},"FR":{"PT":5},"IL":{"GB":1},"IT":{"GB":2},"JP":{"CN":1},"ES":{"IT":1,"GB":1,"FR":1,"PT":2},"DK":{"GB":1},"SE":{"PT":1},"NO":{"GB":1},"RU":{"PT":1},"PL":{"GB":1},"AM":{"CN":1}},"1969":{"GB":{"DE":1,"PT":7,"IT":3,"IR":1,"CN":2},"PT":{"GB":3},"DE":{"PT":5,"NL":3,"GB":15,"IL":1,"FR":1,"IE":1},"FR":{"GB":1,"PT":3,"DK":1,"MU":1},"IT":{"PT":1,"GB":5},"NL":{"PT":1,"FR":1},"ES":{"IT":1,"FR":1,"PT":3},"RU":{"GB":1,"PT":1},"RS":{"PT":1}},"1970":{"GB":{"PT":10,"IT":3,"ES":1,"SE":2,"FR":2,"NL":1,"DE":1,"LT":1},"PT":{"DE":1,"GB":3,"CG":1},"DE":{"GB":12,"CG":1,"SE":1,"PT":1},"FR":{"DE":1,"PT":2},"IT":{"PT":2,"GB":2,"IE":1},"JP":{"GB":1},"ES":{"PT":12,"IT":2,"CN":1},"DK":{"GB":1},"IN":{"FR":1},"NO":{"GH":1},"RU":{"PT":1},"HU":{"IL":1},"RS":{"GB":1}},"1971":{"GB":{"PT":13,"IL":4,"ES":1,"IT":3,"SE":1,"FR":1,"CN":1,"NL":1},"PT":{"GB":3},"DE":{"GB":7,"PT":4,"SE":1},"FR":{"AT":1,"PT":1},"IL":{"PT":1},"IT":{"GB":1},"ES":{"GB":1,"PT":2,"IT":1},"RU":{"GB":1},"ZA":{"UM-DQ":1}},"1972":{"GB":{"PT":5,"IT":2,"DE":4,"IL":2,"CN":2},"PT":{"GB":4},"DE":{"GB":7,"RU":1,"FR":2,"SE":1,"PT":4,"NL":1},"FR":{"PT":1,"AT":1},"IL":{"RU":1,"GB":1},"IT":{"GB":2,"PT":2},"ES":{"GB":1,"PT":9,"CN":1,"IT":2,"FR":2},"RU":{"FI":1},"HU":{"GB":1},"AM":{"CN":1}},"1973":{"GB":{"PT":8,"ES":1,"FR":5,"IN":1,"IT":2,"DE":1},"PT":{"SE":1,"GB":3},"DE":{"GB":7,"AT":1},"FR":{"GR":1,"PT":1,"DE":1},"IT":{"GB":2},"CN":{"GB":2},"NL":{"CN":1},"ES":{"PT":5,"CN":1,"GB":1,"FR":1},"RU":{"PT":1},"CZ":{"GB":1},"IR":{"GB":1}},"1974":{"GB":{"IT":4,"FR":2,"PT":8,"ES":1,"DE":2,"AT":1,"SE":1,"CG":1},"PT":{"GB":4},"DE":{"GB":9,"PT":4,"FR":1,"IL":1},"FR":{"PT":4,"GR":1,"IN":1},"IL":{"GB":1},"IT":{"GB":1},"CN":{"GB":1},"ES":{"GB":2,"PT":4,"IT":1},"SE":{"GB":1},"RU":{"FR":1},"AM":{"FR":1}},"1975":{"GB":{"IE":1,"IT":1,"PT":4,"DE":1,"FR":4,"IL":2,"CG":1,"ES":1},"DE":{"PT":2,"RU":1,"GB":3,"IL":1,"CN":1,"FR":1,"CH":1},"FR":{"GR":1,"GB":1},"ES":{"IL":1,"PT":7},"RU":{"PT":1},"AM":{"FR":1},"RS":{"FR":1}},"1976":{"GB":{"DE":1,"FR":2,"PT":7,"SE":2,"IE":1,"AT":1,"IT":2,"CN":1,"CG":2},"PT":{"GB":3},"DE":{"GB":11,"PT":2,"SE":1,"FR":1,"IE":1,"CN":1},"FR":{"PT":1},"IT":{"GB":2},"JP":{"GB":1},"CN":{"JP":2,"PT":1},"ES":{"PT":6,"DK":1,"NG":1},"HU":{"IL":1},"ZA":{"UM-DQ":1}},"1977":{"GB":{"IL":1,"PT":4,"CH":1,"NL":1},"PT":{"GB":2},"DE":{"GB":9,"AT":1,"PT":2,"IL":2},"FR":{"IN":1},"IT":{"IN":1,"GB":1,"FR":1},"NL":{"PT":1},"ES":{"PT":6,"IT":1},"RU":{"GB":1},"RS":{"PT":1}},"1978":{"GB":{"FR":4,"CN":1,"GR":1,"CG":1,"PT":5,"AT":1,"IT":1},"PT":{"CG":1,"GB":4},"DE":{"GB":9,"PT":1,"CN":1,"CG":1,"SE":2},"FR":{"GB":1},"IT":{"PT":1},"JP":{"CN":1},"ES":{"PT":3,"IL":2,"GB":2},"DK":{"GB":1},"CH":{"IT":1},"HU":{"AT":1,"GB":1},"IR":{"GB":1},"LV":{"PT":1}},"1979":{"GB":{"DK":2,"FR":3,"CH":1,"IT":3,"PT":5,"DE":1,"CG":1,"IL":1},"PT":{"GB":3},"DE":{"GB":4,"PT":4,"RU":1,"FR":1},"FR":{"PT":3,"PK":1},"IL":{"GB":1},"IT":{"PT":1},"CN":{"JP":1,"GB":1},"ES":{"CN":1,"GB":1,"PT":1},"DK":{"PT":1},"RU":{"PT":1,"CZ":1},"PL":{"FR":1},"HU":{"AT":1,"PT":1}},"1980":{"GB":{"PK":1,"PT":6,"CG":1,"IL":1,"IT":2,"DE":2},"PT":{"IE":1,"GB":1},"DE":{"GB":3,"PT":3,"IL":1,"GR":1},"FR":{"GB":1,"PT":1,"PK":1},"IL":{"GB":1},"IT":{"PT":1},"ES":{"PT":5,"GB":2},"DK":{"GB":1},"GR":{"GB":1},"PL":{"GB":1}},"1981":{"GB":{"IL":1,"FR":1,"PT":6,"NO":1,"KR":1,"NL":1},"PT":{"GB":2,"FR":1,"DE":1},"DE":{"GB":7,"PT":2},"IL":{"GB":1},"IT":{"PT":1,"GB":1},"ES":{"IL":1,"PT":1,"FR":1},"HU":{"PT":1},"AM":{"CN":1}},"1982":{"GB":{"KR":1,"PT":8,"DE":1,"SE":2,"AT":1},"PT":{"GB":3,"DE":1},"DE":{"PT":1,"GB":3,"ES":1},"FR":{"PT":1},"IT":{"PT":1},"CN":{"DE":1,"GB":1},"NL":{"PT":1},"ES":{"PT":3,"CN":1,"GB":2,"FR":1},"GR":{"GB":1},"HU":{"PT":2}},"1983":{"GB":{"PT":6,"ES":1,"IL":3,"DE":3,"FR":3,"AT":1,"PL":1},"PT":{"IE":1,"GB":1},"DE":{"AT":1,"IE":1,"IL":1,"PT":1,"GB":1},"FR":{"PT":1},"IT":{"PT":1,"GB":1},"JP":{"IL":1},"ES":{"AT":1,"PT":3,"GB":1,"IL":1},"SE":{"GB":1},"RU":{"GB":1},"CH":{"IT":1},"HU":{"GB":1}},"1984":{"GB":{"CN":2,"MU":1,"PT":4,"IL":2,"CG":1,"KR":1,"FR":1,"DE":2,"JP":1,"AT":1},"PT":{"GB":2,"DE":1},"DE":{"CN":2,"AT":1,"PT":1,"GB":4,"ES":1},"FR":{"PT":1},"IL":{"GB":1,"RU":1},"ES":{"IT":1,"PT":3,"CN":1},"RU":{"GR":1,"PT":1},"CZ":{"DE":1}},"1985":{"GB":{"DE":2,"CG":1,"CN":1,"FR":3,"PT":2,"AT":1},"PT":{"GB":2,"IL":1},"DE":{"PT":3,"GB":7,"SE":1},"FR":{"GB":1},"ES":{"PT":1},"RU":{"PT":1,"AZ":1},"GR":{"SE":1,"GB":1},"HU":{"GB":1},"BJ":{"CG":1},"SA":{"IR":1}},"1986":{"GB":{"ES":3,"PT":9,"CN":2,"DE":1,"PL":1},"PT":{"GB":1},"DE":{"GB":3},"IL":{"GB":1},"JP":{"GB":1},"CN":{"PT":1},"NL":{"CN":1},"ES":{"IT":1,"PT":2,"GB":1,"DK":1},"HU":{"IL":1},"IR":{"GB":1}},"1987":{"GB":{"DE":1,"PT":5,"FR":1,"IL":2,"AT":1},"PT":{"DE":1,"IE":1,"GB":3},"DE":{"AT":1,"GB":1},"IT":{"GB":1},"JP":{"IL":1},"ES":{"JP":1,"PT":3},"RU":{"GB":1},"GR":{"GB":1}},"1988":{"GB":{"PT":8,"DE":1,"AT":2},"PT":{"DE":1,"GB":2},"DE":{"IL":1,"NL":1,"PT":1,"GB":5,"CG":1},"FR":{"IL":1},"CN":{"GB":1},"ES":{"PT":3,"GB":2},"DK":{"GB":1},"HU":{"PT":1}},"1989":{"GB":{"ES":1,"PT":6,"AT":2,"CN":1,"PL":1,"IT":1,"DK":1},"PT":{"SE":1,"GB":1},"DE":{"GB":7,"PT":2,"ES":1},"FR":{"PT":1},"ES":{"PT":4,"DK":1},"RU":{"PT":1}},"1990":{"GB":{"IT":1,"IL":3,"PT":3,"DE":4,"JP":1,"DK":1,"SE":1,"ES":1,"AT":1,"IE":1},"PT":{"GB":1},"DE":{"GB":4,"PT":1},"IT":{"GB":1,"PT":1},"JP":{"IL":1},"ES":{"GB":4,"PT":1},"FI":{"SE":1},"PL":{"IL":1},"HU":{"GB":1,"PT":1}},"1991":{"GB":{"PK":1,"PT":5,"IL":2,"FR":1,"DK":1,"IN":1,"CN":4,"DE":1},"DE":{"GB":1},"ES":{"PT":3,"GB":1},"DK":{"GB":1},"HU":{"IL":1},"IR":{"PT":1}},"1992":{"GB":{"DE":2,"PT":3,"KR":1,"AT":1,"NL":1,"IT":1},"DE":{"GB":7,"SE":1,"PT":1},"IL":{"GB":1},"IT":{"GB":1},"ES":{"GB":3,"PT":2},"DK":{"IL":1},"RU":{"CN":1},"HU":{"GB":1}},"1993":{"GB":{"GR":1,"IL":1,"PT":2,"DE":1},"PT":{"GB":1},"DE":{"IT":1,"PT":1,"GB":1},"FR":{"GB":1},"IL":{"GB":1},"IT":{"GB":1},"ES":{"GB":3,"PT":4,"IN":1},"PL":{"IL":1},"ZA":{"PT":1}},"1994":{"GB":{"PT":6,"IT":2,"ES":1,"DE":1,"CN":1,"IL":1},"PT":{"GB":1,"NL":1,"GR":1},"DE":{"GB":3,"PT":1},"JP":{"FR":1},"ES":{"JP":1,"PT":4},"RU":{"GB":1},"LB":{"DZ":1}},"1995":{"DE":{"PT":1},"ES":{"GB":2,"PT":4},"PL":{"PT":1}},"1996":{"GB":{"PT":2,"SE":1,"UM-DQ":1},"DE":{"GB":3},"ES":{"GB":2,"PT":3},"RU":{"PK":1},"PL":{"DE":1,"PT":1},"HU":{"GH":1},"IR":{"PT":1}},"1997":{"GB":{"IL":2,"SE":2,"PT":1,"IT":2},"DE":{"GB":1,"PT":1},"IT":{"PT":1},"ES":{"PT":1,"GB":1}},"1998":{"GB":{"PT":5,"SE":1,"CN":1,"DE":1,"JP":1},"PT":{"GB":1},"DE":{"GB":1,"PT":2},"FR":{"PT":1,"GB":1},"ES":{"PT":2},"SE":{"GB":1},"HU":{"GB":1},"RS":{"PT":1}},"1999":{"GB":{"FR":1,"SE":1,"PT":1},"PT":{"GB":1},"DE":{"PT":2,"GB":1},"ES":{"PT":1,"FR":1,"GB":2},"DK":{"DE":1},"SE":{"GB":1},"HU":{"PT":1},"IR":{"PT":1}},"2000":{"GB":{"PT":1,"DE":1,"FR":1},"PT":{"GB":1},"DE":{"GB":1},"IT":{"GB":1},"ES":{"PT":5,"GB":1},"RU":{"CN":1},"ZA":{"NL":1}},"2001":{"GB":{"DK":1,"CN":1,"DE":1,"IL":1,"AT":1},"DE":{"PT":1,"GB":3},"LS":{"GB":1}},"2002":{"GB":{"CN":3,"PT":2},"DE":{"GB":1},"FR":{"ES":1},"ES":{"PT":2},"RU":{"GB":1}},"2003":{"GB":{"CN":1,"PT":4,"DK":1,"PL":2},"FR":{"PT":1},"ES":{"PT":1}},"2004":{"GB":{"PT":2,"SE":1,"FR":2,"CG":1,"CN":1},"PT":{"NL":1,"GB":1},"DE":{"GB":2},"ES":{"GB":2,"PT":3}},"2005":{"GB":{"PT":4,"IT":1,"NO":1,"CN":1,"IL":1},"PT":{"GB":2},"ES":{"PT":4}},"2006":{"GB":{"PT":3,"CN":2,"IL":1,"ZA":1,"ES":1},"PT":{"NL":1},"DE":{"GB":3},"ES":{"PT":2,"CN":1},"IN":{"GB":2},"CZ":{"ES":1}},"2007":{"GB":{"UM-DQ":1,"PT":6,"AT":1,"CN":1},"PT":{"NL":1,"IE":1},"DE":{"GB":3,"PT":2},"ES":{"GB":1},"DK":{"IL":1},"FI":{"SE":1},"HU":{"PT":1},"CZ":{"PT":1}},"2008":{"GB":{"PT":2,"AT":1,"CN":2},"DE":{"PT":1,"GB":1},"FR":{"ES":1},"ES":{"GB":1,"PT":1}},"2009":{"GB":{"ES":1,"CN":1,"NL":1,"PT":1,"SE":1},"DE":{"PT":1},"JP":{"PT":1},"ES":{"DE":1,"PT":2},"PL":{"GB":1},"HU":{"PT":1},"LS":{"GB":1}},"2010":{"GB":{"CN":2,"IL":1},"PT":{"GB":1},"DE":{"PT":1,"GB":1,"AT":1},"FR":{"PT":1},"IL":{"GB":1},"ES":{"PT":1},"DK":{"PT":1},"PL":{"GB":1}},"2011":{"GB":{"IL":2,"PT":2,"SE":1,"CN":2,"KR":1,"JP":1,"AT":1},"PT":{"NL":1,"GR":1},"DE":{"GB":1},"IT":{"GB":1},"ES":{"GB":1,"PT":1},"RU":{"PT":1},"PL":{"GB":1},"BF":{"EG":1}},"2012":{"GB":{"CN":2,"PT":4,"IT":1,"DK":1,"AZ":1,"ES":1},"DE":{"GB":1,"AT":1},"IT":{"PT":1},"ES":{"CN":1,"GB":2,"PT":2},"SE":{"PT":1},"DZ":{"GB":1},"BF":{"EG":1}},"2013":{"GB":{"CN":2,"PT":2,"NO":1},"PT":{"GB":1},"ES":{"PT":2},"RU":{"PT":1}},"2014":{"GB":{"IN":1,"CN":1,"PT":3},"DE":{"GB":1},"FR":{"GB":1},"IL":{"CG":1},"ES":{"GB":1,"PT":1},"PL":{"GB":1},"CZ":{"PL":1}},"2015":{"GB":{"CN":2,"PT":1,"SE":1},"CN":{"GB":1},"NL":{"CN":1},"CZ":{"PL":1},"BJ":{"GB":1}},"2016":{"GB":{"IL":1,"CN":1,"IN":1,"PL":1},"FR":{"UM-DQ":1,"GB":1},"NL":{"CN":1},"ES":{"PT":4,"DE":1}},"2017":{"GB":{"DE":1,"PT":2,"CG":1,"CN":1,"IN":1,"PL":1},"ES":{"RO":1,"PT":5}}}`;
	var yearData = JSON.parse(yearDataJSON);

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
				newPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
				// console.log(originCode, boundsOrigin, destinationCode, boundsDest);
				// if (destinationCoords.cx.animVal.value - originCoords.cx.animVal.value > 0) {
				// 	newPath.setAttribute('id', 'practiceline2east');
				// 	newPath.setAttribute('stroke-width', weight);
				// 	newPath.setAttribute('d', `M ${originCoords.cx.animVal.value},${originCoords.cy.animVal.value+0.5} L ${destinationCoords.cx.animVal.value},${destinationCoords.cy.animVal.value+0.5}`);
				// }
				// else {
				// 	newPath.setAttribute('id', 'practiceline2west');
				// 	newPath.setAttribute('stroke-width', weight);
				// 	newPath.setAttribute('d', `M ${originCoords.cx.animVal.value},${originCoords.cy.animVal.value-0.5} L ${destinationCoords.cx.animVal.value},${destinationCoords.cy.animVal.value-0.5}`);
				// }

				if (destinationCode == 'GB') {
					newPath.setAttribute('class', 'influx-line');
				} else if (originCode == 'GB') {
					newPath.setAttribute('class', 'outflux-line');
				} else {
					newPath.setAttribute('class', 'peripheral-line');
				}
				const id = `${year}_${i}_${j}`;
				newPath.setAttribute('id', id);
				newPath.setAttribute('stroke-width', weight);
				newPath.setAttribute('d', `M ${originCoords.cx.animVal.value},${originCoords.cy.animVal.value+0.5} L ${destinationCoords.cx.animVal.value},${destinationCoords.cy.animVal.value+0.5}`);
				
				document.getElementById('g4105').appendChild(newPath);
				setTimeout(() => {
					var oldPath = document.getElementById(id);
					oldPath.parentNode.removeChild(oldPath);
				}, 2100)
			}
		}
		await sleep(100);

	}

	// // Proof that adding an svg late will still allow it to animate
	// setTimeout(() => {
	// 	for (var i = 0; i < 20; i++) {
	// 		newPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	// 		newPath.setAttribute('id', 'practiceline2');
	// 		newPath.setAttribute('stroke-width', weight);
	// 		newPath.setAttribute('d', `M ${Math.random() * 1200},${Math.random() * 775} L ${Math.random() * 1200},${Math.random() * 775}`);
	// 		document.getElementById('g4105').appendChild(newPath);
	// 	}
	// }, 1000);

	// var countryIds = Object.entries(document.getElementById('g4105').childNodes).filter(childNode => childNode[1].tagName === "path" && childNode[1].id).map(childNode => childNode[1].id);
	// console.log(countryIds)
	// for (i = 0; i < 70; i++) {
	// 	var originCode = countryIds[parseInt(Math.random() * countryIds.length)];
	// 	// originCode = 'FK'
	// 	var destinationCode = countryIds[parseInt(Math.random() * countryIds.length)];
	// 	var originCoords = document.getElementById(`${originCode}_centroid`);
	// 	var destinationCoords = document.getElementById(`${destinationCode}_centroid`);
	// 	if (originCoords == null || destinationCoords == null)
	// 		console.log(originCode, originCoords, destinationCode, destinationCoords);
	// 	newPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	// 	newPath.setAttribute('d', `M ${originCoords.cx.animVal.value},${originCoords.cy.animVal.value} L ${destinationCoords.cx.animVal.value},${destinationCoords.cy.animVal.value}`);
	// 	// console.log(originCode, boundsOrigin, destinationCode, boundsDest);
	// 	newPath.setAttribute('id', 'practiceline2');
	// 	document.getElementById('g4105').appendChild(newPath);
	// }

	// find the countries that don't have centroids yet, and print. 
	// look for duplicates (IDs, coords) and undones (5,5). 
	var objects = Object.entries(document.getElementById('g4105').childNodes);
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

// Promise
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
