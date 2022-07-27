var currentMoment = moment();
var container = $('.container');

//print current day 
$('#currentDay').text(currentMoment.format('dddd, MMM D, YYYY'));

//create blocks programatically
for(let i=0; i<9; i++) {
    //create HTML elements for each row
    var textrow = $('<div>').addClass('row time-block');
    var hourEl = $('<div>').addClass('hour col-1');
    var textEl = $('<textarea>').addClass('textarea col-10');
    var saveBtn = $('<div>').addClass('saveBtn col-1');
    var saveIcon = $('<i>').addClass('fa fa-save');
    //append them to the page
    container.append(textrow);
    textrow.append(hourEl);
    textrow.append(textEl);
    textrow.append(saveBtn);
    saveBtn.append(saveIcon);

    //time manipulation
    let time = 9 + i;
    var currentHour = currentMoment.hour();
    if (time<currentHour) {
        textEl.addClass('past');
        //textEl.attr('disabled','disabled');
    }
    else if (time===currentHour) {
        textEl.addClass('present');
    }
    else {
        textEl.addClass('future');
    }
    textEl.addClass(`hour${time}`);
    saveBtn.addClass(`hour${time}`);


    //display in 12 hour time
    if (time>12) {
        time=time-12;
    }
    
    hourEl.text(time);
}

