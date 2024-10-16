let Wish, threestar, fourstar, fivestar, wishchance,threestar1,threestar2,threestar3
i = 1
function preload() {
Wish = loadImage ("mikuwish.png");
three1 = loadImage("three star miku 1.jpg");
	three2 = loadImage("three star miku 2.jpg");
		three3 = loadImage("three star miku 3.jpg");

four1 = loadImage("four star miku 1.jpg");
	four2 = loadImage("four star miku 2.jpg");

fivestar = loadImage("five star miku.jpg")
}

function setup() {
createCanvas (600, 600); 
background (241, 117, 170);

//i dont know how to make this the first thing that shows up :(
fill(255);
textSize(50);
text('Wish for a Miku! Refresh!', 20, 70);
image(Wish, 0, 100, 700)
//

wishchance = round(random());
	let three = [three1,three2,three3]
	let four = [four1,four2]
		let randothree = random(three)
				let randofour = random(four)
let threepull = random(100)
let fivepull = random(100)
	

if (threepull > 90 && threepull < 100){
	image(fivestar,0,0,600,600)
	fill("black")
	textSize(50)
	text('WOOOOOWWW!!!!',100,200)
}else if (threepull > 80 && threepull < 100){
	image(randofour,0,0,600,600)
	fill("black")
	textSize(50)
	text('NICE!!',100,200)
} else {
	image(randothree,0,0,600,600)
	fill("black")
	textSize(50)
	text('yikes...',100,200)
}}

function draw() {


}