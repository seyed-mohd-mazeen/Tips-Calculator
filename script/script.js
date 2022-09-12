function tipsCalculator() {
    var tipsPercent = 5;
    var amount = document.getElementById("amount").value;
    var rating = document.getElementById("ratings").value;
    var people = document.getElementById("noOfPeople").value;
    var percent = document.getElementById("amount").value * tipsPercent/100 ;
    var perperson = Math.round( percent / document.getElementById("noOfPeople").value);
    if (amount == "" || amount == 0) {
        alert('Please enter an amount')
        return false;
    } else if (rating == "") {
        alert("Please provide rating")
        return false;
    } else if (people == "" || people == 0) {
        alert("Please enter the number of people")
        return false;
    }
    document.getElementById("tips").innerHTML = "The tips is ₹".concat(perperson);
}