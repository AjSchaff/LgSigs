
$(document).ready(function(){

	var $target = $('body');
	var global = {chartDrawn: false};

	 google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(chartScroll);

      
      function chartScroll() {
      	
      	$(window).scroll(function(){
      		//get position of chart container
      		var elementPos = $target.find('.google-chart-container').offset().top + $target.find('.google-chart-container').height()/2;
      		var windowHeight = $(window).height();
      		var scrollPos = $(window).scrollTop();


      		if (scrollPos + windowHeight > elementPos && !global.chartDrawn){
      			drawChart();
      		}

      	});

      	//trigger scroll on load in case we're on chart
      	$(window).scroll();
      }

      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Age');
        data.addColumn('number', 'Savings');
        

          data.addRows([['25', 4000],
          				['30', 8000],
          				['35', 20000],
          				['40', 60000],
          				['45', 100000],
          				['50', 150000],
          				['55',180000],
          				['60', 250000],
          				['65', 300000],
          				['70', 400000],
          				['75', 650000],
          				['80', 725000] ]);
     
        var options = {
			    title: "Savings required per year to reach $1 million" , 
			    titleFontSize: 18,
			    fontName: "'Arial'", 
		     	bold: false,
		     	//chartArea: {width:'75%'},
			    hAxis: { title: 'Age', textStyle: { fontSize: 12 }, titleFontSize: 18},
			    vAxis: { title: 'Amount', textStyle: { fontSize: 12 }, format: '$#,###', titleFontSize: 18},
			    legend: 'none',
			    animation:{
			    	startup: true,
			        duration: 1600,
			        easing: 'out'
			      }
			};

 

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementsByClassName('google-chart-container')[0]);
        chart.draw(data, options);

        global.chartDrawn = true;
      }


});
