
"use strict";



var input = document.getElementById('input'), // input/output button
  number = document.querySelectorAll('.numbers div'), // number buttons
  clear = document.getElementById('clear'), // clear button
 output = document.getElementById('output'),
 l1 = document.getElementById('l1'), // input/output button
  d1 = document.getElementById('d1'), // number buttons
  s1 = document.getElementById('s1'), // clear button
  e1 = document.getElementById('e1'),
  l1d = document.getElementById('l1d'), // input/output button
  d1d = document.getElementById('d1d'), // number buttons
  s1d = document.getElementById('s1d'), // clear button
  e1d = document.getElementById('e1d'),

 currencyTag = "L.L.",
 currencyTag1 = "S.L.";
 let
 lbuy= "20000",
 sbuy= "3500";
 let nf = new Intl.NumberFormat('en-US')
let lbpRate = 1 / lbuy,
   dome = "",
  syrRate = 1 / sbuy,
  dollarRate = 1,
  upRate = lbpRate,
  dwnRate = syrRate,
  dRate = 1;
  
//numbers==================================

  var  nx= document.getElementById('1'),
  n2 = document.getElementById('2'),
  n3 = document.getElementById('3'),
  n4 = document.getElementById('4'),
  n5 = document.getElementById('5'),
  n6 = document.getElementById('6'),
  n7 = document.getElementById('7'),
  n8 = document.getElementById('8'),
  n9 = document.getElementById('9'),
  n0 = document.getElementById('0'),
  nDec = document.getElementById('dec');


  nx.addEventListener("click", function(e) {


    dome = dome  + '' + 1;
    input.innerHTML= nf.format(dome) + '' + currencyTag ;
    dRate = dome * upRate;
    dRate = dRate / dwnRate;
    
    output.innerHTML= nf.format(dRate) + '' + currencyTag1;

    
  });
  n2.addEventListener("click", function(e) {


    dome = dome  + '' + 2;
    input.innerHTML= nf.format(dome) + '' + currencyTag ;
    
    dRate = dome * upRate;
    dRate = dRate / dwnRate;
        output.innerHTML= nf.format(dRate) + '' + currencyTag1;


 
  });
  n3.addEventListener("click", function(e) {


    dome = dome  + '' + 3;
    input.innerHTML= nf.format(dome) + '' + currencyTag ;
    
    dRate = dome * upRate;
    dRate = dRate / dwnRate;
        output.innerHTML= nf.format(dRate) + '' + currencyTag1;


 
    

  });
  n4.addEventListener("click", function(e) {

   
    dome = dome  + '' + 4;
    input.innerHTML= nf.format(dome) + '' + currencyTag ;
    dRate = dome * upRate;
    dRate = dRate / dwnRate;
        output.innerHTML= nf.format(dRate) + '' + currencyTag1;


 

  });
  n5.addEventListener("click", function(e) {

   
    dome = dome  + '' + 5;
    input.innerHTML= nf.format(dome) + '' + currencyTag ;
    
    dRate = dome * upRate;
    dRate = dRate / dwnRate;
        output.innerHTML= nf.format(dRate) + '' + currencyTag1;


 


  });
  n6.addEventListener("click", function(e) {


    dome = dome  + '' + 6;
    input.innerHTML= nf.format(dome) + '' + currencyTag ;
    
    dRate = dome * upRate;
    dRate = dRate / dwnRate;
        output.innerHTML= nf.format(dRate) + '' + currencyTag1;


 
    

  });
  n7.addEventListener("click", function(e) {

  

    dome = dome  + '' + 7;
    input.innerHTML= nf.format(dome) + '' + currencyTag ;
    
    dRate = dome * upRate;
    dRate = dRate / dwnRate;
        output.innerHTML= nf.format(dRate) + '' + currencyTag1;


 
  });
  n8.addEventListener("click", function(e) {

    
  
    dome = dome  + '' + 8;
    input.innerHTML= nf.format(dome) + '' + currencyTag ;
    
    dRate = dome * upRate;
    dRate = dRate / dwnRate;
        output.innerHTML= nf.format(dRate) + '' + currencyTag1;

    

 


  });
  n9.addEventListener("click", function(e) {

   
    dome = dome  + '' + 9;
    input.innerHTML= dome.toLocaleString('en-US', {maximumFractionDigits:2}) + '' + currencyTa;
    
    dRate = dome * upRate;
    dRate = dRate / dwnRate;
        output.innerHTML= nf.format(dRate) + '' + currencyTag1;


 


  });
  n0.addEventListener("click", function(e) {

   
    dome = dome  + '' + 0;
    input.innerHTML= nf.format(dome) + '' + currencyTag ;
    
    dRate = dome * upRate;
    dRate = dRate / dwnRate;
        output.innerHTML= nf.format(dRate) + '' + currencyTag1;


 

  });
  nDec.addEventListener("click", function(e) {


    dome = dome  + '' + ".";
    input.innerHTML= nf.format(dome) + '' + currencyTag ;
    
   

  });
  clear.addEventListener("click", function(e) {

    dome = "";
    input.innerHTML= "0" + '' + currencyTag ;
    output.innerHTML="0" + '' + currencyTag1;
  


  });

   //from data sheet java okey=====================================


  l1.addEventListener("click", function(e) {
    upRate = lbpRate ;
    document.getElementById('img1').src = "../assets/img/sample/icons/leb.png";
    document.getElementById('n1').innerHTML = "LEBANEASE POUND>";
    currencyTag = " L.L." ;
    input.innerHTML = "1"+ '' + currencyTag;
   
     });


  d1.addEventListener("click", function(e) {
 upRate = dollarRate ;
 document.getElementById('img1').src = "../assets/img/sample/icons/dollar.png";
 document.getElementById('n1').innerHTML = "USD";
 currencyTag = " $" ;
 input.innerHTML = "1"+ '' + currencyTag;

  });

  s1.addEventListener("click", function(e) {
   upRate = syrRate ;
    document.getElementById('img1').src = "../assets/img/sample/icons/syria.png";
    document.getElementById('n1').innerHTML = "SYRIAN LIRA>";
    currencyTag = " S.L." ;
    input.innerHTML = "1"+ '' + currencyTag;
   
     });
     e1.addEventListener("click", function(e) {

      document.getElementById('img1').src = "../assets/img/sample/icons/euro.png";
      document.getElementById('n1').innerHTML = "EURO>";
      currencyTag = " €" ;
      input.innerHTML = "1"+ '' + currencyTag;
     
       });

