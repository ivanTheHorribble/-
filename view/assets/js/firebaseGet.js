function getdata() {
    

    document.getElementById("lbpMain").style.display = 'none';
    document.getElementById("buyText").style.display = 'none';
    document.getElementById("sellText").style.display = 'none';
    document.getElementById("pBuyText").style.display = 'none';
    document.getElementById("pSellText").style.display = 'none';
    document.getElementById("gas").style.display = 'none';
    document.getElementById("disl").style.display = 'none';
    document.getElementById("g98").style.display = 'none';
    document.getElementById("g95").style.display = 'none';
    document.getElementById("loadd1").style.display = 'block';
    document.getElementById("loadd2").style.display = 'block';
    document.getElementById("loadd3").style.display = 'block';
    document.getElementById("loadd4").style.display = 'block';
    document.getElementById("loadd1").style.display = 'block';
    document.getElementById("loadd5").style.display = 'block';
    document.getElementById("loadd6").style.display = 'block';
    document.getElementById("loadd7").style.display = 'block';
    document.getElementById("loadd8").style.display = 'block';
    document.getElementById("loadd9").style.display = 'block';
    document.getElementById("newsTitle").innerHTML="Lebanon Hot News";



    //lebanon price =============================================


    firebase.database().ref('price/dollar').once('value').then(function (snapshot) {
   

        var lbpBuy=snapshot.val().lbpB;
        var lbpSell=snapshot.val().lbpS;
        var PrlbpB=snapshot.val().PrlbpB;
        var PrlbpS=snapshot.val().PrlbpS;

      

        document.getElementById("lbpMain").innerHTML=lbpBuy;
        document.getElementById("buyText").innerHTML=lbpBuy;
        document.getElementById("sellText").innerHTML=lbpSell;
        document.getElementById("pBuyText").innerHTML=PrlbpB;
        document.getElementById("pSellText").innerHTML=PrlbpS;
    
        document.getElementById("lbpMain").style.display = 'block';
        document.getElementById("buyText").style.display = 'block';
        document.getElementById("sellText").style.display = 'block';
        document.getElementById("pBuyText").style.display = 'block';
        document.getElementById("pSellText").style.display = 'block';
  
        document.getElementById("loadd1").style.display = 'none';
        document.getElementById("loadd2").style.display = 'none';
        document.getElementById("loadd3").style.display = 'none';
        document.getElementById("loadd4").style.display = 'none';
        document.getElementById("loadd1").style.display = 'none';
        document.getElementById("loadd5").style.display = 'none';




    //gas Section
    firebase.database().ref('price/gas').once('value').then(function (snapshot) {
          
        var gas=snapshot.val().gas;
        var g95=snapshot.val().g95;
        var g98=snapshot.val().g98;
        var disl=snapshot.val().disl;

        
        document.getElementById("disl").innerHTML=disl;
        document.getElementById("g98").innerHTML=g98;
        document.getElementById("g95").innerHTML=g95;
        document.getElementById("gas").innerHTML=gas;

        document.getElementById("disl").style.display = 'block';
        document.getElementById("g98").style.display = 'block';
        document.getElementById("g95").style.display = 'block';
        document.getElementById("gas").style.display = 'block';
      

        document.getElementById("loadd6").style.display = 'none';
        document.getElementById("loadd7").style.display = 'none';
        document.getElementById("loadd8").style.display = 'none';
        document.getElementById("loadd9").style.display = 'none';
        
        })
    })
    //lebanon price is done ========================================================
}


//syria price ---------------------------------------


