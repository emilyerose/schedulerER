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
        textEl.attr('disabled','disabled');
    }
    else if (time===currentHour) {
        textEl.addClass('present');
    }
    else {
        textEl.addClass('future');
    }

    //display in 12 hour time
    if (time>12) {
        time=time-12;
    }
    
    //gives the textarea a class 'hours{time}' and saveBtn a matching ID
    textEl.addClass(`hour${time}`);
    saveBtn.attr('id',`hour${time}`);
    //the text of hourEl displays the time block in question
    hourEl.text(time);
}

container.click(function(event){
    //if a save button was just clicked
    var target = $(event.target);
    if (target.hasClass('saveBtn')){
        var id =target.attr('id'); //gets the id from savebutton
        var textValue = $(`.textarea.${id}`).val(); //gets the contents of the right textarea by using the id from savebutton
        localStorage.setItem(id,textValue); //stores to localstorage
    }
}
)