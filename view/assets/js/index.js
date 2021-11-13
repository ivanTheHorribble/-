"use strict";

var input = document.getElementById('input'), // input/output button
  number = document.querySelectorAll('.numbers div'), // number buttons
  clear = document.getElementById('clear'), // clear button
 output = document.getElementById('output');


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

    input.innerHTML= input.innerHTML + '' + 1;
    
    output.innerHTML= input.innerHTML * 3;

  });
  n2.addEventListener("click", function(e) {


    input.innerHTML= input.innerHTML + '' + 2;
  
    output.innerHTML= input.innerHTML * 3;


  });
  n3.addEventListener("click", function(e) {


    input.innerHTML= input.innerHTML + '' + 3;
    output.innerHTML= input.innerHTML * 3;

    

  });
  n4.addEventListener("click", function(e) {

   
    
    input.innerHTML= input.innerHTML + '' + 4;
  
    output.innerHTML= input.innerHTML * 3;


  });
  n5.addEventListener("click", function(e) {

   
  
    input.innerHTML= input.innerHTML + '' + 5;
  
    output.innerHTML= input.innerHTML * 3;


  });
  n6.addEventListener("click", function(e) {


   
    input.innerHTML= input.innerHTML + '' + 6;
    output.innerHTML= input.innerHTML * 3;

    

  });
  n7.addEventListener("click", function(e) {

  

    input.innerHTML= input.innerHTML + '' + 7;
  
    output.innerHTML= input.innerHTML * 3;


  });
  n8.addEventListener("click", function(e) {

    
  
    input.innerHTML= input.innerHTML + '' + 8;
  
    output.innerHTML= input.innerHTML * 3;


  });
  n9.addEventListener("click", function(e) {

   

    input.innerHTML= input.innerHTML + '' + 9;
  
    output.innerHTML= input.innerHTML * 3;


  });
  n0.addEventListener("click", function(e) {

   

    input.innerHTML= input.innerHTML + '' + 0;
  
    output.innerHTML= input.innerHTML * 3;


  });
  nDec.addEventListener("click", function(e) {


    input.innerHTML= input.innerHTML + '' + ".";
  
    


  });
  clear.addEventListener("click", function(e) {


    input.innerHTML= "";
    output.innerHTML="";
    

  });
  



