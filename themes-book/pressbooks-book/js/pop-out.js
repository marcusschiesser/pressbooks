jQuery(document).ready(function(){

	jQuery('#toc').hide();
	jQuery('.toc-btn a, a.close').live('click', function() {
		if(jQuery('#toc').css('display') == 'none') {
			jQuery('.toc-btn a').addClass('tabbed');
			jQuery('.toc-btn').addClass('bg-color');
			jQuery('#toc').toggle({ duration:200 });
			return false;
		} else {
			jQuery('.toc-btn a').removeClass('tabbed');
			jQuery('.toc-btn').removeClass('bg-color');
			jQuery('#toc').toggle({ duration:100 });
			return false;
		}
	});
});


