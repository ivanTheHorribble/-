function getdata() {
    
    let nf = new Intl.NumberFormat('en-US')

    document.getElementById("oil").innerHTML="Loading..";
    document.getElementById("gold").innerHTML="Loading..";
    document.getElementById("bit").innerHTML="Loading..";
    document.getElementById("eth").innerHTML="Loading..";
    document.getElementById("cofe").innerHTML="Loading..";
    document.getElementById("sugar").innerHTML="Loading..";
    document.getElementById("egg").innerHTML="Loading..";
    document.getElementById("bread").innerHTML="Loading..";
    document.getElementById("water").innerHTML="Loading..";
    document.getElementById("disl").innerHTML="Loading..";
    document.getElementById("g98").innerHTML="Loading..";
    document.getElementById("g95").innerHTML="Loading..";
    document.getElementById("gas").innerHTML="Loading..";
    document.getElementById("cow").innerHTML="Loading..";
    document.getElementById("fish").innerHTML="Loading..";
    document.getElementById("lamb").innerHTML="Loading..";
    document.getElementById("chicken").innerHTML="Loading..";
    document.getElementById("g95").innerHTML="Loading..";

    //firebase data retrieval function
    //path of your data
    //.once will get all your data in one time
    firebase.database().ref('price/prices').once('value').then(function (snapshot) {
        //here we will get data
        //enter your field name
        var gold=snapshot.val().gold;
        var oil=snapshot.val().oil;
        var bit=snapshot.val().bit;
        var eth=snapshot.val().eth;

        //now we have data in variables
        //now show them in our html
        document.getElementById("bit").innerHTML=nf.format(bit) + '' + "L.L";
        document.getElementById("gold").innerHTML=nf.format(gold) + ' ' + " L.L.";
        document.getElementById("oil").innerHTML=nf.format(oil) + ' ' + " L.L.";;
        document.getElementById("eth").innerHTML=nf.format(eth) + ' ' + " L.L.";;

            //meats Section

        firebase.database().ref('price/meats').once('value').then(function (snapshot) {
          
            var cow=snapshot.val().cow;
            var lamb=snapshot.val().lamb;
            var fish=snapshot.val().fish;
            var chicken=snapshot.val().chicken;
    
            
            document.getElementById("cow").innerHTML=nf.format(cow) + ' ' + " L.L.";
            document.getElementById("fish").innerHTML=nf.format(fish) + ' ' + " L.L.";
            document.getElementById("chicken").innerHTML=nf.format(chicken) + ' ' + " L.L.";
            document.getElementById("lamb").innerHTML=nf.format(lamb) + ' ' + " L.L.";
    


        //needs section

            firebase.database().ref('price/needs').once('value').then(function (snapshot) {
          
                var water=snapshot.val().water;
                var bread=snapshot.val().bread;
                var egg=snapshot.val().egg;
                var sugar=snapshot.val().sugar;
                var cofe=snapshot.val().cofe;
        
                
                document.getElementById("cofe").innerHTML=nf.format(cofe) + ' ' + " L.L.";;
                document.getElementById("sugar").innerHTML=nf.format(sugar) + ' ' + " L.L.";;
                document.getElementById("egg").innerHTML=nf.format(egg) + ' ' + " L.L.";;
                document.getElementById("bread").innerHTML=nf.format(bread) + ' ' + " L.L.";;
                document.getElementById("water").innerHTML=nf.format(water) + ' ' + " L.L.";;

  //gas Section
                firebase.database().ref('price/gas').once('value').then(function (snapshot) {
          
                    var gas=snapshot.val().gas;
                    var g95=snapshot.val().g95;
                    var g98=snapshot.val().g98;
                    var disl=snapshot.val().disl;
            
                    
                    document.getElementById("disl").innerHTML=nf.format(disl) + ' ' + " L.L.";
                    document.getElementById("g98").innerHTML=nf.format(g98) + ' ' + " L.L.";
                    document.getElementById("g95").innerHTML=nf.format(g95) + ' ' + " L.L.";
                    document.getElementById("gas").innerHTML=nf.format(gas) + ' ' + " L.L.";
            
        })
        
    })
})
})
}

