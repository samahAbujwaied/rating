alert('welcome to the rating section');

var rating=prompt('What is your evaluating of me Me Saed');

document.write('<h1> Go to the Bottom to see the number of rat 🤩 </h1>'  );
for (var i=1 ; i <= rating ;i++)
{

  var image='<img src="https://www.nicepng.com/png/detail/107-1079132_star-image-animated-moving-small-stars.png" alt= "star"/>';
 
  document.write(image);
}

document.write('<h1> you rating me </h1>'+ (i-1)  );


