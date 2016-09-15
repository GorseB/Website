function myFunction() {
    var x = document.getElementById('combo').value;
    document.getElementById('worker').innerHTML = x;
    $.ajax("http://api.fixer.io/latest?base=NZD;symbols=USD",
    {
        success: function (data) {
            $('#main').html($(data).find('#main *'));
            document.getElementById('worker').innerHTML = 'The page has been successfully loaded';
        },
        error: function () {
            document.getElementById('worker').innerHTML = 'An error occurred';
        }
    });
}