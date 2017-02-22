$(document).ready(function () {
			google.charts.load('current', {'packages':['corechart','controls']});
      google.charts.setOnLoadCallback(drawVisualization);

			$(window).on("throttledresize", function (event) {
					drawVisualization();
			});

			//var url = "https://docs.google.com/spreadsheets/d/1Uw3hpUZEKeKmE0Zh2TPd9ESnvrK8fssWRvMHM87nsjU/gviz/tq?range=A:B";
			var url = "https://docs.google.com/spreadsheets/d/1G42YFuYu8xofDPlyA1tY4WJsgalqHyfLGcIWrXtAF2k/gviz/tq?range=D:C";
      function drawVisualization() {
        // Some raw data (not necessarily accurate)
				var query = new google.visualization.Query(url);//need to put url
				query.send(handleQueryResponse);
			}

		function handleQueryResponse(response){
			var data = response.getDataTable();

			// Create a dashboard.
        var dashboard = new google.visualization.Dashboard(
            document.getElementById('dashboard_div'));

        // Create a range slider, passing some options
        var donutRangeSlider = new google.visualization.ControlWrapper({
          'controlType': 'NumberRangeFilter',
          'containerId': 'filter_div',
          'options': {
            'filterColumnLabel': 'time'
          }
        });

        // Create a pie chart, passing some options
        var LineChart = new google.visualization.ChartWrapper({
          'chartType': 'LineChart',
          'containerId': 'chart_div',
          'options': {
							title: "",
							width: '100%',
							height: '100%',
							chartArea: {
									left: "25%",
									top: "3%",
									height: "80%",
									width: "100%"
							},
							vAxis: {
									title: "Normalization",
									textPosition: 'none'
							},
							hAxis: {
									title: "Timestamp",
									textPosition: 'none'
							}

          }
        });

        // Establish dependencies, declaring that 'filter' drives 'LineChart',
        // so that the pie chart will only display entries that are let through
        // given the chosen slider range.
        dashboard.bind(donutRangeSlider, LineChart);

        // Draw the dashboard.
        dashboard.draw(data);


		}//end handleQReponse

});

