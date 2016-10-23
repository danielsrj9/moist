$(document).ready(function () {

      new Dygraph(
          document.getElementById("noroll"),
          "../assets/temperatures.csv",
          {
            //customBars: true,
            //xlabel: 'time',
            //ylabel: 'time squared',
            //legend: 'always',
            //labelsDivStyles: { 'textAlign': 'right' },
            showRangeSelector: true
          }
      );

		$.ajax({
        type: "GET",
        url: "assets/temperatures.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });

});


function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];
		var tablearea = document.getElementById('tablearea'),
				table = document.createElement('table');

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
				var tr = document.createElement('tr');
        if (data.length == headers.length) {
						tr.appendChild( document.createElement('td') );
						tr.appendChild( document.createElement('td') );
            for (var j=0; j<headers.length; j++) {
							tr.cells[j].appendChild( document.createTextNode(data[j]) );
            }
					table.appendChild(tr);
        }
    }
		tablearea.appendChild(table);
    //alert(lines);
}




