$(document).ready(function () {
      new Dygraph(
          document.getElementById("noroll"),
          "../assets/temperatures.csv",
          {
//            customBars: true,
            ylabel: 'time squared',
            xlabel: 'time',
            legend: 'always',
            labelsDivStyles: { 'textAlign': 'right' },
            showRangeSelector: true
          }
      );
    }
);