function getdataSyr() {
    


    document.getElementById("lbpMain").style.display = 'none';
    document.getElementById("buyText").style.display = 'none';
    document.getElementById("sellText").style.display = 'none';
    document.getElementById("pBuyText").style.display = 'none';
    document.getElementById("pSellText").style.display = 'none';
    document.getElementById("gas").style.display = 'none';
    document.getElementById("disl").style.display = 'none';
    document.getElementById("g98").style.display = 'none';
    document.getElementById("g95").style.display = 'none';
    document.getElementById("loadd1").style.display = 'block';
    document.getElementById("loadd2").style.display = 'block';
    document.getElementById("loadd3").style.display = 'block';
    document.getElementById("loadd4").style.display = 'block';
    document.getElementById("loadd1").style.display = 'block';
    document.getElementById("loadd5").style.display = 'block';
    document.getElementById("loadd6").style.display = 'block';
    document.getElementById("loadd7").style.display = 'block';
    document.getElementById("loadd8").style.display = 'block';
    document.getElementById("loadd9").style.display = 'block';
    document.getElementById("newsTitle").innerHTML="Syria Hot News";




    firebase.database().ref('Sprice/dollar').once('value').then(function (snapshot) {

        var sySell=snapshot.val().syrS;
        var syBuy=snapshot.val().syrB;
        var PrsyrB=snapshot.val().PrsyrB;
        var PrsyrS=snapshot.val().PrSyrS;


        document.getElementById("lbpMain").innerHTML=syBuy;
        document.getElementById("buyText").innerHTML=syBuy;
        document.getElementById("sellText").innerHTML=sySell;
        document.getElementById("pBuyText").innerHTML=PrsyrB;
        document.getElementById("pSellText").innerHTML=PrsyrS;

        document.getElementById("lbpMain").style.display = 'block';
        document.getElementById("buyText").style.display = 'block';
        document.getElementById("sellText").style.display = 'block';
        document.getElementById("pBuyText").style.display = 'block';
        document.getElementById("pSellText").style.display = 'block';
  
        document.getElementById("loadd1").style.display = 'none';
        document.getElementById("loadd2").style.display = 'none';
        document.getElementById("loadd3").style.display = 'none';
        document.getElementById("loadd4").style.display = 'none';
        document.getElementById("loadd1").style.display = 'none';
        document.getElementById("loadd5").style.display = 'none';


    //gas Section-----------------------------------------------
    firebase.database().ref('Sprice/gas').once('value').then(function (snapshot) {
          
        var gas=snapshot.val().gas;
        var g95=snapshot.val().g95;
        var g98=snapshot.val().g98;
        var disl=snapshot.val().disl;

        
        document.getElementById("disl").innerHTML=disl;
        document.getElementById("g98").innerHTML=g98;
        document.getElementById("g95").innerHTML=g95;
        document.getElementById("gas").innerHTML=gas;

        document.getElementById("disl").style.display = 'block';
        document.getElementById("g98").style.display = 'block';
        document.getElementById("g95").style.display = 'block';
        document.getElementById("gas").style.display = 'block';
      

        document.getElementById("loadd6").style.display = 'none';
        document.getElementById("loadd7").style.display = 'none';
        document.getElementById("loadd8").style.display = 'none';
        document.getElementById("loadd9").style.display = 'none';


      })
      //gas section is done -----------------------------------------
    })
}
//syria price is done ===================================================



//euro price================================================
function getdataEu() {
    

    document.getElementById("lbpMain").style.display = 'none';
    document.getElementById("buyText").style.display = 'none';
    document.getElementById("sellText").style.display = 'none';
    document.getElementById("pBuyText").style.display = 'none';
    document.getElementById("pSellText").style.display = 'none';



    
    firebase.database().ref('/Eprice').once('value').then(function (snapshot) {
        
        var buy=snapshot.val().buy;
        var sell=snapshot.val().sell;
        var Prbuy=snapshot.val().Prbuy;
        var Prsell=snapshot.val().Prsell;

       

        document.getElementById("lbpMain").innerHTML=buy;
        document.getElementById("buyText").innerHTML=buy;
        document.getElementById("sellText").innerHTML=sell;
        document.getElementById("pBuyText").innerHTML=Prbuy;
        document.getElementById("pSellText").innerHTML=Prsell;
        //gas Section
        firebase.database().ref('Eprice/gas').once('value').then(function (snapshot) {
          
            var gas=snapshot.val().gas;
            var g95=snapshot.val().g95;
            var g98=snapshot.val().g98;
            var disl=snapshot.val().disl;
    
            
            document.getElementById("disl").innerHTML=disl;
            document.getElementById("g98").innerHTML=g98;
            document.getElementById("g95").innerHTML=g95;
            document.getElementById("gas").innerHTML=gas;
    
          })
         //gas done =============================================
    })
    //eu done ======================================
}
