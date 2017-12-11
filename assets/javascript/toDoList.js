// check off todo list elements when clicked

$("ul").on("click","li",function(){
	// if black turn into grey and strike through
	//else change to grey and strike through the text

	if($(this).css("color")==="rgb(128, 128, 128)"){
		$(this).css({
		color:'black',
		textDecoration:'none'
		})
	}

	else
	{
		$(this).css({
		color:'gray',
		textDecoration:'line-through'
	})
	}	
	});

// to remove the todo list item when X is clicked 

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(300,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

// new to do to add, when text input is completed, add it into the li
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// get the text entered 
		var todoText = $(this).val();
		$(this).val(" ");

		$("ul").append("<li><span> <i class='fa fa-trash-o'></i> </span>" + todoText + "</li>");
			}	
});



