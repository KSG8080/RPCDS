function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'Simulations/deprevationData.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function assignDeprevation(data) {
    loadJSON(function (response) {
        var JSONString = JSON.parse(response);
        for (let i = 0; i < data.length; i++) {
            let random = Math.floor(Math.random() * 219626);
            data[i].postcode = JSONString[random].Postcode;
            data[i].SIMD16_Rank = JSONString[random].SIMD16_Rank;
            storeData(data);
        }
        window.location.replace("https://devweb2018.cis.strath.ac.uk/~cxb15176/RPCDS/simulatedData.html");
    });
}