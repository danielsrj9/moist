$(document).ready(function () {
      new Dygraph(
          document.getElementById("noroll"),
          "../assets/temperatures.csv",
          {
            customBars: true,
            ylabel: 'Temperature (F)',
            legend: 'always',
            labelsDivStyles: { 'textAlign': 'right' },
            showRangeSelector: true
          }
      );
    }
);
