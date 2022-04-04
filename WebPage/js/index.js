$(document).ready(function () { 
  			
  /* home page */
  const moduleMenu = [{
			"id": "module1",
			"Modulename": "Module One"
		},
		{
			"id": "module2",
			"Modulename": "Module Two"
		},
		{
			"id": "module3", 
			"Modulename": "Module Three"
		},
		{
			"id": "module4", 
			"Modulename": "Module Four"
		},
		{
			"id": "module5", 
			"Modulename": "Module Five"
		}];
  	//loop module content
  	$.each(moduleMenu, function( index, value ) {
		const { id, Modulename } = value;
	    $('#modulecontent').append(`
	    	<li>
	    		<a class="moduleDetlScreen" href="./module.html?moduleName=${id}">
	    			${Modulename}
	    		</a>
	    	</li>
	    `);
	});

	// search page Contents

	 const searchresult = [{
	 	    "imgpath":"img/search-image.png",
			"searchtxt": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500st.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			"searchhead": "Lorem Ipsum is simply dummy"
		},
		{
			"imgpath":"img/search-image.png",
			"searchtxt": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500st.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			"searchhead": "Lorem Ipsum is simply dummy"
		},
		{
			"imgpath":"img/search-image.png",
			"searchtxt": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500st.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			"searchhead": "Lorem Ipsum is simply dummy"
		}];

		$.each(searchresult, function( index, value ) {
		const { searchname } = value;
	    $('#searchfilter').append(`
	    	<div class="search-result mt-2">
						<div class="d-flex align-items-center">
							<img src=${value.imgpath} alt="">
							<div class="pl-3">
								<h5 class="white pt-2">${value.searchhead}</h5> 
								<h6 class="white">${value.searchtxt}</h6>
							</div>
						</div>
					</div>
	    	
	    `);
	});

	


	// redirect to comment page
    $('.naviScreen').click(function() {
        window.location.href = "./module.html"
    })

    $('#btnmodule').click(function() {  
    	$('.moduleSection').show();
    	$('.homeSection').hide();
    });
    // home page scripts

    // module page 
    // redirect to home page
    $('.clickNav').click(function() {
        window.location.href = "./home.html"
    })

    // redirect to search page
    $('.clickSearch').click(function() {
        window.location.href = "./searchresult.html"
    })

    /* Get Address bar variable after ? & */
	$.urlParam = function(name){
	    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	    if (results==null) {
	       return null;
	    }
	    return decodeURI(results[1]) || 0;
	}

	// get module name
	const moduleName = $.urlParam("moduleName");
	var heading = "Module One",
		selModule = moduleMenu.find((val) => val.id === moduleName);
	heading = moduleName && selModule && selModule.Modulename ? selModule.Modulename : heading;
	$("#dynamicHeading").text(heading);
    // module page ends

    // search page
    // redirect to home page
	    $('.clickImg').click(function() {
	        window.location.href = "./home.html"
	    })

	    // redirect to module page
	    $('.search-result').click(function() {
	        window.location.href = "./home.html"
	    })

    //search page ends

}); 