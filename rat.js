alert('welcome to the rating section');

var rating=prompt('What is your evaluating of me Mr Saed ?? try enter zero (0) and then rerating me correctly 😅 ');


if (rating == 0)
{
  var image0='<img src="https://1.bp.blogspot.com/-E_KbYjMYNgo/XX1bMatyPEI/AAAAAAAAWrU/wG64Iblu8lE4rJBlPZRJM9JbJDeqkiSRgCLcBGAsYHQ/s1600/shocked-emoji-smiley.png" alt= "star"/>';
document.write(image0);
document.write('<h1> Go to the Bottom to see the number of rat 🤩 </h1> '  );


}
else {
document.write('<h1> erating me correctly 😅 </h1> '  );

for (var i=1 ; i <= rating ;i++)
{

  var image='<img src="https://www.nicepng.com/png/detail/107-1079132_star-image-animated-moving-small-stars.png" alt= "star"/>';
 
  document.write(image);
  document.write(' </br> 👏👏   ' + i + '👏👏 </br>');
  
}

document.write('<h1> you rating me </h1>'+ (i-1)  );
}

