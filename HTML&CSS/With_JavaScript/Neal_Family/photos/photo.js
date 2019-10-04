var c = 1.
	time = 2222,
	 s = document.getElementById("slide"),
	 q = document.getElementById("quote"),
	 pic = ['../images/WholeFamily2017.jpg', '../images/GuessWhoGame.jpg', '../images/PlayingGames.jpg', 
			'../images/Siblings2015.jpg', '../images/Siblings2017.jpg', '../images/Siblings2018.jpg',
			'../images/siblings2019.jpg', '../images/theFashionModel.jpg', '../images/UncleRayTakingPics.jpg'],
	quotes = ["The whole family in 2017", "The guess who game from 2017", "Playing the guess who game",
			  "The siblings 2015", "The siblings in 2017", "The Siblings 2018", "The siblings in 2019",
			  "Cory the fashion model in 2017", "Uncle Ray Taking pictures"];
function change_Image_and_Text()	{
	c = Math.floor(Math.random() * pic.length);

	s.src = pic[c];
	q.innerHTML = quotes[c];
	
}
setInterval(change_Image_and_Text, time);