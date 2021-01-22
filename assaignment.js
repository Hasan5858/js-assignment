// github link here


function kilometerToMeter(kilometer) {
    var validateNumber = Math.sign(kilometer);

    if (validateNumber == 1 && typeof(kilometer) == 'number') {
        // if the number is positive 
        var meter = kilometer * 1000;
        return meter;
    } else {
        // if not positive
        return "Number is not valid";
    }

}

function budgetCalculator(watch, phone, laptop) {

    // positive number validate
    var validateWatch = Math.sign(watch);
    var validatePhone = Math.sign(phone);
    var validatelaptop = Math.sign(laptop);

    if ((validateWatch == 1 || validateWatch == 0) && (validatePhone == 1 || validatePhone == 0) && (validatelaptop == 1 || validatelaptop == 0)) {

        // watch each = 50;
        var watchPrice = watch * 50;
        // phone each = 100;
        var phonePrice = phone * 100;
        // laptop each = 500;
        var laptopPrice = laptop * 500;
        var totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;

    } else {
        return "Number is not valid";
    }

}




function hotelCost(days) {
    var totalPrice = 0;

    var validateNumber = Math.sign(days);
    // number validate
    if (validateNumber == 1 && typeof(days) == 'number') {

        if (days <= 10) {
            // firt 10 days 100 taka 
            totalPrice = days * 100;
        } else if (days <= 20) {
            // 2nd 11-20 days 80 taka 
            var firstPart = 10 * 100;
            var remain = days - 10;
            var secondPart = remain * 80;
            totalPrice = firstPart + secondPart;
        } else {
            // 3rd 21-next days 50 taka 
            var firstPart = 10 * 100;
            var secondPart = 10 * 80;
            var remain = days - 20;
            var thirdPart = remain * 50;
            totalPrice = firstPart + secondPart + thirdPart;
        }

        return totalPrice;
    } else {
        return "Number is not valid";
    }
}

function megaFriend(array) {

    // array validate
    if (Array.isArray(array) && array.length) {

        var max = 0;
        var maxFriend;

        for(var i = 0; i < array.length; i++){

            if (array[i].length > max) {
                max = array[i].length;
                maxFriend = array[i];
            }

        }
        return maxFriend;

    }else{
        return "Array not valid";
    }
}
