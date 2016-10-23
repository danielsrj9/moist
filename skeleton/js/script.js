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
    }
);
