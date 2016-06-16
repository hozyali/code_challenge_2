class RaceAverage {
		avgMinutes(times) {
			var timesArr = [];
			document.getElementById("jsoutput").innerHTML = "";
			
			// Parsing the values
			// times must be an array with 1-50 values
			if (times.length < 1 || times.length > 50) {
				document.getElementById("jsoutput").innerHTML = "Error: variable times must be an array with 1-50 elements";
				return;
			}
			for (var i = 0; i < times.length; i++) {
				// Format validation
				if (!/^\d\d:\d\d (A|P)M, DAY [0-9][0-9]?[0-9]?$/.test(times[i])) {
					document.getElementById("jsoutput").innerHTML = "Invalid time format " + times[i] + ". Time should be `hh:mm xM, DAY n`";
					return;
				}
				var s1 = times[i].split(",");
				var hhmmxM = s1[0].split(" ");
				var hhmm = hhmmxM[0].split(":");
				var hh = parseInt(hhmm[0]);
				var mm = parseInt(hhmm[1]);
				var xM = hhmmxM[1];
				var day = s1[1].trim().split(" ");
					day = parseInt(day[1]);								
				
				// Calculating elapsed time for each sailboat
				var eTime  = 0;
					eTime += (day - 1) * 24 * 60; // If DAY is greater than 1, add the amount of time in minutes
					if (hh === 12) {
						eTime += ((xM === "PM" ? 0 : -12) + hh) * 60;
					} else {
						eTime += ((xM === "PM" ? 12 : 0) + hh) * 60;
					}
					eTime += mm;
				eTime -= 8 * 60; // Let's substract the 8 hours (08:00 AM, DAY 1)
				timesArr.push(eTime);
			}
			// Let's calculate the average
			var total = 0;
			for (var i = 0; i < timesArr.length; i++) {
				total += timesArr[i];
			}
			var average = Math.round(total / timesArr.length);
			document.getElementById("jsoutput").innerHTML = "Average: " + average + " minutes";
		}
	}
	