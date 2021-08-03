function set(){
    var x = document.getElementById("myText1").value;
    var y = document.getElementById("myText2").value;
    var res = Math.floor(Math.random()*100)+1;
    //x = 11 ,5, y = 5,7,
    if(x.length==5 || x.length==11 || x.length==7){
        if(y.length==5 || y.length==7 || y.length==11){
            document.getElementById("demo").innerHTML = x + " your bond with " + y + " is " +  " 100% 💓" ;
        }
    }else{
        if(x.length!=0 && y.length!=0){
            document.getElementById("demo").innerHTML = x + " your bond with " + y + " is " + res + " % 💓" ;
        }
        if(x.length==0 && y.length==0){
            document.querySelector("#myText2").style.border = "1px solid red";
            document.querySelector("#myText1").style.border = "1px solid red";
            document.querySelector('.warning1').style.display = "block";
            document.querySelector('.warning2').style.display = "block";
        }
        if(x.length==0){
            document.querySelector("#myText1").style.border = "1px solid red";
            document.querySelector('.warning1').style.display = "block";
        }
        if(y.length==0){   
            document.querySelector('.warning2').style.display = "block";
            document.querySelector("#myText2").style.border = "1px solid red";
    
        }
    }
}
// function set(){
//     if(x!=null && y!=null){
//         var res = Math.floor(Math.random()*100)+1
//         document.querySelector('.ShowArea').innerHTML = `<h1>${x} your bond with ${y} is ${res}%</h1>`;

//     }
//     else{
        
//     }
// }  