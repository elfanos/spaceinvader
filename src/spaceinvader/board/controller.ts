import { get } from "lodash";
// Frank Poth 03/09/2018

/* The keyDownUp handler was moved to the main file. */

// const Controller = function() {

//     this.left  = new Controller.ButtonInput();
//     this.right = new Controller.ButtonInput();
//     this.up    = new Controller.ButtonInput();

//     this.keyDownUp = function(type, key_code) {

//       var down = (type == "keydown") ? true : false;

//       switch(key_code) {

//         case 37: this.left.getInput(down);  break;
//         case 38: this.up.getInput(down);    break;
//         case 39: this.right.getInput(down);

//       }

//     };

//   };

//   Controller.prototype = {

//     constructor : Controller

//   };

//   Controller.ButtonInput = function() {

//     this.active = this.down = false;

//   };

//   Controller.ButtonInput.prototype = {

//     constructor : Controller.ButtonInput,

//     getInput : function(down) {

//       if (this.down != down) this.active = down;
//       this.down = down;

//     }

//   };

// Frank Poth 02/28/2018

/* In this example, the controller only alerts the user whenever they press a key,
but it also defines the ButtonInput class, which is used for tracking button states. */

// const Controller = function() {

//   this.down  = new Controller.ButtonInput();
//   this.left  = new Controller.ButtonInput();
//   this.right = new Controller.ButtonInput();
//   this.up    = new Controller.ButtonInput();

//   this.keyDownUp = function(event) {

//     var down = (event.type == "keydown") ? true : false;

//     switch(event.keyCode) {

//       case 37: this.left.getInput(down);  break;
//       case 38: this.up.getInput(down);    break;
//       case 39: this.right.getInput(down); break;
//       case 40: this.down.getInput(down);

//     }

//     alert("You pressed a key (" + event.keyCode + ")!");

//   };

//   this.handleKeyDownUp = (event) => { this.keyDownUp(event); };

// };

// Controller.prototype = {

//   constructor : Controller

// };

// Controller.ButtonInput = function() {

//   this.active = this.down = false;

// };

// Controller.ButtonInput.prototype = {

//   constructor : Controller.ButtonInput,

//   getInput : function(down) {

//     if (this.down != down) this.active = down;
//     this.down = down;

//   }

// };

function ControllerKeyboard(keyCode: number, type: string, update: any) {
  switch (keyCode) {
    case 37:
      console.log("arrowleft", type);

      break;
    case 38:
      console.log("arrowup", type);
      break;
    case 39:
      console.log("arrowright", type);
      break;
    case 40:
      console.log("arrowDonw", type);
      break;
    default:
      break;
  }
}
// const Controller;

export default ControllerKeyboard;
