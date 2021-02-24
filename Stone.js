class Stone
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			}
		this.x=x;
		this.y=y;
		this.radius=radius
		this.image = loadImage("importedimg/stone.png")
		this.body=Bodies.circle(this.x, this.y, this.radius/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var address=this.body.position;		

			push()
			translate(address.x, address.y);
	        rotate(this.angle)
			imageMode(CENTER)
			image(this.image,0,0,this.radius, this.radius);
			pop()
			
	}
}