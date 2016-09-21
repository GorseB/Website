function myFunction() {
    var x = document.getElementById('combo').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var str = this.responseText;
            var obj = JSON.parse(str);
            document.getElementById("worker").innerHTML = x;
            switch(x) {
                case "USD":
                    document.getElementById("worker").innerHTML = obj.rates.USD;
                    break;
                case "AUD":
                    document.getElementById("worker").innerHTML = obj.rates.AUD;
                    break;
                case "EUR":
                    document.getElementById("worker").innerHTML = obj.rates.EUR;
                    break;
                case "CAD":
                    document.getElementById("worker").innerHTML = obj.rates.CAD;
                    break;
                default:
                    break;
            }

        }
    };
    xhttp.open("GET", "http://api.fixer.io/latest?base=NZD;symbols=" + x, true);
    xhttp.send();
}