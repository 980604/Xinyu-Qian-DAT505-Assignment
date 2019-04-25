//THREEJS RELATED VARIABLES

var scene,
    camera,
    controls,
    fieldOfView,
  	aspectRatio,
  	nearPlane,
  	farPlane,
    shadowLight,
    backLight,
    light,
    renderer,
		container,
    circle,
    skelet,
    particle;
  
var speed=1;




//SCENE

//SCREEN VARIABLES

var HEIGHT,
  	WIDTH,
    windowHalfX,
  	windowHalfY,
    mousePos = {x:0,y:0};

//INIT THREE JS, SCREEN AND MOUSE EVENTS

function init(){
  scene = new THREE.Scene();


  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  aspectRatio = WIDTH / HEIGHT;
  fieldOfView = 60;
  nearPlane = 1;
  farPlane = 2000;

  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane);
  camera.position.z = 800;
  camera.position.y = 300;
  camera.lookAt(new THREE.Vector3(0,0,0));

  renderer = new THREE.WebGLRenderer({alpha: true, antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMapEnabled = true;
renderer.setClearColor("#441B73");

  container = document.getElementById('world');
  container.appendChild(renderer.domElement);

  windowHalfX = WIDTH / 2;
  windowHalfY = HEIGHT / 2;
  window.addEventListener('resize', onWindowResize, false);
  document.addEventListener('mousemove', handleMouseMove, false);
  document.addEventListener('mousedown', handleMouseDown, false);
document.addEventListener('mouseup', handleMouseUp, false);
  document.addEventListener('touchstart', handleTouchStart, false);
	document.addEventListener('touchend', handleTouchEnd, false);
	document.addEventListener('touchmove',handleTouchMove, false);
  //*
  controls = new THREE.OrbitControls( camera, renderer.domElement);
  //*/
  circle = new THREE.Object3D();
  skelet = new THREE.Object3D();
  particle = new THREE.Object3D();

  scene.add(circle);
  scene.add(skelet);
  scene.add(particle);

  var geometry = new THREE.TetrahedronGeometry(2, 0);
  var geom = new THREE.IcosahedronGeometry(7, 1);
  var geom2 = new THREE.IcosahedronGeometry(15, 1);

  var material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading
  });

  for (var i = 0; i < 1000; i++) {
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    mesh.position.multiplyScalar(90 + (Math.random() * 700));
    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
    particle.add(mesh);
  }





}

function onWindowResize() {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  windowHalfX = WIDTH / 2;
  windowHalfY = HEIGHT / 2;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
}

function handleMouseMove(event) {
  mousePos = {x:event.clientX, y:event.clientY};
}

function handleMouseDown(event) {

}

function handleMouseUp(event) {
  //
}

function handleTouchStart(event) {
  if (event.touches.length > 1) {
    event.preventDefault();
		mousePos = {x:event.touches[0].pageX, y:event.touches[0].pageY};
  }
}

function handleTouchEnd(event) {
    mousePos = {x:windowHalfX, y:windowHalfY};
}

function handleTouchMove(event) {
  if (event.touches.length == 1) {
    event.preventDefault();
		mousePos = {x:event.touches[0].pageX, y:event.touches[0].pageY};
  }
}




function createLights() {
  light = new THREE.HemisphereLight(0x482B82, 0x482B82, .5)

  shadowLight = new THREE.DirectionalLight(0x482B82, .8);
  shadowLight.position.set(200, 200, 200);
  shadowLight.castShadow = true;
  shadowLight.shadowDarkness = .2;

  backLight = new THREE.DirectionalLight(0x482B82, .4);
  backLight.position.set(-100, 200, 50);
  backLight.shadowDarkness = .2;
  backLight.castShadow = true;
  var lights = [];
lights[0] = new THREE.DirectionalLight( 0xffffff, 1 );
lights[0].position.set( 1, 0, 0 );
lights[1] = new THREE.DirectionalLight( 0x11E8BB, 1 );
lights[1].position.set( 0.75, 1, 0.5 );
lights[2] = new THREE.DirectionalLight( 0xCA82B7, 1 );
lights[2].position.set( -0.75, -1, 0.5 );
scene.add( lights[0] );
scene.add( lights[1] );
scene.add( lights[2] );


  scene.add(backLight);
  scene.add(light);
  scene.add(shadowLight);
}

