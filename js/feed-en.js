$(document).ready(function() {

        // default selection

        $.ajax({

            url: 'https://prescreen.io/job/list/l9qaoviuvti1fdm09t2kcpycc84t4yn?format=json',
            type: 'GET',
            crossDomain: true,
            dataType: "json",
            data: 'data',
            success: function(data, textStatus, jqXHR){

                showJobs(data);

            },
            
            error: function(data, text){
                console.log('Err', data);

            }

        });

        function showJobs(data) {

            console.log('success', data);

            for ( i = 0; i < data.jobs.length; i++) {

				$('#resultContainer').append(
				"<div class='col-md-4'><div class='thumbnail'>\n\
					<img src='" + data.jobs[i].bannerUrl + "' alt='job-banner' class='img-responsive'>\n\
					<div class='caption'>\n\
						<h3>" + data.jobs[i].title + "</h3>\n\
						<p style='min-height: 65px;'>" + data.jobs[i].custom_data_fields[1].value + "</p><br />\n\
						<p><a href='" + data.jobs[i].applyUrl + "' class='btn btn-primary' role='button'>Apply now</a> <a href='" + data.jobs[i].showUrl + "' class='btn btn-default' role='button'>More information</a></p>\n\
					</div>\n\
				</div>"

				);
               
            }
			
        }

    });
