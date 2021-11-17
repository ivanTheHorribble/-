// euro =======================================
var euro= "0.8",
seuro= "0.75";

// leb===================================================================

var lsell = "24443",
    lbuy = "22334",
    Plsell = "21043",
    Plbuy = "23233",
    //gas prices=================================
    ldisl = "232000",
    lg95 = "545454",
    lg98 = "445454",
    lgas = "766767",

    // leb prices ===================================================


    /// syria prices =====================================================
    ssell = "4353",
    sbuy = "4345",
    Pssell = "3456",
    Psbuy = "2323",

    /// syria gas ==================================================
    sdisl = "45940",
    sg95 = "49543",
    sg98 = "23545",
    sgas = "67654";

var nf = new Intl.NumberFormat('en-US');


//prices of suffs////////////////////////////////////////////////////////////
var
    cow = "145565",
    lamb = "24545",
    chicken = "45564",
    fish = "45643",
    water = "5003",
    bread = "7500",
    eggs = "74053",
    sugar = "12333",
    cofe = "13000",
    gas = "260000",
    g95 = "303033",
    g98 = "323233",
    disl = "434344",
    gold = "343030",
    oil = "232323",
    bit = "2323232323232",
    eth = "3434343",

    //////////syria////////////////////////////////////////////
    scow = "145565",
    slamb = "24545",
    schicken = "45564",
    sfish = "45643",
    swater = "5003",
    sbread = "7500",
    seggs = "74053",
    ssugar = "12333",
    scofe = "13000",
    sgas = "260000",
    sg95 = "303033",
    sg98 = "323233",
    sdisl = "434344",
    sgold = "343030",
    soil = "232323",
    sbit = "2323232323232",
    seth = "3476734343";
//##prices of suffs////////////////////////////////////////////////////////////

var tagg = "lb";












function update() {
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
    setTimeout(() => {
        document.getElementById("lbpMain").style.display = 'block';
        document.getElementById("buyText").style.display = 'block';
        document.getElementById("sellText").style.display = 'block';
        document.getElementById("pBuyText").style.display = 'block';
        document.getElementById("pSellText").style.display = 'block';
        document.getElementById("disl").style.display = 'block';
        document.getElementById("g95").style.display = 'block';
        document.getElementById("g98").style.display = 'block';
        document.getElementById("gas").style.display = 'block';

        document.getElementById("loadd1").style.display = 'none';
        document.getElementById("loadd2").style.display = 'none';
        document.getElementById("loadd3").style.display = 'none';
        document.getElementById("loadd4").style.display = 'none';
        document.getElementById("loadd1").style.display = 'none';
        document.getElementById("loadd5").style.display = 'none';
        document.getElementById("loadd6").style.display = 'none';
        document.getElementById("loadd7").style.display = 'none';
        document.getElementById("loadd8").style.display = 'none';
        document.getElementById("loadd9").style.display = 'none';
        document.getElementById("loadd1").style.display = 'none';
        document.getElementById("loadd5").style.display = 'none';
    }, 500);

}