function createPigs(){
  pig = new Pig();
  scene.add(pig.threegroup);
  var angx = 0;
  var da = Math.PI*2 /20;

  for (var i=0; i<100; i++){

    var planet = new Planet();
    var d = 200 + Math.random()*400;
    angx += da;
    planet.threegroup.position.x = Math.cos(angx)*d;
    planet.threegroup.position.y = -500 + Math.random()*1000;
    planet.threegroup.position.z = Math.sin(angx)*d;

    scene.add(planet.threegroup);
  }


}

Pig = function(){
  this.threegroup = new THREE.Group();
  this.whiteMat = new THREE.MeshLambertMaterial ({
    color: 0xffffff,
    shading:THREE.FlatShading
  });

  this.blackMat = new THREE.MeshLambertMaterial ({
    color: 0x000000,
    shading:THREE.FlatShading
  });

  this.darkpinkMat = new THREE.MeshLambertMaterial ({
    color: 0xEA5E65,
    shading:THREE.FlatShading
  });

  this.pinkMat = new THREE.MeshLambertMaterial ({
    color: 0xFFABB4,
    shading:THREE.FlatShading
  });

  this.greenMat = new THREE.MeshLambertMaterial ({
    color: 0x6ec098,
    shading:THREE.FlatShading
  });

  this.orangeMat = new THREE.MeshLambertMaterial ({
    color: 0xef704f,
    shading:THREE.FlatShading
  });

  this.yellowMat = new THREE.MeshLambertMaterial ({
    color: 0xd7a25e,
    shading:THREE.FlatShading
  });

  this.brownMat = new THREE.MeshLambertMaterial ({
    color: 0xE1AF6D,
    shading:THREE.FlatShading
  });

  this.darkbrownMat = new THREE.MeshLambertMaterial ({
    color: 0x885D40,
    shading:THREE.FlatShading
  });

  this.ddarkbrownMat = new THREE.MeshLambertMaterial ({
    color: 0xFCD253,
    shading:THREE.FlatShading
  });


  this.wireMat = new THREE.LineBasicMaterial ({
    color:0xffffff,
    linewidth:1,
    fog : true
  });




  var bodyGeom = new THREE.BoxGeometry(100, 100, 100);
  var spotGeom = new THREE.BoxGeometry(20,20, 20);
  var spotGeom2 = new THREE.BoxGeometry(10,10, 10);
    var noseGeom = new THREE.BoxGeometry(10,5, 10);
  var tailGeom  = new THREE.BoxGeometry(10,10, 30);
  tailGeom.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, -20 ) );
  var faceGeom  = new THREE.BoxGeometry(100,100, 100);
  var ringGeom = new THREE.TorusGeometry(200, 3, 4, 4);
  var ringGeom2 = new THREE.TorusGeometry(50, 3, 4, 4);
  var playGeom = new THREE.BoxGeometry(800, 50, 50);
    var playGeom2 = new THREE.BoxGeometry(200, 20, 200);
  var mhandGeom = new THREE.BoxGeometry(150, 450, 150);
  var lbodyGeom = new THREE.BoxGeometry(150, 150, 280);
  var rearGeom = new THREE.BoxGeometry(25, 15, 25);
var armGeom = new THREE.BoxGeometry(25, 50, 25);
var hornGeom = new THREE.BoxGeometry(15, 35, 15);
var mouthGeom = new THREE.BoxGeometry(35, 15, 35);
var cmouthGeom = new THREE.BoxGeometry(60, 70, 60);

