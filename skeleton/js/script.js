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
		var table = document.getElementById('tablearea');

    /*for (var i=1; i<allTextLines.length; i++) {*/
    for (var i=1; i<allTextLines.length; i++) {
    /*for (var i=1; i<9; i++) {*/
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            var tr = document.createElement('tr');
            for (var j=0; j<headers.length; j++) {
						  tr.appendChild( document.createElement('td') );
							tr.cells[j].appendChild( document.createTextNode(data[j]) );
            }
					table.appendChild(tr);
        }
    }
    //alert(lines);
}




