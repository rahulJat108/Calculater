// ------------------calculater styling file-------------------------------------------


// --------------buttons names ----------------------
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const main = document.getElementById('main');
const bd = document.querySelector('body');

// ---------------------- id bg ----------------------------
const main_heading = document.getElementById('main_heading');
const output = document.getElementById('output ');
const items = document.getElementById('items');
const delet = document.querySelector('[deleted]');
const reset = document.querySelector('[reset]');

const cape = document.getElementById('cape');
const toogle = document.getElementById('toogle');
const num = document.querySelectorAll('[number]') ;
const previos = document.getElementById('previos');
const current = document.getElementById('current');

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

three.addEventListener('click', () => {
  three.style.backgroundColor = "  hsl(176, 100%, 44%)"
  previos.style.color = "yellow";
  current.style.color = "yellow";

  toogle.addEventListener('mouseover', () => {
    one.style.visibility = 'visible';
    two.style.visibility = 'visible'; 
    
  });
  toogle.addEventListener('mouseout', () => {
    one.style.visibility = 'hidden';
    two.style.visibility = 'hidden'; 
    three.style.visibility = 'visible';
  });
})

two.addEventListener('click', () => {
  two.style.backgroundColor = " hsl(25, 98%, 40%)"
  previos.style.color = "black";
  current.style.color = "black";

  toogle.addEventListener('mouseover', () => {
    one.style.visibility = 'visible';
    three.style.visibility = 'visible'; 
   
  });
  toogle.addEventListener('mouseout', () => {
    one.style.visibility = 'hidden';
    three.style.visibility = 'hidden'; 
    two.style.visibility = 'visible';
  });
})

one.addEventListener('click', () => {
  one.style.backgroundColor = "hsl(6deg, 63%, 50%)"
  previos.style.color = "white";
  current.style.color = "white";
  toogle.addEventListener('mouseover', () => {
    two.style.visibility = 'visible';
    three.style.visibility = 'visible'; 

  });
  toogle.addEventListener('mouseout', () => {
    three.style.visibility = 'hidden'; 
    two.style.visibility = 'hidden';
    one.style.visibility = 'visible';
  });
})

// --------------------- first button ---------------------------------------------



one.addEventListener("click", () => {

  delet.addEventListener('mouseover', () => {
    delet.style.backgroundColor = "hsl(225deg 35.08% 62.58%)";
  })
  delet.addEventListener('mouseout', () => {
    delet.style.backgroundColor = "hsl(225deg, 21%, 49%)";
  })

  reset.addEventListener('mouseover', () => {
    reset.style.backgroundColor = "hsl(225deg 35.08% 62.58%)";
  })
  reset.addEventListener('mouseout', () => {
    reset.style.backgroundColor = "hsl(225deg, 21%, 49%)";
  })

  cape.addEventListener('mouseover', () => {
    cape.style.backgroundColor = "hsl(6deg 53.53% 56.96%)";
  })
  cape.addEventListener('mouseout', () => {
    cape.style.backgroundColor = "hsl(6deg, 63%, 50%)";
  })

  bd.style.backgroundColor = "hsl(222deg, 26%, 31%)";
  main_heading.style.color = "white";

  output.style.backgroundColor = "hsl(224deg, 36%, 15%)";
  output.style.Color = "white";

  items.style.backgroundColor = "hsl(223deg, 31%, 20%)";

  //toogle bg
  toogle.style.backgroundColor = "hsl(223deg, 31%, 20%)";

  // delete button
  delet.style.backgroundColor = "hsl(225deg, 21%, 49%)";
  delet.style.boxShadow = "0 4px hsl(224deg, 28%, 35%)";
  delet.style.color = "white";

  // reset button
  reset.style.backgroundColor = "hsl(225deg, 21%, 49%)";
  reset.style.boxShadow = "0 4px hsl(224deg, 28%, 35%)";
  reset.style.color = "white";

  // equl button
  cape.style.backgroundColor = "hsl(6deg, 63%, 50%)";
  cape.style.boxShadow = "0 4px hsl(6deg, 70%, 34%)";
  cape.style.color = "white";

  //numbers buttons
  num.style.backgroundColor = "hsl(30deg, 25%, 89%)";
  num.style.boxShadow = "0 4px hsl(28deg, 16%, 65%)";
  num.style.color = "hsl(221deg, 14%, 31%)";
})

// -------------------------- second button ---------------------------------------------