var wireGeom1 = new THREE.BoxGeometry(2, 1000, 2);

  var wireGeom = new THREE.Geometry();
  wireGeom.vertices.push(
    new THREE.Vector3( 0, 0, 0 ),
    new THREE.Vector3( 0, 2000, 0 )
  );


  this.body = new THREE.Mesh(bodyGeom, this.pinkMat);

  // SPOTS

  this.spot1 = new THREE.Mesh(spotGeom, this.whiteMat);
  this.spot1.position.y = 41;
  this.spot1.position.x = 41;
  this.spot1.position.z = 25;

  this.spot2 = new THREE.Mesh(spotGeom, this.whiteMat);
  this.spot2.scale.set(2,2,2);
  this.spot2.position.y = 31;
  this.spot2.position.x = -31;
  this.spot2.position.z = -31;

  this.spot3 = new THREE.Mesh(spotGeom, this.whiteMat);
  this.spot3.scale.set(2.5,2.5,2.5);
  this.spot3.position.y = -26;
  this.spot3.position.x = 26;
  this.spot3.position.z = 26;

  this.spot4 = new THREE.Mesh(spotGeom, this.whiteMat);
  this.spot4.position.y = -41;
  this.spot4.position.x = 41;
  this.spot4.position.z = -41;

  // TAIL

  this.tail = new THREE.Mesh( tailGeom, this.pinkMat);
  this.tail.position.y = 45;
  this.tail.position.z = -60;

  // FACE

  this.face = new THREE.Mesh(faceGeom, this.pinkMat);
  this.face.position.z = 100;

  // NOSTRILS

  this.nostril1 = new THREE.Mesh(spotGeom, this.blackMat);
  this.nostril1.scale.set(.3,.3,.3);
  this.nostril2 = this.nostril1.clone();
  this.nostril1.position.z = this.nostril2.position.z =160;
  this.nostril1.position.y = this.nostril2.position.y =10;
  this.nostril1.position.x = -13;
  this.nostril2.position.x = 13;

  this.nose = new THREE.Mesh(noseGeom, this.darkpinkMat);
  this.nose.scale.set(4,5,4);
  this.nose.position.x = 0.5;
  this.nose.position.y = 10;
  this.nose.position.z = 141;

  // EYES

  this.leftEye = new THREE.Mesh(spotGeom, this.whiteMat);
  this.leftEye.scale.set(1,1.5,2.5);
  this.leftEye.position.x = 41;
  this.leftEye.position.y = 26;
  this.leftEye.position.z = 120;

  this.rightEye = this.leftEye.clone();
  this.rightEye.position.x = -41;

  // IRIS

  this.leftIris = new THREE.Mesh(spotGeom, this.blackMat);
  this.leftIris.scale.set(.5,.5,.5);
  this.leftIris.position.x = 50;
  this.leftIris.position.y = 26;
  this.leftIris.position.z = 140;

  this.rightIris = this.leftIris.clone();
  this.leftIris.position.x = -50;

  // EARS

  this.leftEar = new THREE.Mesh(spotGeom, this.darkpinkMat);
  this.leftEar.position.x = 60;
  this.leftEar.position.y = 40;
  this.leftEar.position.z = 60;

  this.leftEar2 = new THREE.Mesh(spotGeom2, this.darkpinkMat);
  this.leftEar2.position.x = 80;
  this.leftEar2.position.y = 40;
  this.leftEar2.position.z = 60;

  this.rightEar = this.leftEar.clone();
  this.leftEar.position.x = -60;

  this.rightEar2 = this.leftEar2.clone();
  this.leftEar2.position.x = -80;

  // MOUTH
  this.mouth = new THREE.Mesh(spotGeom, this.blackMat);
  this.mouth.scale.set(.5,.5,.5);
  this.mouth.position.y = -40;
  this.mouth.position.z = 141;

  // LIPS
  this.lips = new THREE.Mesh(spotGeom, this.blackMat);
  this.lips.scale.set(2,.5,1);
  this.lips.position.y = -55;
  this.lips.position.z = 140;

  // RINGS
  this.ring1 = new THREE.Mesh(ringGeom, this.yellowMat);
  this.ring1.position.y = 600;
  this.ring1.position.z = 0;
  this.ring1.rotation.x = -Math.PI/4;

  this.ring2 = new THREE.Mesh(ringGeom, this.orangeMat);
  this.ring2.scale.set(1.3,1.3,1.3);
  this.ring2.position.y = 600;
  this.ring2.position.z = 25;
  this.ring2.rotation.x = -Math.PI;

  this.ring3 = new THREE.Mesh(ringGeom, this.greenMat);
  this.ring3.position.y = 600;
  this.ring3.position.z = 50;
  this.ring3.rotation.x = -Math.PI;

  this.ring4 = new THREE.Mesh(ringGeom2, this.yellowMat);
  this.ring4.position.y = 500;
  this.ring4.position.z = 50;
  this.ring4.rotation.x = -Math.PI;

  // LEGS

  this.leg1 = new THREE.Mesh(spotGeom, this.darkpinkMat);
  this.leg1.position.x = -40;
  this.leg1.position.y = -60;
  this.leg1.position.z = -40;

  this.leg2 = this.leg1.clone();
  this.leg2.position.x = 40;

  this.leg3 = this.leg1.clone();
  this.leg3.position.z = 40;

  this.leg4 = this.leg3.clone();
  this.leg4.position.x = 40;

  // UDDER
  this.udder = new THREE.Mesh(spotGeom, this.pinkMat);
  this.udder.scale.set(2,1,2);
  this.udder.position.y = -55;
  this.udder.position.z = -10;


  this.play = new THREE.Mesh(playGeom, this.greenMat);
  this.play.position.y = -110;
  this.play.position.z = 40;
  this.play.rotation.x = -Math.PI;

  //handmonkey
  this.leftHand = new THREE.Mesh(mhandGeom, this.brownMat);
  this.leftHand.scale.set(.5,.5,.5);
  this.leftHand.position.y = -300;
  this.leftHand.position.z = 60;

  this.lbody = new THREE.Mesh(lbodyGeom, this.brownMat);
  this.lbody.scale.set(.5,.5,.5);
  this.lbody.position.y = -400;
  this.lbody.position.z = 30;

  this.rleftEar = new THREE.Mesh(rearGeom, this.brownMat);
  this.rleftEar.position.x = 100;
  this.rleftEar.position.y = -80;
  this.rleftEar.position.z = 60;

  this.rightFinger = this.rleftEar.clone();
  this.rightFinger.position.x = -100;
