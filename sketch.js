var headImage, Signup, Login, next, logo, AddAddresso, SearchAddresso, next31;
var next1, sendOTP, AddAddress, SearchAddress;
var mobile;

function setup() 
{
  createCanvas(400, 700); 

  database = firebase.database();

  headImage = loadImage("EZAddressHead.PNG");
  AddAddresso = loadImage("Add Adress.PNG");
  SearchAddresso = loadImage("Search Address.PNG");
  Login = loadImage("login.PNG");
  next = loadImage("NextIcon.PNG");
  next21 = loadImage("next32.PNG");
  next31 = loadImage("NextIcon - Copy.PNG");
  logo = loadImage("EZAddresslogo.PNG");

  next2 = createSprite(1000000, 250, 100, 100);
  next2.addImage(next21);
  next2.scale = 0.6;

  next3 = createSprite(1000000, 500, 100, 100);
  next3.addImage("asd", next31);
  next3.scale = 0.6;

  AddAddress = createSprite(1000000, 200, 100, 100);
  AddAddress.addImage(AddAddresso);
  AddAddress.scale = 0.5;

  SearchAddress = createSprite(1000000, 300, 100, 100);
  SearchAddress.addImage(SearchAddresso);
  SearchAddress.scale = 0.5;

  sendOTP = createSprite(200, 250, 100, 100);
  sendOTP.addImage(Login);
  sendOTP.scale = 0.3;

  next1 = createSprite(200, 370, 100, 100);
  next1.addImage(next);
  next1.scale = 0.6;

  pointer = createSprite(0, 0, 1, 1);
  pointer.visible = false;

  form = new Form();

  x = 0;

}

function draw() 
{
  background(255);

  form.display();
  image(headImage, 0, 0, 400, 133);
  pointer.x = mouseX;
  pointer.y = mouseY;

  if(pointer.isTouching(sendOTP))
  {
    sendOTP.scale = 0.34;
  }
  else{sendOTP.scale = 0.3}

  if(pointer.isTouching(next1))
  {
    next1.scale = 0.64;
  }
  else{next1.scale = 0.6}

  if(pointer.isTouching(next3))
  {
    next3.scale = 0.64;
  }
  else{next3.scale = 0.6}


  if(pointer.isTouching(next2))
  {
    next2.scale = 0.64;
  }
  else{next2.scale = 0.6}

  if(pointer.isTouching(AddAddress))
  {
    AddAddress.scale = 0.54;
  }
  else{AddAddress.scale = 0.5}

  if(pointer.isTouching(SearchAddress))
  {
    SearchAddress.scale = 0.54;
  }
  else{SearchAddress.scale = 0.5}

  if(mousePressedOver(SearchAddress))
  {
    form2 = new searchForm();
    x = 2;
  }

  if(mousePressedOver(AddAddress))
  {
    form3 = new AddForm();
    x = 3;
  }

  if(mousePressedOver(next2))
  {
    form2.step2();
    next2.x = 200;
    x = 4;
  }

  if(x === 2)
  {
    form2.display();
  }
  if(x === 3)
  {
    form3.display();
  }
  if(x === 4)
  {
    form2.display();
  }

  drawSprites();
}