two.addEventListener("click", () => {



  delet.addEventListener('mouseover', () => {
    delet.style.backgroundColor = "rgb(69 162 171)";
  })
  delet.addEventListener('mouseout', () => {
    delet.style.backgroundColor = "rgb(55, 127, 134)";
  })

  reset.addEventListener('mouseover', () => {
    reset.style.backgroundColor = "rgb(69 162 171)";
  })
  reset.addEventListener('mouseout', () => {
    reset.style.backgroundColor = "rgb(55, 127, 134)";
  })

  cape.addEventListener('mouseover', () => {
    cape.style.backgroundColor = "rgb(220 114 39)";
  })
  cape.addEventListener('mouseout', () => {
    cape.style.backgroundColor = "rgb(202, 85, 2)";
  })


  bd.style.backgroundColor = "hsl(0, 0%, 90%)";
  main_heading.style.color = "black";

  output.style.backgroundColor = "hsl(0, 0%, 93%)";
  output.style.Color = "black";

  items.style.backgroundColor = "hsl(0, 5%, 81%)";

  //toogle bg
  toogle.style.backgroundColor = "hsl(0, 5%, 81%)";

  //delete button 
  delet.style.backgroundColor = "hsl(185, 42%, 37%)";
  delet.style.boxShadow = "0 4px hsl(185, 58%, 25%)";
  delet.style.color = "white";

  //reset button
  reset.style.backgroundColor = "hsl(185, 42%, 37%)";
  reset.style.boxShadow = "0 4px hsl(185, 58%, 25%)";
  reset.style.color = "white";

  // equl button
  cape.style.backgroundColor = "hsl(25, 98%, 40%)";
  cape.style.boxShadow = "0 4px hsl(25, 99%, 27%)";
  cape.style.color = "white";

  //numbers buttons
  num.style.backgroundColor = "hsl(30deg, 25%, 89%)";
  num.style.boxShadow = "0 4px hsl(28deg, 16%, 65%)";
  num.style.color = "hsl(221deg, 14%, 31%)";
})

// ------------------------------thord button --------------------------------------------



three.addEventListener("click", () => {


  delet.addEventListener('mouseover', () => {
    delet.style.backgroundColor = "rgb(106 59 127)";
  })
  delet.addEventListener('mouseout', () => {
    delet.style.backgroundColor = "rgb(88, 7, 125)";
  })

  reset.addEventListener('mouseover', () => {
    reset.style.backgroundColor = "rgb(106 59 127)";
  })
  reset.addEventListener('mouseout', () => {
    reset.style.backgroundColor = "rgb(88, 7, 125)";
  })

  cape.addEventListener('mouseover', () => {
    cape.style.backgroundColor = "rgb(116 189 184)";
  })
  cape.addEventListener('mouseout', () => {
    cape.style.backgroundColor = "rgb(0, 224, 209)";
  })


  bd.style.backgroundColor = "hsl(268, 75%, 9%)";
  main_heading.style.color = "hsl(52, 100%, 62%)";

  output.style.backgroundColor = "hsl(268, 71%, 12%)";
  output.style.Color = "hsl(52, 100%, 62%)";

  items.style.backgroundColor = "hsl(268, 71%, 12%)";

  //toogle bg
  toogle.style.backgroundColor = "hsl(268, 71%, 12%)";

  //delete button 
  delet.style.backgroundColor = "hsl(281, 89%, 26%)";
  delet.style.boxShadow = "0 4px hsl(290, 70%, 36%)";
  delet.style.color = "hsl(52, 100%, 62%)";

  //reset button
  reset.style.backgroundColor = "hsl(281, 89%, 26%)";
  reset.style.boxShadow = "0 4px hsl(290, 70%, 36%)";
  reset.style.color = "hsl(52, 100%, 62%)";

  // equl button
  cape.style.backgroundColor = "hsl(176, 100%, 44%)";
  cape.style.boxShadow = "0 4px hsl(177, 92%, 70%)";
  cape.style.color = "hsl(221deg, 14%, 31%)";

  //numbers buttons
  num.style.backgroundColor = "rgb(52, 28, 79)";
  num.style.boxShadow = "0 4px rgb(188, 21, 244)";
  num.style.color = "hsl(52, 100%, 62%)";

  // previos.style.color = "yellow";
  
})

// num.addEventListener('click', () =>{
//   current.style.color = "yellow";
// })

