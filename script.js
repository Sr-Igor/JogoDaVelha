let square = {
    a1:'',a2:'',a3:'',
    b1:'',b2:'',b3:'',
    c1:'',c2:'',c3:''
}
let player = ""
let warning = ""
let playing = true

reset()

//Eventos 
document.querySelectorAll(".col").forEach(item =>{
    item.addEventListener('click', FillScreen)
})

//Funções 
function reset(){
    playing = true 
     Math.floor(Math.random() * 2) == 0 ? player = "x": player = "o"
     FillWarning()
    
}

function FillScreen(){
    let ClickedItem = event.target
    let AtrItem = ClickedItem.getAttribute('data-key')

    if(ClickedItem.innerHTML == "" && playing == true){
        ClickedItem.innerHTML = player

        for(let i in square){
            if(square[AtrItem] == ""){
                square[AtrItem] = player
                verifyGame()
                TimePlayer()
                FillWarning()
            }
        }   
    }  
}

function TimePlayer(){
    if(player == "x"){
        player = "o"
    }else{
        player = "x"
    }
}

function FillWarning(){
    if(playing == true){
        document.querySelector('.player .time').innerHTML = player
    } 
}

function verifyGame() {
  let values = Object.values(square);

  let possibilits = [
    [values[0], values[1], values[2]].join(""),
    [values[3], values[4], values[5]].join(""),
    [values[6], values[7], values[8]].join(""),

    [values[0], values[3], values[6]].join(""),
    [values[1], values[4], values[7]].join(""),
    [values[2], values[5], values[8]].join(""),

    [values[0], values[4], values[8]].join(""),
    [values[2], values[4], values[6]].join(""),
  ];

  let TotalPossibilits = possibilits.join("");

  for (let i = 0; i <= possibilits.length; i++) {
      
    if (possibilits[i] !== "" && possibilits[i] == "xxx" || possibilits[i] == "ooo"){

      playing = false;
      document.querySelector(".results").innerHTML = `GANHADOR:<br>${player}`;
      document.querySelector(".player .time").innerHTML = " ";

      document.querySelectorAll(".col").forEach((item) => {
        if (item.innerHTML == player) {
          item.style.color = "green";
        }
      });
      return;
    }
  }

  if (TotalPossibilits.length == 24) {
    playing = false;
    document.querySelector(".results").innerHTML = `EMPATE`;
    document.querySelector(".player .time").innerHTML = " ";

    document.querySelectorAll(".col").forEach((item) => {
      item.style.color = "red";
    });
  }
}