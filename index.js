class Particle {
  constructor ( startingPos, startingVel ) {
    this.position = startingPos;
    this.velocity = startingVel;
    this.SIZE     = 25;
  }

  update () {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    this.wrap();
  }

  wrap () {
    if (this.position.x < 0) {
      this.position.x = 800;
    } else if (this.position.x > 800) {
      this.position.x = 0;
    };

    if (this.position.y < 0) {
      this.position.y = 600;
    } else if (this.position.y > 600) {
      this.position.y = 0;
    }
  }

  draw () {
    this.update();
    ellipse ( this.position.x, this.position.y, this.SIZE, this.SIZE );
  }
}

let particles = [];

function setup () {
  createCanvas( 800, 600 );

  for( let i = 0; i < 100; i++ ) {
    particles[i] = new Particle( 
      { x: random( 800 ),   y: random( 600 ) }, 
      { x: random( -5, 5 ), y: random( -5, 5 ) } );
  }

  console.log(particles);
}

function draw () {
  background( 50 );
  
  for( let i = 0; i < 100; i++ ) {
    particles[i].draw();
  }
}
