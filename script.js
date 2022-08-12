var x = 2;
var y = 100;
var rotate = 15;
var time = 1;


TweenMax.to(".break-se", time, {
	delay: 1,
	x: function() {
    return Math.random() * x;
  },
	y: function() {
    return Math.random() * y;
  },
	rotation: function(){
		return Math.random() * rotate;
	}
});

TweenMax.to(".break-sw", time, {
	delay: 0.7,
	x: function() {
    return Math.random() * -x;
  },
	y: function() {
    return Math.random() * y;
  },
	rotation: function(){
		return Math.random() * rotate;
	}
});

TweenMax.to(".break-nw", time, {
	delay: 0.8,
	x: function() {
    return Math.random() * -x;
  },
	y: function() {
    return Math.random() * y;
  },
	rotation: function(){
		return Math.random() * rotate;
	}
});

TweenMax.to(".break-ne", time, {
	delay: 0.9,
	x: function() {
    return Math.random() * x;
  },
	y: function() {
    return Math.random() * y;
  },
	rotation: function(){
		return Math.random() * rotate;
	}
});