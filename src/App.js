import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const mainCursor = useRef(null);

  useEffect(() => {
    // document.addEventListener('mousemove', (e) => {
    //   const { clientX, clientY } = e;

    //   const mouseX = clientX;
    //   const mouseY = clientY;

    //   mainCursor.current.style.transform = `translate3d(${mouseX - mainCursor.current.clientWidth / 2}px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
    // });
    // onMouseMove 

    // document.addEventListener('mousemove', (e) => {
    //   // Make the circle avoid the mouse
    //   const circle = document.querySelector('.circle');
    //   const { clientX, clientY } = e;

    //   const mouseX = clientX;
    //   const mouseY = clientY;

    //   // Get the bounds of the screen
    //   const screenX = window.innerWidth;
    //   const screenY = window.innerHeight;

    //   // Get the current location of the circle
    //   const circleX = circle.offsetLeft;
    //   const circleY = circle.offsetTop;

    //   // Get the distance between the mouse and the circle
    //   const distanceX = mouseX - circleX;
    //   const distanceY = mouseY - circleY;

    //   // console.log("Distance X: " + distanceX, "Distance Y: " + distanceY, "Screen X: " + screenX, "Screen Y: " + screenY)

    //   // console.log("MouseX", mouseX, "ScreenX", screenX, "CircleX", circleX, "DistanceX", distanceX)
      
    //   // if (mouseX+100 > screenX) {
    //   //   // console.log("out of bounds X", distanceX)
    //   //   circle.style.transform = `translate3d(${distanceX-100}px, ${distanceY-100}px, 0)`;
    //   // }

    //   // if (mouseY+100 > screenY) {
    //   //   // console.log("out of bounds Y")
    //   //   circle.style.transform = `translate3d(${distanceX-100}px, ${distanceY-100}px, 0)`;
    //   // }

    //   // if (mouseX-100 < 0) {
    //   //   // console.log("out of bounds X")
    //   //   circle.style.transform = `translate3d(${distanceX+150}px, ${distanceY-100}px, 0)`;
    //   // }

    //   // if (mouseY-100 < 0) {
    //   //   // console.log("out of bounds Y")
    //   //   circle.style.transform = `translate3d(${distanceX+100}px, ${distanceY+150}px, 0)`;
    //   // }

    //   if (mouseY > circleY+50) {
    //     // console.log(circleY+50 < screenY)
    //     if(circleY+50 < screenY && circleY-50 >! 0) {
    //       // console.log("YeS?")
    //       circle.style.transform = `translate3d(${distanceX-100}px, ${distanceY-100}px, 0)`;
    //     }

    //     if (circleY-50 < screenY && circleX-50 < screenX) {
    //       circle.style.transform = `translate3d(${distanceX-100}px, ${distanceY-100}px, 0)`;
    //     }


    //     // circle.style.transform = `translate3d(${distanceX+50}px, ${distanceY+50}px, 0)`;
    //   }

    //   if (mouseX > circleX+50) {
    //     // console.log(circleY+50 < screenY)
    //     if(circleX+50 < screenX && circleX+50 >! 0) {
    //       circle.style.transform = `translate3d(${distanceX-100}px, ${distanceY-100}px, 0)`;
    //     }

    //     if (circleX+50 < screenX && circleY+50 < screenY) {
    //       circle.style.transform = `translate3d(${distanceX-100}px, ${distanceY-100}px, 0)`;
    //     }
    //   }

    //   if (mouseY < circleY-50) {
    //     // console.log(circleY+50 < screenY)
    //     if(circleY-50 > 0 && circleX-50 >! 0) {
    //       // console.log("YeS?")
    //       circle.style.transform = `translate3d(${distanceX+100}px, ${distanceY+100}px, 0)`;
    //     }

    //     if(circleY-50 > 0 && circleX-50 > 0) {
    //       // console.log("YeS?")
    //       circle.style.transform = `translate3d(${distanceX-100}px, ${distanceY-100}px, 0)`;
    //     }
    //   }

    //   if (mouseX < circleX-50) {
    //     // console.log(circleY+50 < screenY)
    //     if(circleX-50 > 0 && circleY-50 >! 0) {
    //       // console.log("YeS?")
    //       circle.style.transform = `translate3d(${distanceX+100}px, ${distanceY+100}px, 0)`;
    //     }

    //     if(circleX-50 > 0 && circleY-50 > 0) {
    //       // console.log("YeS?")
    //       circle.style.transform = `translate3d(${distanceX+100}px, ${distanceY-100}px, 0)`;
    //     }
    //   }

    //   // if (distanceX < 0) {
    //   //   circle.style.transform = `translate3d(${distanceX}px, ${distanceY}px, 0)`;
    //   // } else {
    //   //   circle.style.transform = `translate3d(${distanceX}px, ${distanceY}px, 0)`;
    //   // }

    //   // if (distanceY < 0) {
    //   //   circle.style.transform = `translate3d(${distanceX}px, ${distanceY}px, 0)`;
    //   // } else {
    //   //   circle.style.transform = `translate3d(${distanceX}px, ${distanceY}px, 0)`;
    //   // }

     
    //   // Check to see if the circle is about to go out of bounds
    //   if (circleX + mouseX-100 < 0 || circleX + mouseX-100 > screenX) {
    //     // If it is, don't move the circle
    //     circle.style.transform = `translate3d(${distanceX+100}px, ${distanceY+100}px, 0)`;
    //   }
    //   if (circleY + mouseY-100 < 0 || circleY + mouseY-100 > screenY) {
    //     // If it is, don't move the circle
    //     circle.style.transform = `translate3d(${distanceX-100}px, ${distanceY-100}px, 0)`;
    //   }



    //   // Move the circle

    //   // circle.style.transform = `translate3d(${distanceX}px, ${distanceY}px, 0)`;


    //   // circle.style.transform = `translate3d(${mouseX + circle.clientWidth}px, ${mouseY + circle.clientHeight}px, 0)`;

    //   // Make the circle avoid the mouse
    // });
    
    document.addEventListener("mousemove", function (evt) {
      var $this = document.querySelector('.circle');
      var circle = document.querySelector('.circle')
      var circle1 = document.getElementById('circle1').getBoundingClientRect();

      var mouseX = evt.clientX;
      var mouseY = evt.clientY;
      var circleX = circle1.left;
      var circleY = circle1.top;

      var distanceX = mouseX - circleX;
      var distanceY = mouseY - circleY;
      var screenX = window.innerWidth;
      var screenY = window.innerHeight;

      
      // console.log($this)

      // Check to see if the circle is about to go out of bounds
      // if (circleX + mouseX < 0 || circleX + mouseX > screenX) {
      //   // If it is, don't move the circle
      //   if (distanceX < 0) {
      //     console.log("OUT")
      //     $this.style.transform = `translate3d(${distanceX+150}px, ${distanceY}px, 0)`;
      //   } else {
      //     $this.style.transform = `translate3d(${distanceX-150}px, ${distanceY}px, 0)`;
      //   }
        
      // } else {
      //   $this.style.transform = `translate3d(${distanceX/Math.random()}px, ${distanceY/Math.random()}px, 0)`;
      // }
      // if (circleY + mouseY < 0 || circleY + mouseY > screenY) {
      //   // If it is, don't move the circle
      //   if (distanceY < 0) {
      //     console.log("OUT")
      //     $this.style.transform = `translate3d(${distanceX}px, ${distanceY+150}px, 0)`;
      //   } else {
      //     $this.style.transform = `translate3d(${distanceX}px, ${distanceY-150}px, 0)`;
      //   }
      // } else {
      //   $this.style.transform = `translate3d(${distanceX*(Math.random()*150)}px, ${distanceY*(Math.random()*150)}px, 0)`;
      // }

      // console.log(screenX, screenY)

      let randomX = Math.random()*200;
      let randomY = Math.random()*200;

      let randomXPos = Math.floor(Math.random() * (screenX - 75 + 1));
      let randomYPos = Math.floor(Math.random() * (screenY - 75 + 1));

      // If the mouse is about to touch the circle, move the circle away from the mouse
      // console.log(mouseX, circleX, evt)
      // document.addEventListener('mousemove', (e) => {
        // console.log(document.querySelector('.circle'))
        if (mouseX > circleX) {
          // circle.style.transform = `translate3d(${randomXPos}px, ${randomYPos}px, 0)`;
        } 
        // else {
        //   $this.style.transform = `translate3d(${randomXPos}px, ${randomYPos}px, 0)`;
        // }

        if (mouseY > circleY) {
          // circle.style.transform = `translate3d(${randomXPos}px, ${randomYPos}px, 0)`;
        } 
        // else {
        //   $this.style.transform = `translate3d(${randomXPos}px, ${randomYPos}px, 0)`;
        // }

      //  console.log(mouseY, circle1)

        // if (mouseX-100 < screenX) {
        //   let calc = screenX < mouseX+100;
        //   if (calc) {
        //     // console.log(calc, screenX, mouseX)
        //     circle.style.transform = `translate3d(${mouseX+100}px, ${mouseY-100}px, 0)`;
        //   }
        // }

        // if (mouseY-100 < screenY) {
        //   let calc = screenY < mouseY+100;
        //   // console.log(calc, screenY, mouseY)
        //   if (calc) {
        //     // console.log(calc, screenY, mouseY)
        //     circle.style.transform = `translate3d(${mouseX+100}px, ${mouseY+100}px, 0)`;
        //   }
          
        // }

        // if (mouseX+100 > screenX) {
        //   circle.style.transform = `translate3d(${mouseX-100}px, ${mouseY-100}px, 0)`;
        // }

        // if (mouseY+100 > screenY) {
        //   circle.style.transform = `translate3d(${mouseX-100}px, ${mouseY-100}px, 0)`;
        // }

        if (mouseY+100 > circleY) {
          circle.style.transform = `translate3d(${circleX}px, ${mouseY+100*2}px, 0)`;
        }

        if (mouseX+100 > circleX) {
          circle.style.transform = `translate3d(${mouseX+100*2}px, ${circleY}px, 0)`;
        }

        if (mouseY-100 < circleY) {
          circle.style.transform = `translate3d(${circleX}px, ${mouseY-100*2}px, 0)`;
        }

        if (mouseX-100 < circleX) {
          circle.style.transform = `translate3d(${mouseX-100*2}px, ${circleY}px, 0)`;
        }
        

      
          // const { clientX, clientY } = e;
          // console.log("CLIENTS", clientX, clientY)
          // const circle = document.querySelector('.circle');
          // console.log(circle)
      // })
      
      // Animate the transform
      circle.style.transition = 'transform 1s ease';
    });
    return () => {};
  }, []);

  function evadeMouse(evt) {
    console.log(evt)
    var $this = evt.target;
    var mouseX = evt.clientX;
    var mouseY = evt.clientY;
    var circleX = $this.offsetLeft;
    var circleY = $this.offsetTop;
    var distanceX = mouseX - circleX;
    var distanceY = mouseY - circleY;
    var screenX = window.innerWidth;
    var screenY = window.innerHeight;

    // Check to see if the circle is about to go out of bounds
    var corner = $this.offset(),
        center = {x: corner.left + $this.width() / 2, y: corner.top + $this.height() / 2},
        dist = new Math.Vector(center.x - evt.pageX, center.y - evt.pageY),
        closest = $this.outerWidth() / 2;

    if (dist.length() < closest) {
        var angle = dist.angle(),
            x = Math.cos(angle) * closest,
            y = Math.sin(angle) * closest;
        $this.css({left: center.x - x, top: center.y - y});
    }

    var delta = dist.normal().multeq(closest).sub(dist),
        newCorner = {x: corner.left + delta.x, y: corner.top + delta.y};

    var padding = parseInt($this.css('padding'), 10);
    if (newCorner.x < padding) {
        newCorner.x = padding;
    }
    if (newCorner.y < padding) {
        newCorner.y = padding;
    }
    if (newCorner.x + $this.outerWidth() > screenX - padding) {
        newCorner.x = screenX - padding - $this.outerWidth();
    }
    if (newCorner.y + $this.outerHeight() > screenY - padding) {
        newCorner.y = screenY - padding - $this.outerHeight();
    }

    $this.css({left: newCorner.x, top: newCorner.y});

    // Move the circle
    $this.css({left: mouseX - $this.width() / 2, top: mouseY - $this.height() / 2});

    // Make the circle avoid the mouse

    if (distanceX < 0) {
      $this.css({left: distanceX + $this.width() / 2, top: distanceY + $this.height() / 2});
    } else {
      $this.css({left: distanceX + $this.width() / 2, top: distanceY + $this.height() / 2});
    }

    if (distanceY < 0) {
      $this.css({left: distanceX + $this.width() / 2, top: distanceY + $this.height() / 2});
    } else {
      $this.css({left: distanceX + $this.width() / 2, top: distanceY + $this.height() / 2});
    }
      

  }

  function moveCircle(evt) {
    // Make circle move within the bounds of the screen
    // console.log(evt)
    
    var $this = evt.target;
    var mouseX = evt.clientX;
    var mouseY = evt.clientY;
    var circleX = $this.offsetLeft;
    var circleY = $this.offsetTop;

    var distanceX = mouseX - circleX;
    var distanceY = mouseY - circleY;
    var screenX = window.innerWidth;
    var screenY = window.innerHeight;

    // Check to see if the circle is about to go out of bounds
    // if (circleX + mouseX < 0 || circleX + mouseX > screenX) {
    //   // If it is, don't move the circle
    //   if (distanceX < 0) {
    //     console.log("OUT")
    //     $this.style.transform = `translate3d(${distanceX+150}px, ${distanceY}px, 0)`;
    //   } else {
    //     $this.style.transform = `translate3d(${distanceX-150}px, ${distanceY}px, 0)`;
    //   }
      
    // } else {
    //   $this.style.transform = `translate3d(${distanceX/Math.random()}px, ${distanceY/Math.random()}px, 0)`;
    // }
    // if (circleY + mouseY < 0 || circleY + mouseY > screenY) {
    //   // If it is, don't move the circle
    //   if (distanceY < 0) {
    //     console.log("OUT")
    //     $this.style.transform = `translate3d(${distanceX}px, ${distanceY+150}px, 0)`;
    //   } else {
    //     $this.style.transform = `translate3d(${distanceX}px, ${distanceY-150}px, 0)`;
    //   }
    // } else {
    //   $this.style.transform = `translate3d(${distanceX*(Math.random()*150)}px, ${distanceY*(Math.random()*150)}px, 0)`;
    // }

    let randomX = Math.random()*200;
    let randomY = Math.random()*200;

    let randomXPos = Math.floor(Math.random() * (screenX - 100 + 1));
    let randomYPos = Math.floor(Math.random() * (screenY - 100 + 1));

    // If the mouse is about to touch the circle, move the circle away from the mouse
    console.log(mouseX, circleX, evt)
    document.addEventListener('mousemove', (e) => {
      if (mouseX > circleX) {
        $this.style.transform = `translate3d(${randomXPos}px, ${randomYPos}px, 0)`;
      } else {
        $this.style.transform = `translate3d(${randomXPos}px, ${randomYPos}px, 0)`;
      }

      if (mouseY > circleY) {
        $this.style.transform = `translate3d(${randomXPos}px, ${randomYPos}px, 0)`;
      } else {
        $this.style.transform = `translate3d(${randomXPos}px, ${randomYPos}px, 0)`;
      }

    
        const { clientX, clientY } = e;
        // console.log("CLIENTS", clientX, clientY)
        const circle = document.querySelector('.circle');
        // console.log(circle)
    })
     
    // Animate the transform
    $this.style.transition = 'transform 0.1s ease';


    // Move the circle
    // $this.style.transform = `translate3d(${mouseX - $this.offsetLeft / 2}px, ${mouseY - $this.offsetHeight / 2}px, 0)`;

    
  }



  return (
    <div className="App" >
      {/* Create a cricle */}
      {/* <span className="bumper"> */}
        <span className='circle' id='circle1'></span>
      {/* </span> */}
      {/* Create a cricle */}
      {/* <div className='circle'>

      </div> */}
      {/* <div className='testing-con' ref={mainCursor}>
          <div className='testing-inner'><div className='testing'></div></div>
        </div> */}
    </div>
  );
}

export default App;