//
  this.rleftArm = new THREE.Mesh(armGeom, this.greenMat);
  this.rleftArm.position.x = 100;
  this.rleftArm.position.y = -230;
  this.rleftArm.position.z = 40;

  this.rightArm = this.rleftArm.clone();
  this.rightArm.position.x = -100;

  // EYES

  this.rleftEye = new THREE.Mesh(spotGeom, this.whiteMat);
  this.rleftEye.scale.set(1,2.5,1.5);
  this.rleftEye.position.x = 30;
  this.rleftEye.position.y = -216;
  this.rleftEye.position.z = 70;

  this.lrightEye = this.rleftEye.clone();
  this.lrightEye.position.x = -30;

  // IRIS

  this.rleftIris = new THREE.Mesh(spotGeom, this.blackMat);
  this.rleftIris.scale.set(.5,.5,.5);
  this.rleftIris.position.x = 41;
  this.rleftIris.position.y = -219;
  this.rleftIris.position.z = 80;

  this.lrightIris = this.rleftIris.clone();
  this.lrightIris.position.x = -41;
//
  this.lefteyelid = new THREE.Mesh(spotGeom, this.darkbrownMat);

  this.lefteyelid.position.x = 40;
  this.lefteyelid.position.y = -206;
  this.lefteyelid.position.z = 80;

  this.righteyelid = this.lefteyelid.clone();
  this.righteyelid.position.x = -40;
//
this.amouth = new THREE.Mesh(mouthGeom, this.darkbrownMat);

this.amouth.position.y = -250;
this.amouth.position.z = 113;

  this.bmouth= this.amouth.clone();
  this.amouth.position.y = -270;

 this.cmouth = new THREE.Mesh(cmouthGeom, this.ddarkbrownMat);
 this.cmouth.position.y = -255;
 this.cmouth.position.z = 86;
//

