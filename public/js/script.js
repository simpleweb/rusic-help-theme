$(function() {
  
  // live markdown preview
  var showdown = new Showdown.converter();
  var prev_text = "";
  var update_live_preview = function() {
      var input_text = $('#idea_content').val();
      if (input_text != prev_text) {
          var text = $("<div>"+ showdown.makeHtml(input_text) +"</div>");
          console.log(text);
          $('div#live-preview').html(text);
          prev_text = input_text;
      }
  }
  if($('#idea_content').length) {
    setInterval(update_live_preview, 300);
  }

  $("a#sign-in").fancybox();

});
