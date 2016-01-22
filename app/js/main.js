var starNumber = 1;
var z = starNumber * 10;
var z2 = z - 1;
var nightSky;


function space(startx, endx, starty, endy, speed) {

    nightSky = setInterval(function(){

    var xpos = (Math.floor(Math.random() * (endx - startx))) + startx;
    var ypos = (Math.floor(Math.random() * (endy - starty))) + starty - 120;

    var star =  '<div class="sparkle-container" id="star_' + starNumber + '" style="top:'+ypos+'px;left:'+xpos+'px;z-index:'+z+'">';
        star += '<div class="sparkle"></div>';
        star += '<div class="top-shelf">';
        star += '<div class="top-left"></div>';
        star += '<div class="top-right"></div>';
        star += '</div>';
        star += '<div class="bottom-shelf">';
        star += '<div class="bottom-left"></div>';
        star += '<div class="bottom-right"></div>';
        star += '</div></div>';

          $("#sky").append(star);

          var currentStar = "#star_" + starNumber;

          setTimeout(function(){

          $(currentStar).children().children().each(function(){
            $(this).css("transform", "scale(1.05)");
          })
          $($(currentStar).children()[0]).css("transform", "scale(.8)");

        }, speed + 200)

          setTimeout(function(){

            $(currentStar).children().children().each(function(){
              $(this).css("transform", "scale(1.5)");
            })
            $($(currentStar).children()[0]).css("transform", "scale(.5)");

          }, speed + 400)

          setTimeout(function(){
            $(currentStar).remove();
          }, speed + 600)

    starNumber++;
    z = starNumber * 10;
    z2 = z - 1;

  }, speed + 600)

}


$(document).ready(function(){

    space(0, 200, 0, 200, 100);
    space(300, 500, 0, 200, 110);
    space(600, 800, 0, 200, 120);
    space(900, 1100, 0, 200, 130);
    space(1200, 1400, 0, 200, 140);

    space(0, 200, 300, 500, 150);
    space(300, 500, 300, 500, 160);
    space(600, 800, 300, 500, 170);
    space(900, 1100, 300, 500, 180);
    space(1200,1400, 300, 500, 190);

    space(0, 200, 600, 800, 200);
    space(300, 500, 600, 800, 210);
    space(600, 800, 600, 800, 220);
    space(900, 1100, 600, 800, 230);
    space(1200, 1400, 600, 800, 240);

    space(0, 200, 900, 1100, 250);
    space(300, 500, 900, 1100, 260);
    space(600, 800, 900, 1100, 270);
    space(900, 1100, 900, 1100, 280);
    space(1200, 1400, 900, 1100, 290);

    space(0, 200, 1200, 1400, 300);
    space(300, 500, 1200, 1400, 310);
    space(600, 800, 1200, 1400, 320);
    space(900, 1100, 1200, 1400, 330);
    space(1200, 1400, 1200, 1400, 340);



});
