function greeting(date) {
    return ("Hello! Happy " + daysOfWeek(date));
}

function daysOfWeek(date) {
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday"];
    return daysOfWeek[date.getDay()] + "!";
}