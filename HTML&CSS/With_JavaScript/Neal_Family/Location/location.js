var loc = document.getElementById("location");

loc.addEventListener("click", function(event) {
	window.open("https://www.downatahotsprings.com/");
}, false);

var counter = 1.
	time = 8214,
	 s = document.getElementById("slide"),
	 q = document.getElementById("quote"),
	 pic = ['../images/WholeFamily2017.jpg', '../images/Siblings2015.jpg', '../images/Siblings2017.jpg', 
			'../images/Siblings2018.jpg', '../images/siblings2019.jpg', '../images/UncleRayTakingPics.jpg'],
	quotes = ["The whole family in 2017", "The siblings 2015", "The siblings in 2017", "The Siblings 2018", 
				"The siblings in 2019", "Uncle Ray Taking pictures"];
function change_Image_and_Text()	{
	counter = Math.floor(Math.random() * pic.length);

	s.src = pic[counter];
	q.innerHTML = quotes[counter];
	
}
setInterval(change_Image_and_Text, time);