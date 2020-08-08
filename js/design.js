let DESIGN_LOCATION = "img/Portfolio/Design/";

var bg;
var designs = [];

function setup() {

	createCanvas(windowWidth, windowHeight);

	bg = loadImage("img/background.png");
	image(bg, 0, 0);

	designs.push(loadImage(DESIGN_LOCATION + "clothes/robber-barons/profession/palm3D.png"));
	designs.push(loadImage(DESIGN_LOCATION + "clothes/robber-barons/outside-the-box/barons-outside-the-box.png"));
	designs.push(loadImage(DESIGN_LOCATION + "clothes/robber-barons/roy/funny.png"));
	designs.push(loadImage(DESIGN_LOCATION + "graphics/programs/barons-pact_back.png"));
	designs.push(loadImage(DESIGN_LOCATION + "graphics/programs/barons-pact_inside.png"));
	designs.push(loadImage(DESIGN_LOCATION + "graphics/programs/rbsc_back.png"));
	designs.push(loadImage(DESIGN_LOCATION + "graphics/programs/rbsc_inside.png"));
	designs.push(loadImage(DESIGN_LOCATION + "clothes/tdx/chiseled/apollo_00.png"));
	designs.push(loadImage(DESIGN_LOCATION + "clothes/tdx/it-takes-a-little-more/it-takes-a-little-more-to-make-a-theta-delt.png"));
	designs.push(loadImage(DESIGN_LOCATION + "clothes/tdx/uq-alumni-assn/UQAlumniAssn.png"));
	designs.push(loadImage(DESIGN_LOCATION + "clothes/tdx/uq-alumni-assn/wavy-delt_mog.png"));
	designs.push(loadImage(DESIGN_LOCATION + "graphics/tdx/oh-god.png"));
	designs.push(loadImage(DESIGN_LOCATION + "graphics/artists/Gebreezy/breezyxkuma.png"));
	designs.push(loadImage(DESIGN_LOCATION + "graphics/artists/Gebreezy/so-wassup.png"));
	designs.push(loadImage(DESIGN_LOCATION + "graphics/artists/Gebreezy/fine.png"));
	designs.push(loadImage(DESIGN_LOCATION + "graphics/artists/Gebreezy/backup-plan.png"));
	designs.push(loadImage(DESIGN_LOCATION + "graphics/artists/Mammoth/mammoth.png"));
	designs.push(loadImage(DESIGN_LOCATION + "graphics/misc/linda-sol_dizzydon.png"));
	designs.push(loadImage(DESIGN_LOCATION + "graphics/who-where-am-i/whowhereami_00.jpg"));
	designs.push(loadImage(DESIGN_LOCATION + "graphics/who-where-am-i/whowhereami_01.jpg"));
}

var imageIndex = 0;
var lastImage;

function draw() {

	if (frameCount % 50 == 0) {
		if (imageIndex == 0) {
			image(bg, 0,0);
		}

		if (imageIndex > 0) {
			lastImage
		}

		let img = designs[imageIndex];
		image(img, random(width-img.width), random(height-img.height));
		imageIndex = imageIndex == designs.length-1 ? 0 : imageIndex+1;
	}

}