function getdata() {





    update();

    var
        main = document.getElementById("lbpMain"),
        sell = document.getElementById("sellText"),
        buy = document.getElementById("buyText"),
        pbuy = document.getElementById("pBuyText"),
        psell = document.getElementById("pSellText"),
        leb = document.getElementById("leb"),
        syr = document.getElementById("syr");
    currency = "";

    main.innerHTML = nf.format(lbuy) + '' + " L.L.";
    sell.innerHTML = nf.format(lsell) + '' + " L.L.";
    buy.innerHTML = nf.format(lbuy) + '' + " L.L.";
    pbuy.innerHTML = nf.format(Plbuy) + '' + " L.L.";
    psell.innerHTML = nf.format(Plsell) + '' + " L.L.";
    document.getElementById("disl").innerHTML = nf.format(ldisl) + '' + "L.L.";
    document.getElementById("g98").innerHTML = nf.format(lg98) + '' + "L.L.";
    document.getElementById("g95").innerHTML = nf.format(lg95) + '' + "L.L.";
    document.getElementById("gas").innerHTML = nf.format(lgas) + '' + "L.L.";

    leb.addEventListener("click", function (e) {

        update();
        currency = "lb";
        main.innerHTML = nf.format(lbuy) + '' + " L.L.";
        sell.innerHTML = nf.format(lsell) + '' + " L.L.";
        buy.innerHTML = nf.format(lbuy) + '' + " L.L.";
        pbuy.innerHTML = nf.format(Plbuy) + '' + " L.L.";
        psell.innerHTML = nf.format(Plsell) + '' + " L.L.";
        document.getElementById("disl").innerHTML = nf.format(ldisl) + '' + "L.L.";
        document.getElementById("g98").innerHTML = nf.format(lg98) + '' + "L.L.";
        document.getElementById("g95").innerHTML = nf.format(lg95) + '' + "L.L.";
        document.getElementById("gas").innerHTML = nf.format(lgas) + '' + "L.L.";


    });
    syr.addEventListener("click", function (e) {


        update();
        currency = "sy";
        main.innerHTML = nf.format(sbuy) + '' + " S.L.";
        sell.innerHTML = nf.format(ssell) + '' + " S.L.";
        buy.innerHTML = nf.format(sbuy) + '' + " S.L.";
        pbuy.innerHTML = nf.format(Psbuy) + '' + " S.L.";
        psell.innerHTML = nf.format(Pssell) + '' + " S.L.";
        document.getElementById("disl").innerHTML = nf.format(sdisl) + '' + "S.L.";
        document.getElementById("g98").innerHTML = nf.format(sg98) + '' + "S.L.";
        document.getElementById("g95").innerHTML = nf.format(sg95) + '' + "S.L.";
        document.getElementById("gas").innerHTML = nf.format(sgas) + '' + "S.L.";


    });

    document.getElementById("refresh").addEventListener("click", function (e) {
        if (currency == "lb") {


            update();
            currency = "lb";
            main.innerHTML = nf.format(lbuy) + '' + " L.L.";
            sell.innerHTML = nf.format(lsell) + '' + " L.L.";
            buy.innerHTML = nf.format(lbuy) + '' + " L.L.";
            pbuy.innerHTML = nf.format(Plbuy) + '' + " L.L.";
            psell.innerHTML = nf.format(Plsell) + '' + " L.L.";
            document.getElementById("disl").innerHTML = nf.format(ldisl) + '' + "L.L.";
            document.getElementById("g98").innerHTML = nf.format(lg98) + '' + "L.L.";
            document.getElementById("g95").innerHTML = nf.format(lg95) + '' + "L.L.";
            document.getElementById("gas").innerHTML = nf.format(lgas) + '' + "L.L.";



        } else {

            currency = "sy";
            update();
            main.innerHTML = nf.format(sbuy) + '' + " S.L.";
            sell.innerHTML = nf.format(ssell) + '' + " S.L.";
            buy.innerHTML = nf.format(sbuy) + '' + " S.L.";
            pbuy.innerHTML = nf.format(Psbuy) + '' + " S.L.";
            psell.innerHTML = nf.format(Pssell) + '' + " S.L.";
            document.getElementById("disl").innerHTML = nf.format(sdisl) + '' + "S.L.";
            document.getElementById("g98").innerHTML = nf.format(sg98) + '' + "S.L.";
            document.getElementById("g95").innerHTML = nf.format(sg95) + '' + "S.L.";
            document.getElementById("gas").innerHTML = nf.format(sgas) + '' + "S.L.";

        }

    });
}


// converter ===========================================