//syria prices ====================================================


function getSdata() {
    

    document.getElementById("oil").innerHTML="Loading..";
    document.getElementById("gold").innerHTML="Loading..";
    document.getElementById("bit").innerHTML="Loading..";
    document.getElementById("eth").innerHTML="Loading..";
    document.getElementById("cofe").innerHTML="Loading..";
    document.getElementById("sugar").innerHTML="Loading..";
    document.getElementById("egg").innerHTML="Loading..";
    document.getElementById("bread").innerHTML="Loading..";
    document.getElementById("water").innerHTML="Loading..";
    document.getElementById("disl").innerHTML="Loading..";
    document.getElementById("g98").innerHTML="Loading..";
    document.getElementById("g95").innerHTML="Loading..";
    document.getElementById("gas").innerHTML="Loading..";
    document.getElementById("cow").innerHTML="Loading..";
    document.getElementById("fish").innerHTML="Loading..";
    document.getElementById("lamb").innerHTML="Loading..";
    document.getElementById("chicken").innerHTML="Loading..";
    document.getElementById("g95").innerHTML="Loading..";

    //firebase data retrieval function
    //path of your data
    //.once will get all your data in one time
    firebase.database().ref('Sprice/prices').once('value').then(function (snapshot) {
        //here we will get data
        //enter your field name
        var gold=snapshot.val().gold;
        var oil=snapshot.val().oil;
        var bit=snapshot.val().bit;
        var eth=snapshot.val().eth;

        //now we have data in variables
        //now show them in our html
        document.getElementById("bit").innerHTML=nf.format(bit) + '' + " S.L.";
        document.getElementById("gold").innerHTML=nf.format(gold) + ' ' + " S.L.";
        document.getElementById("oil").innerHTML=nf.format(oil) + ' ' + " S.L.";;
        document.getElementById("eth").innerHTML=nf.format(eth) + ' ' + " S.L.";;


            //meats Section

        firebase.database().ref('Sprice/meats').once('value').then(function (snapshot) {
          
            var cow=snapshot.val().cow;
            var lamb=snapshot.val().lamb;
            var fish=snapshot.val().fish;
            var chicken=snapshot.val().chicken;
    
                     
            document.getElementById("cow").innerHTML=nf.format(cow) + ' ' + " S.L.";
            document.getElementById("fish").innerHTML=nf.format(fish) + ' ' + " S.L.";
            document.getElementById("chicken").innerHTML=nf.format(chicken) + ' ' + " S.L.";
            document.getElementById("lamb").innerHTML=nf.format(lamb) + ' ' + " S.L.";
    



        //needs section

            firebase.database().ref('Sprice/needs').once('value').then(function (snapshot) {
          
                var water=snapshot.val().water;
                var bread=snapshot.val().bread;
                var egg=snapshot.val().egg;
                var sugar=snapshot.val().sugar;
                var cofe=snapshot.val().cofe;
        
                
                document.getElementById("cofe").innerHTML=nf.format(cofe) + ' ' + " S.L.";;
                document.getElementById("sugar").innerHTML=nf.format(sugar) + ' ' + " S.L.";;
                document.getElementById("egg").innerHTML=nf.format(egg) + ' ' + " S.L.";;
                document.getElementById("bread").innerHTML=nf.format(bread) + ' ' + " S.L.";;
                document.getElementById("water").innerHTML=nf.format(water) + ' ' + " S.L.";;


  //gas Section
                firebase.database().ref('Sprice/gas').once('value').then(function (snapshot) {
          
                    var gas=snapshot.val().gas;
                    var g95=snapshot.val().g95;
                    var g98=snapshot.val().g98;
                    var disl=snapshot.val().disl;
            
                    document.getElementById("disl").innerHTML=nf.format(disl) + ' ' + " S.L.";
                    document.getElementById("g98").innerHTML=nf.format(g98) + ' ' + " S.L.";
                    document.getElementById("g95").innerHTML=nf.format(g95) + ' ' + " S.L.";
                    document.getElementById("gas").innerHTML=nf.format(gas) + ' ' + " S.L.";
            
        })
        
    })
})
})
}