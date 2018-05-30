function processDate(date, days) {
    
    var startDate = new Date(date);
    var endDate = new Date(date);

    endDate.setDate(Number(endDate.getDate()) + Number(days));

    console.log(startDate)
    console.log(endDate);

    return processMonths(startDate, endDate);

}

function processMonths(start, end) {
    
    var startMonth = Number(start.getMonth());
    var endMonth = Number(end.getMonth());

    var months = new Map();

    while (start <= end) {
        var id = nameMonth(start.getMonth())+start.getFullYear();
        if (!months.get(id)) {
            months.set(id, {
                "days": [],
                "name": nameMonth(start.getMonth()),
                "year": start.getFullYear(),
                "startOffset": "",
                "endOffset": ""
            });
        }
        months.get(id).days.push(processDay(start));
        start.setDate(start.getDate()+1);
    }

    return Array.from(months.values());

}

function processDay(date) {

    var isWeekend = (date.getDay() > 4);

    var output = {
        "number": date.getDate(),
        "weekend": isWeekend
    };

    return output

}

function nameMonth(month) {
    switch (month) {
        case (0):
            return "January"
            break
        case (1):
            return "February"
            break
        case (2):
            return "March"
            break
        case (3):
            return "April"
            break
        case (4):
            return "May"
            break
        case (5):
            return "June"
            break
        case (6):
            return "July"
            break
        case (7):
            return "August"
            break
        case (8):
            return "September"
            break
        case (9):
            return "October"
            break
        case (10):
            return "November"
            break
        case (11):
            return "December"
            break
    }
    return
}