this.Ear = new THREE.Mesh(spotGeom2, this.brownMat);

this.Ear.position.x = 31;
this.Ear.position.y = -216;
this.Ear.position.z = 70;

//this.lrightEye = this.rleftEye.clone();
//this.lrightEye.position.x = -31;
//

this.lefthorn = new THREE.Mesh(hornGeom, this.darkbrownMat);

this.lefthorn.position.x = 25;
this.lefthorn.position.y = -176;
this.lefthorn.position.z = 80;

this.righthorn = this.lefthorn.clone();
this.righthorn.position.x = -25;
//
this.aleg1 = new THREE.Mesh(armGeom, this.darkbrownMat);
this.aleg1.position.x = -30;
this.aleg1.position.y = -450;
this.aleg1.position.z = -40;

this.aleg2 = this.aleg1.clone();
this.aleg2.position.x = 30;

this.aleg3 = this.aleg1.clone();
this.aleg3.position.z = 40;

this.aleg4 = this.aleg3.clone();
this.aleg4.position.x = 30;

  // WIRE
  this.wire = new THREE.Line(wireGeom, this.wireMat);
  this.wire.position.z = 50;

  this.wire1 = new THREE.Mesh(wireGeom1, this.wireMat);
  this.wire1.position.x = 100;
  this.wire1.position.z = 40;
  this.wire2 = this.wire1.clone();
  this.wire2.position.x = -100;

  this.play2 = new THREE.Mesh(playGeom2, this.greenMat);
  this.play2.position.x = 0;
  this.play2.position.y = -485;
  this.play2.position.z = 40;

  this.threegroup.add(this.body);
  this.threegroup.add(this.spot1);
  this.threegroup.add(this.spot2);
  this.threegroup.add(this.spot3);
  this.threegroup.add(this.spot4);
  this.threegroup.add(this.tail);
  this.threegroup.add(this.face);
  this.threegroup.add(this.nostril1);
  this.threegroup.add(this.nostril2);
  this.threegroup.add(this.nose);

  this.threegroup.add(this.leftEye);
  this.threegroup.add(this.rightEye);
  this.threegroup.add(this.leftIris);
  this.threegroup.add(this.rightIris);
  this.threegroup.add(this.leftEar);
  this.threegroup.add(this.rightEar);
  this.threegroup.add(this.leftEar2);
  this.threegroup.add(this.rightEar2);
  this.threegroup.add(this.leftHorn);
  this.threegroup.add(this.rightHorn);
  this.threegroup.add(this.mouth);
  this.threegroup.add(this.lips);
  //this.threegroup.add(this.ring1);
  //this.threegroup.add(this.ring2);
  this.threegroup.add(this.ring3);
 this.threegroup.add(this.ring4);
  this.threegroup.add(this.leg1);
  this.threegroup.add(this.leg2);
  this.threegroup.add(this.leg3);
  this.threegroup.add(this.leg4);
  this.threegroup.add(this.udder);
  this.threegroup.add(this.wire);
  this.threegroup.add(this.wire1);
  this.threegroup.add(this.wire2);
  this.threegroup.add(this.play);

  this.threegroup.add(this.leftHand);
    this.threegroup.add(this.lbody);
  this.threegroup.add(this.rleftEar);
  this.threegroup.add(this.rightFinger);
  this.threegroup.add(this.rleftArm);
  this.threegroup.add(this.rightArm);
  this.threegroup.add(this.rleftEye);
  this.threegroup.add(this.lrightEye);
  this.threegroup.add(this.rleftIris);
  this.threegroup.add(this.lrightIris);
  this.threegroup.add(this.lefteyelid);
  this.threegroup.add(this.righteyelid);
  this.threegroup.add(this.lefthorn);
  this.threegroup.add(this.righthorn);
  this.threegroup.add(this.amouth);
  this.threegroup.add(this.bmouth);
  this.threegroup.add(this.cmouth);
  this.threegroup.add(this.aleg1);
  this.threegroup.add(this.aleg2);
  this.threegroup.add(this.aleg3);
  this.threegroup.add(this.aleg4);
  this.threegroup.add(this.Ear);
