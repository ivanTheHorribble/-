function getdata() {
    
    let nf = new Intl.NumberFormat('en-US')

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
 



    //lebanon price =============================================


    firebase.database().ref('price/dollar').once('value').then(function (snapshot) {
   

        var lbpBuy=snapshot.val().lbpB;
        var lbpSell=snapshot.val().lbpS;
        var PrlbpB=snapshot.val().PrlbpB;
        var PrlbpS=snapshot.val().PrlbpS;

      

        document.getElementById("lbpMain").innerHTML= nf.format(lbpBuy) + '' + "L.L.";

        document.getElementById("buyText").innerHTML= nf.format(lbpBuy) + '' + "L.L.";
        document.getElementById("sellText").innerHTML=nf.format(lbpSell) + '' + "L.L.";
        document.getElementById("pBuyText").innerHTML=nf.format(PrlbpB) + '' + "L.L.";
        document.getElementById("pSellText").innerHTML=nf.format(PrlbpS) + '' + "L.L.";
    
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

        
        document.getElementById("disl").innerHTML=nf.format(disl) + '' + "L.L.";
        document.getElementById("g98").innerHTML=nf.format(g98) + '' + "L.L.";
        document.getElementById("g95").innerHTML=nf.format(g95) + '' + "L.L.";
        document.getElementById("gas").innerHTML=nf.format(gas) + '' + "L.L.";

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
    
    let nf = new Intl.NumberFormat('en-US')


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





    firebase.database().ref('Sprice/dollar').once('value').then(function (snapshot) {

        var sySell=snapshot.val().syrS;
        var syBuy=snapshot.val().syrB;
        var PrsyrB=snapshot.val().PrsyrB;
        var PrsyrS=snapshot.val().PrSyrS;


        document.getElementById("lbpMain").innerHTML=nf.format(syBuy) + '' + " S.L.";
        document.getElementById("buyText").innerHTML=nf.format(syBuy) + '' + " S.L.";
        document.getElementById("sellText").innerHTML=nf.format(sySell) + '' + " S.L.";
        document.getElementById("pBuyText").innerHTML=nf.format(PrsyrB) + '' + " S.L.";
        document.getElementById("pSellText").innerHTML=nf.format(PrsyrS) + '' + " S.L.";

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

        
        document.getElementById("disl").innerHTML=nf.format(disl) + '' + " S.L.";
        document.getElementById("g98").innerHTML=nf.format(g98) + '' + " S.L.";
        document.getElementById("g95").innerHTML=nf.format(g95) + '' + " S.L.";
        document.getElementById("gas").innerHTML=nf.format(gas) + '' + " S.L.";

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
