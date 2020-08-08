final int NUM_IMAGES=10;
final String DESIGN_LOCATION="img/Portfolio/Design/";

PImage background;
PImage[] designs = new PImage[NUM_IMAGES];

void setup() {
  frameRate(10);
  
  size(960,540);
  background = loadImage("img/background.png");
  
  // load images into array
  designs[0] = loadImage(DESIGN_LOCATION + "clothes/robber-barons/profession/palm3D.png");
  designs[1] = loadImage(DESIGN_LOCATION + "clothes/robber-barons/outside-the-box/barons-outside-the-box.png");
  designs[2] = loadImage(DESIGN_LOCATION + "clothes/robber-barons/roy/funny.png");
  designs[3] = loadImage(DESIGN_LOCATION + "clothes/tdx/chiseled/apollo_00.png");
  designs[4] = loadImage(DESIGN_LOCATION + "clothes/tdx/it-takes-a-little-more/it-takes-a-little-more-to-make-a-theta-delt.png");
  designs[5] = loadImage(DESIGN_LOCATION + "clothes/tdx/uq-alumni-assn/UQAlumniAssn.png");
  designs[6] = loadImage(DESIGN_LOCATION + "clothes/tdx/uq-alumni-assn/wavy-MOG_delt.png");
  designs[7] = loadImage(DESIGN_LOCATION + "graphics/artists/Gebreezy/breezyxkuma.png");
  designs[8] = loadImage(DESIGN_LOCATION + "graphics/artists/Gebreezy/so-wassup.png");
  designs[9] = loadImage(DESIGN_LOCATION + "graphics/artists/Gebreezy/fine.png");
}

int imageIndex = 0;

void draw() {
  
  if (imageIndex == 0) {
    image(background, 0,0);
  }
  
  PImage img = designs[imageIndex];
  image(img, random(width), random(height));
  imageIndex = imageIndex == 9 ? 0 : imageIndex+1;
  
}