this.threegroup.add(this.play2);




  //this.threegroup.add(this.wire);

  this.threegroup.traverse( function ( object ) {
		if ( object instanceof THREE.Mesh ) {
			object.castShadow = true;
			object.receiveShadow = true;
		}
	} );
}




Pig.prototype.blink = function(){
  TweenMax.to(this.leftEye.scale, .3, {y:0, ease:Strong.easeInOut, yoyo:true, repeat:3});

  TweenMax.to(this.rightEye.scale, .3, {y:0, ease:Strong.easeInOut, yoyo:true, repeat:3});

  TweenMax.to(this.leftIris.scale, .3, {y:0, ease:Strong.easeInOut, yoyo:true, repeat:3});
  TweenMax.to(this.rightIris.scale, .3, {y:0, ease:Strong.easeInOut, yoyo:true, repeat:3});
  TweenMax.to(this.lbody.rotation, speed*1.3, {
    x: 0,
    ease: Back.easeOut
  });
}

Planet = function (){

  var colors = [0xFF94A3, 0x6abc94, 0xee7351, 0xcd9b56,0xf8f8f8 ];
  var col = colors[Math.floor(Math.random()*colors.length)];
  this.threegroup = new THREE.Group();
  this.blackMat = new THREE.MeshLambertMaterial ({
    color: col,
    shading:THREE.FlatShading
  });
  this.wireMat = new THREE.LineBasicMaterial ({
   color:0xFF94A3,
    linewidth:.3,
    fog : true
  });

  //var wireGeom = new THREE.Geometry();
  //wireGeom.vertices.push(
    //new THREE.Vector3( 0, 0, 0 ),
    //new THREE.Vector3( 0, 1000, 0 )
  //);
  var s = 60 + Math.random()*60

  var geom = new THREE.TorusGeometry( 10, 3, 16, 100 )

  // WIRE
  //this.wire = new THREE.Line(wireGeom, this.wireMat);

  this.core = new THREE.Mesh(geom, this.blackMat);
  this.threegroup.add(this.core);
  //this.threegroup.add(this.wire);
}

var angleLegs = 3;




function loop(){
  angleLegs += .2;
  var sin = Math.sin(angleLegs);
  var cos = Math.cos(angleLegs);

  render();



  pig.threegroup.rotation.y +=0.01;

  pig.ring1.rotation.z += .005;
//  pig.ring2.rotation.z -= .005;
//  pig.ring3.rotation.z += .01;
  pig.ring4.rotation.z += .1;


  pig.leg1.position.z = -40 + cos*10;
  pig.leg2.position.z = -40 + sin*10;
  pig.leg3.position.z = 40 + sin*10;
  pig.leg4.position.z = 40 + cos*10;
  pig.threegroup.position.y = cos*10;

  pig.leftEar.position.y = pig.rightEar.position.y = 35 + Math.sin(angleLegs)*5;
  pig.mouth.position.y = -40 + sin*5;
  pig.mouth.scale.set(1, .5 + Math.abs(cos)*.5, 1);
  pig.lips.position.y = -50 + sin*5;
  pig.tail.rotation.x = sin*Math.PI/3;
  pig.udder.position.y = -55 + sin*10;
  pig.ring4.position.y = 80 + sin*10;

  pig.aleg1.position.z = -20 + cos*10;
  pig.aleg2.position.z = -20 + sin*10;
  pig.aleg3.position.z = 20 + sin*10;
  pig.aleg4.position.z = 20 + cos*10;


  particle.rotation.x += 0.0000;
  particle.rotation.y -= 0.0040;
  circle.rotation.x -= 0.0050;
  circle.rotation.y -= 0.0060;
  skelet.rotation.x -= 0.0040;
  skelet.rotation.y += 0.0050;


  requestAnimationFrame(loop);
  }


function render(){
  if (controls) controls.update();

  renderer.render(scene, camera);
}


init();
createLights();
createPigs();
pig.blink();
blinkInterval = setInterval(function(){
  pig.blink();
}, 4000);

loop();
