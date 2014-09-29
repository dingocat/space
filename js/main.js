$(function() {
	$("#satellite").draggable();
});
$("#robot2").hover(function(){
  $("#rocket1").toggleClass("rocket1Active");
  console.log("div was hovered");
});