function converter() {

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

        currencyTag = " L.L.",
        currencyTag1 = " $";


    let lbpRate = 1 / lbuy,
        dome = "",
        syrRate = 1 / sbuy,
        dollarRate = 1,
        upRate = lbpRate,
        dwnRate = dollarRate,
        dRate = 1;

    //numbers==================================

    var nx = document.getElementById('1'),
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


    nx.addEventListener("click", function (e) {


        dome = dome + '' + 1;
        input.innerHTML = nf.format(dome) + '' + currencyTag;
        dRate = dome * upRate;
        dRate = dRate / dwnRate;

        output.innerHTML = nf.format(dRate) + '' + currencyTag1;


    });
    n2.addEventListener("click", function (e) {


        dome = dome + '' + 2;
        input.innerHTML = nf.format(dome) + '' + currencyTag;

        dRate = dome * upRate;
        dRate = dRate / dwnRate;
        output.innerHTML = nf.format(dRate) + '' + currencyTag1;



    });
    n3.addEventListener("click", function (e) {


        dome = dome + '' + 3;
        input.innerHTML = nf.format(dome) + '' + currencyTag;

        dRate = dome * upRate;
        dRate = dRate / dwnRate;
        output.innerHTML = nf.format(dRate) + '' + currencyTag1;





    });
    n4.addEventListener("click", function (e) {


        dome = dome + '' + 4;
        input.innerHTML = nf.format(dome) + '' + currencyTag;
        dRate = dome * upRate;
        dRate = dRate / dwnRate;
        output.innerHTML = nf.format(dRate) + '' + currencyTag1;




    });
    n5.addEventListener("click", function (e) {


        dome = dome + '' + 5;
        input.innerHTML = nf.format(dome) + '' + currencyTag;

        dRate = dome * upRate;
        dRate = dRate / dwnRate;
        output.innerHTML = nf.format(dRate) + '' + currencyTag1;





    });
    n6.addEventListener("click", function (e) {


        dome = dome + '' + 6;
        input.innerHTML = nf.format(dome) + '' + currencyTag;

        dRate = dome * upRate;
        dRate = dRate / dwnRate;
        output.innerHTML = nf.format(dRate) + '' + currencyTag1;





    });
    n7.addEventListener("click", function (e) {



        dome = dome + '' + 7;
        input.innerHTML = nf.format(dome) + '' + currencyTag;

        dRate = dome * upRate;
        dRate = dRate / dwnRate;
        output.innerHTML = nf.format(dRate) + '' + currencyTag1;



    });
    n8.addEventListener("click", function (e) {



        dome = dome + '' + 8;
        input.innerHTML = nf.format(dome) + '' + currencyTag;

        dRate = dome * upRate;
        dRate = dRate / dwnRate;
        output.innerHTML = nf.format(dRate) + '' + currencyTag1;






    });
    n9.addEventListener("click", function (e) {


        dome = dome + '' + 9;
        input.innerHTML = dome.toLocaleString('en-US', { maximumFractionDigits: 2 }) + '' + currencyTa;

        dRate = dome * upRate;
        dRate = dRate / dwnRate;
        output.innerHTML = nf.format(dRate) + '' + currencyTag1;





    });
    n0.addEventListener("click", function (e) {


        dome = dome + '' + 0;
        input.innerHTML = nf.format(dome) + '' + currencyTag;

        dRate = dome * upRate;
        dRate = dRate / dwnRate;
        output.innerHTML = nf.format(dRate) + '' + currencyTag1;




    });

    clear.addEventListener("click", function (e) {

        dome = "";
        input.innerHTML = "0" + '' + currencyTag;
        output.innerHTML = "0" + '' + currencyTag1;



    });

    //from data sheet java okey=====================================


    l1.addEventListener("click", function (e) {
        upRate = lbpRate;
        document.getElementById('img1').src = "../assets/img/sample/icons/leb.png";
        document.getElementById('n1').innerHTML = "LEBANEASE POUND>";
        currencyTag = " L.L.";
        input.innerHTML = "1" + '' + currencyTag;

    });


    d1.addEventListener("click", function (e) {
        upRate = dollarRate;
        document.getElementById('img1').src = "../assets/img/sample/icons/dollar.png";
        document.getElementById('n1').innerHTML = "USD";
        currencyTag = " $";
        input.innerHTML = "1" + '' + currencyTag;

    });

    s1.addEventListener("click", function (e) {
        upRate = syrRate;
        document.getElementById('img1').src = "../assets/img/sample/icons/syria.png";
        document.getElementById('n1').innerHTML = "SYRIAN LIRA>";
        currencyTag = " S.L.";
        input.innerHTML = "1" + '' + currencyTag;

    });
    e1.addEventListener("click", function (e) {

        document.getElementById('img1').src = "../assets/img/sample/icons/euro.png";
        document.getElementById('n1').innerHTML = "EURO>";
        currencyTag = " €";
        input.innerHTML = "1" + '' + currencyTag;

    });

    //down data seh....; ===================================================

    l1d.addEventListener("click", function (e) {
        dwnRate = lbpRate;
        document.getElementById('img2').src = "../assets/img/sample/icons/leb.png";
        document.getElementById('n2').innerHTML = "LEBANEASE POUND>";
        currencyTag1 = " L.L.";
        dRate = dome * upRate;
        dRate = dRate / dwnRate;
        output.innerHTML = nf.format(dRate) + '' + currencyTag1;
    });


    d1d.addEventListener("click", function (e) {
        dwnRate = dollarRate;
        document.getElementById('img2').src = "../assets/img/sample/icons/dollar.png";
        document.getElementById('n2').innerHTML = "USD";
        currencyTag1 = " $";
        dRate = dome * upRate;
        dRate = dRate / dwnRate;
        output.innerHTML = nf.format(dRate) + '' + currencyTag1;
    });

    s1d.addEventListener("click", function (e) {
        dwnRate = syrRate;
        document.getElementById('img2').src = "../assets/img/sample/icons/syria.png";
        document.getElementById('n2').innerHTML = "SYRIAN LIRA>";
        currencyTag1 = " S.L.";
        dRate = dome * upRate;
        dRate = dRate / dwnRate;
        output.innerHTML = nf.format(dRate) + '' + currencyTag1;        
    });
    e1d.addEventListener("click", function (e) {
        dwnRate= euro;
        document.getElementById('img2').src = "../assets/img/sample/icons/euro.png";
        document.getElementById('n2').innerHTML = "EURO>";
        currencyTag1 = " €";
        dRate = dome * upRate;
        dRate = dRate / dwnRate;
        output.innerHTML = nf.format(dRate) + '' + currencyTag1;
       
    });


}



