$(document).ready(function(){
  $('nav a').on('click', function(){
    //current class assigned
    $('nav li.current').removeClass('current');
    $(this).parent().addClass('current');

    //set heading
    $('h1.heading').text($(this).text());

    //get & filter link text
    var category = $(this).text().toLowerCase().replace(' ', "-");

    //remove hidden class  if " all projects" is selected
    if(category === "all-projects"){
      $('ul.gallery li:hidden').fadeIn('slow').removeClass('hidden');
    } else {
      $('ul.gallery li').each(function(){
        if(!$(this).hasClass(category)){
          $(this).hide().addClass('hidden');
        } else {
          $(this).fadeIn('slow').removeClass('hidden');
        }
      });
    }
    //stop link behavior
    return false;
  });

});
