

$(document).ready(function() {
	var working = true;

	function displayClock(duration) {
		var min, sec;
		if(duration.min < 10) {
			min = "0" + duration.min;
		} else {
			min = duration.min;
		}

		if(duration.sec < 10) {
			sec = "0" + duration.sec;
		} else {
			sec = duration.sec;
		}

		$("#remainTime").text(min + ":" + sec);
	}

	function countDown(duration) {
		if(duration.sec > 0) {
			duration.sec--;
		} else {
			duration.min--;
			duration.sec = 59;
		}
		displayClock(duration);

		if(duration.min == 0 && duration.sec == 0) {
			alert(duration.msg);
			duration.min = $("#" + duration.id).val();
			if(isNaN(duration.min) || duration.min.length == 0) {
				duration.min = 5;
			} else {
				duration.min = parseInt(duration.min);
			}

			working = !duration.working;
			$("#remainTime").removeClass(duration.addClass);
			$("#remainTime").addClass(duration.removeClass);
		}
	}

	var workDuration = {
		min: 25,
		sec: 0,
		id: "workDuration",
		working: true,
		msg: "工作累了，休息一下吧！",
		addClass: "remainTimeWork",
		removeClass: "remainTimeRest"
	}

	var restDuration = {
		min: 5,
		sec: 0,
		id: "restDuration",
		working: false,
		msg: "休息好了，回来工作吧！",
		addClass: "remainTimeRest",
		removeClass: "remainTimeWork"
	}

	setInterval(function() {
		if(working) {
			countDown(workDuration);
		} else {
			countDown(restDuration);
		}

	}, 1000);

});