//down data seh....; ===================================================

l1d.addEventListener("click", function(e) {
  dwnRate = lbpRate ;
  document.getElementById('img2').src = "../assets/img/sample/icons/leb.png";
  document.getElementById('n2').innerHTML = "LEBANEASE POUND>";
  currencyTag1 = " L.L." ;
  output.innerHTML = "1"+ '' + currencyTag1;
 
   });


d1d.addEventListener("click", function(e) {
dwnRate = dollarRate ;
document.getElementById('img2').src = "../assets/img/sample/icons/dollar.png";
document.getElementById('n2').innerHTML = "USD";
currencyTag1 = " $" ;
output.innerHTML = "1"+ '' + currencyTag1;

});

s1d.addEventListener("click", function(e) {
  dwnRate = syrRate ;
  document.getElementById('img2').src = "../assets/img/sample/icons/syria.png";
  document.getElementById('n2').innerHTML = "SYRIAN LIRA>";
  currencyTag1 = " S.L." ;
  output.innerHTML = "1"+ '' + currencyTag1;
 
   });
   e1d.addEventListener("click", function(e) {

    document.getElementById('img2').src = "../assets/img/sample/icons/euro.png";
    document.getElementById('n2').innerHTML = "EURO>";
    currencyTag1 = " €" ;
    output.innerHTML = "1"+ '' + currencyTag1;
   
     });
    
    function myFunction() {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }