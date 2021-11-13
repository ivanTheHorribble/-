function getdata() {
    

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
        document.getElementById("bit").innerHTML=bit;
        document.getElementById("gold").innerHTML=gold;
        document.getElementById("oil").innerHTML=oil;
        document.getElementById("eth").innerHTML=eth;

            //meats Section

        firebase.database().ref('price/meats').once('value').then(function (snapshot) {
          
            var cow=snapshot.val().cow;
            var lamb=snapshot.val().lamb;
            var fish=snapshot.val().fish;
            var chicken=snapshot.val().chicken;
    
            
            document.getElementById("cow").innerHTML=cow;
            document.getElementById("fish").innerHTML=fish;
            document.getElementById("chicken").innerHTML=chicken;
            document.getElementById("lamb").innerHTML=lamb;
    


        //needs section

            firebase.database().ref('price/needs').once('value').then(function (snapshot) {
          
                var water=snapshot.val().water;
                var bread=snapshot.val().bread;
                var egg=snapshot.val().egg;
                var sugar=snapshot.val().sugar;
                var cofe=snapshot.val().cofe;
        
                
                document.getElementById("cofe").innerHTML=cofe;
                document.getElementById("sugar").innerHTML=sugar;
                document.getElementById("egg").innerHTML=egg;
                document.getElementById("bread").innerHTML=bread;
                document.getElementById("water").innerHTML=water;

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
        document.getElementById("bit").innerHTML=bit;
        document.getElementById("gold").innerHTML=gold;
        document.getElementById("oil").innerHTML=oil;
        document.getElementById("eth").innerHTML=eth;

            //meats Section

        firebase.database().ref('Sprice/meats').once('value').then(function (snapshot) {
          
            var cow=snapshot.val().cow;
            var lamb=snapshot.val().lamb;
            var fish=snapshot.val().fish;
            var chicken=snapshot.val().chicken;
    
            
            document.getElementById("cow").innerHTML=cow;
            document.getElementById("fish").innerHTML=fish;
            document.getElementById("chicken").innerHTML=chicken;
            document.getElementById("lamb").innerHTML=lamb;
    


        //needs section

            firebase.database().ref('Sprice/needs').once('value').then(function (snapshot) {
          
                var water=snapshot.val().water;
                var bread=snapshot.val().bread;
                var egg=snapshot.val().egg;
                var sugar=snapshot.val().sugar;
                var cofe=snapshot.val().cofe;
        
                
                document.getElementById("cofe").innerHTML=cofe;
                document.getElementById("sugar").innerHTML=sugar;
                document.getElementById("egg").innerHTML=egg;
                document.getElementById("bread").innerHTML=bread;
                document.getElementById("water").innerHTML=water;

  //gas Section
                firebase.database().ref('Sprice/gas').once('value').then(function (snapshot) {
          
                    var gas=snapshot.val().gas;
                    var g95=snapshot.val().g95;
                    var g98=snapshot.val().g98;
                    var disl=snapshot.val().disl;
            
                    
                    document.getElementById("disl").innerHTML=disl;
                    document.getElementById("g98").innerHTML=g98;
                    document.getElementById("g95").innerHTML=g95;
                    document.getElementById("gas").innerHTML=gas;
            
        })
        
    })
})
})
}