/**
 * Made bootstrap pagination jquery plug in - Jr. Developer Jan Philipp Maquinto 6/20/2013
 * 
 * Example Use:
 * 
 * $("#refEmployeeTable").bootstrapPagination("open",{
 *		        fetchSize : 10,                             //number
 *		        maxResults : employeeRefSearch.totalSize,   //number
 *		        selectedPage : employeeRefSearch.page,      //number ~ 1 is 1st index.
 *		        passfunction: employeeRefSearch.navi // function
 * });
 * 
 * To Close: 
 * 
 * $("#refEmployeeTable").bootstrapPagination("close");
 * 
 * 
 * For easy use define a global object/var so the parameters can be pass to the passfunction of the plugin.
 * 
 */

(function($) {
	$.fn.bootstrapPagination = function(action,options) {
			var tableid = this.attr('id');
		
	 if(action == "open"){
		// This is the easiest way to have default options.
			var settings = $.extend({
				// These are the defaults.
				fetchSize : 10,
				maxResults : 0,
				selectedPage : 1,
				passfunction: function() {}
			}, options);
			var startPage = 0;
			var stopPage = 0;
			var links = "";
			
			var maxPage = Math.ceil((settings.maxResults / settings.fetchSize));
			var pagelimiter =0;
			if(maxPage<8){
				pagelimiter = maxPage;
			}else{
				pagelimiter = 8;
			}
			var prev = settings.selectedPage -1;
			var postfix = settings.selectedPage == 1 ? "<li class='disabled'><span>&laquo;First</span></li><li class='disabled'><span>&#8249;Prev</span></li>" 
					: "<li><a class='"+tableid+"-bootstrap-paginationli-first'>&laquo;First</a><li><li><a class='"+tableid+"-bootstrap-paginationli-prev'>&#8249;Prev</a><li>";
			// the startPage should never be negative.
		    if(settings.selectedPage - 3 < 1) {
		        startPage = 1;
		        stopPage = startPage + pagelimiter;
		    } else {
		        startPage = settings.selectedPage - 3;
		        stopPage = startPage + pagelimiter;
		    }
		    // the stopPage should never be more then the maxPage.
		    if(stopPage >= maxPage) {
		        stopPage = maxPage+1;
		        startPage = stopPage - pagelimiter;
		    }
		        
		    for(i = startPage; i < stopPage; i++) {
		        if (settings.selectedPage != i) {
		            links +="<li><a class='"+tableid+"-bootstrap-paginationli'>"+i+"</a><li>";	
		        } else {
		            links +="<li class='active'><span>"+settings.selectedPage+"</span></li>";
		        }
		    }
		    
		    var maxpage2 =  Math.ceil((settings.maxResults / settings.fetchSize));
		    var next = settings.selectedPage+1;
		    var prefix = settings.selectedPage == maxPage ? "<li class='disabled'><span>Next&#8250;</span></li><li class='disabled'><span>Last&raquo;</span></li>"
		    		: "<li><a class='"+tableid+"-bootstrap-paginationli-next'>Next&#8250;</a><li><li><a class='"+tableid+"-bootstrap-paginationli-last'>Last&raquo;</a><li>";
		    
		    var paginationHtml = "<ul>"+postfix+links+prefix+"</ul>";
		    var divPagination = "<div id='"+tableid+"-pagination-div'>"+paginationHtml+"</div>";
		    
		    
		    
		   
		    if( !$('#'+tableid+'-pagination-div').length> 0){
		    	this.after(divPagination);
		    }else{
		    	$('#'+tableid+'-pagination-div').html(paginationHtml);
		    }
		    
		    $('#'+tableid+'-pagination-div').addClass("pagination pagination-right");
		    
		    var first =1;
		    
		    $('.'+tableid+'-bootstrap-paginationli-first').click(function () {
		    	settings.passfunction.call(this,first);
			});
		    
		    $('.'+tableid+'-bootstrap-paginationli-prev').click(function () {
		    	settings.passfunction.call(this,prev);
			});
		    
		    $('.'+tableid+'-bootstrap-paginationli-next').click(function () {
		    	settings.passfunction.call(this,next);
			});

		    $('.'+tableid+'-bootstrap-paginationli-last').click(function () {
		    	settings.passfunction.call(this,maxpage2);
		    });
		    
		    $('.'+tableid+'-bootstrap-paginationli').click(function () {
		    	var page = parseInt($(this).text());
		    	settings.passfunction.call(this,page);
		    });

		    return this;
	 }else if(action == "close" ){
		 	$('#'+tableid+'-pagination-div').remove();
		 	return this;
	 }	
		
	};
}(jQuery));











