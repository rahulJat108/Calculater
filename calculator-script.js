// --------------------------------calculation program file--------------------------------------------


const button = document.querySelectorAll('button')
const operand = document.querySelectorAll('[operand]');


button.forEach(but => {
  but.addEventListener('click', function (run) {
    const butrun = (run.target.innerHTML);

    if (parseInt(butrun)) {
      current.innerHTML += butrun;
      // previos.innerHTML += butrun;


    }

    else if (butrun === 'DEL') {
      // previos.innerHTML = ''
      current.innerHTML = current.innerHTML.slice(0, -1);

    }
    else if (butrun === 'RESET') {
      current.innerHTML = '';
      previos.innerHTML = '';
    }
    else if (butrun === '=') {

      var result = eval((current.innerHTML));

      console.log(result)
      let add = current.innerHTML = result;
      console.log(add);
      let manag = (previos.innerHTML + add)
      
      console.log((current.innerHTML = manag));
      
      // console.log( current.innerHTML=meneg)


      console.log(previos.innerHTML = '');
    }
    else {
      // previos.innerHTML += current.innerHTML
      // previos.innerHTML += butrun;
      // current.innerHTML = ''
      console.log(previos.innerHTML += current.innerHTML)
      let butrun_rep = previos.innerHTML += butrun
      // console.log(previos.innerHTML += butrun)
      console.log(butrun_rep)
      console.log(current.innerHTML = '')
      


    }
    console.log(typeof butrun)
  });
});


