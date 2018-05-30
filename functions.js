function processDate(date, days) {
    
    var momentDate = moment(date);

    var startDate = momentDate.toDate();
    var endDate = momentDate.toDate();

    endDate.setDate(Number(endDate.getDate()) + Number(days));

    return processMonths(startDate, endDate);

}

function processMonths(start, end) {
    
    var startMonth = Number(start.getMonth());
    var endMonth = Number(end.getMonth());

    var months = new Map();
    var id;

    while (start < end) {
        id = nameMonth(start.getMonth())+start.getFullYear();
        if (!months.get(id)) {
            months.set(id, {
                "days": [],
                "name": nameMonth(start.getMonth()),
                "year": start.getFullYear(),
                "startOffset": [],
                "endOffset": []
            });
            for (var i = 0; i < start.getDay(); i++) {
                months.get(id).startOffset.push(i);
            }
            console.log(pastId);
            if (!!pastId) {
                for (var i = 7; i > months.get(id).startOffset.length; i--) {
                    months.get(pastId).endOffset.push(i);
                }
            }
            if (start.getMonth() === end.getMonth()) {
                for (var i = 7; i > end.getDay(); i--) {
                    months.get(id).endOffset.push(i);
                }
            }
        }
        months.get(id).days.push(processDay(start));
        start.setDate(start.getDate()+1);
        var pastId = id;
    }

    return Array.from(months.values());

}

function processDay(date) {

    var isWeekend = (date.getDay() === 6 || date.getDay() === 0);

    var output = {
        "number": date.getDate(),
        "weekend": isWeekend
    };

    return output;

}

function nameMonth(month) {
    var array = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    return array[month];
}