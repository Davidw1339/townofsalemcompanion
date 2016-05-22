$(document).ready(function() 
{
    
	$(".role").click(function() 
	{
		if($(this).css('textDecoration') == 'line-through')
		{
			$(this).css('textDecoration', 'none');
		}
		else
		{
			$(this).css('textDecoration', 'line-through');
		}
		
	});
});