// prices =======================================================


function prices() {
    if (tagg == "lb") {
        document.getElementById("bit").innerHTML = nf.format(bit) + '' + "L.L",
            document.getElementById("gold").innerHTML = nf.format(gold) + ' ' + " L.L.",
            document.getElementById("oil").innerHTML = nf.format(oil) + ' ' + " L.L.",
            document.getElementById("eth").innerHTML = nf.format(eth) + ' ' + " L.L.",

            document.getElementById("cow").innerHTML = nf.format(cow) + ' ' + " L.L.",
            document.getElementById("fish").innerHTML = nf.format(fish) + ' ' + " L.L.",
            document.getElementById("chicken").innerHTML = nf.format(chicken) + ' ' + " L.L.",
            document.getElementById("lamb").innerHTML = nf.format(lamb) + ' ' + " L.L.",

            document.getElementById("cofe").innerHTML = nf.format(cofe) + ' ' + " L.L.",
            document.getElementById("sugar").innerHTML = nf.format(sugar) + ' ' + " L.L.",
            document.getElementById("egg").innerHTML = nf.format(egg) + ' ' + " L.L.",
            document.getElementById("bread").innerHTML = nf.format(bread) + ' ' + " L.L.",
            document.getElementById("water").innerHTML = nf.format(water) + ' ' + " L.L.",


            document.getElementById("disl").innerHTML = nf.format(disl) + ' ' + " L.L.",
            document.getElementById("g98").innerHTML = nf.format(g98) + ' ' + " L.L.",
            document.getElementById("g95").innerHTML = nf.format(g95) + ' ' + " L.L.",
            document.getElementById("gas").innerHTML = nf.format(gas) + ' ' + " L.L.";
    } else {
        document.getElementById("bit").innerHTML = nf.format(sbit) + '' + "L.L",
            document.getElementById("gold").innerHTML = nf.format(sgold) + ' ' + " L.L.",
            document.getElementById("oil").innerHTML = nf.format(soil) + ' ' + " L.L.",
            document.getElementById("eth").innerHTML = nf.format(seth) + ' ' + " L.L.",

            document.getElementById("cow").innerHTML = nf.format(scow) + ' ' + " L.L.",
            document.getElementById("fish").innerHTML = nf.format(sfish) + ' ' + " L.L.",
            document.getElementById("chicken").innerHTML = nf.format(schicken) + ' ' + " L.L.",
            document.getElementById("lamb").innerHTML = nf.format(slamb) + ' ' + " L.L.",

            document.getElementById("cofe").innerHTML = nf.format(scofe) + ' ' + " L.L.",
            document.getElementById("sugar").innerHTML = nf.format(ssugar) + ' ' + " L.L.",
            document.getElementById("egg").innerHTML = nf.format(seggs) + ' ' + " L.L.",
            document.getElementById("bread").innerHTML = nf.format(sbread) + ' ' + " L.L.",
            document.getElementById("water").innerHTML = nf.format(swater) + ' ' + " L.L.",


            document.getElementById("disl").innerHTML = nf.format(sdisl) + ' ' + " L.L.",
            document.getElementById("g98").innerHTML = nf.format(sg98) + ' ' + " L.L.",
            document.getElementById("g95").innerHTML = nf.format(sg95) + ' ' + " L.L.",
            document.getElementById("gas").innerHTML = nf.format(sgas) + ' ' + " L.L.";


    }

}