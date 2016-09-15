function myFunction() {
    var x = document.getElementById('combo').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("worker").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "http://api.fixer.io/latest?base=NZD;symbols=" + x, true);
    xhttp.send();
}