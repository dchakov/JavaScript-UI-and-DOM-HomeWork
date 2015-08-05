function createCalendar(selector, events) {
    var container = document.querySelector(selector);
    var dayBox = document.createElement('div');
    var dayBoxTitle = document.createElement('strong');
    var dayBoxContent = document.createElement('div');
    var dayBoxes = [];
    var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    dayBoxContent.innerHTML = '&nbsp;';

    var selectedBox = null;

    container.style.width = (130 * 7.5) + 'px';

    dayBox.style.display = 'inline-block';
    dayBox.style.width = '130px';
    dayBox.style.height = '130px';
    dayBox.style.margin = '0';
    dayBox.style.padding = '0';
    dayBox.style.border = '1px solid black';

    dayBoxTitle.style.display = 'block';
    dayBoxTitle.style.background = 'green';
    dayBoxTitle.style.textAlign = 'center';
    dayBoxTitle.style.color = 'purple';
    dayBoxTitle.style.fontSize = '12px';
    dayBoxTitle.style.borderBottom = '1px solid purple';

    dayBoxTitle.className = 'day-title';
    dayBoxContent.className = 'day-content';

    dayBox.appendChild(dayBoxTitle);
    dayBox.appendChild(dayBoxContent);


    for (var i = 1; i <= 30; i += 1) {
        dayBoxTitle.innerHTML = weekDays[(i - 1) % weekDays.length] + ' ' + i + ' June 2014';
        dayBoxes.push(dayBox.cloneNode(true));
    }

    for (var i = 0; i < events.length; i += 1) {
        var currentEvent = events[i]
        dayBoxes[currentEvent.date].innerHTML += currentEvent.hour + ' ' + currentEvent.title;
    }

    function onBoxClick(ev) {
        if (selectedBox) {
            selectedBox.style.background = '';
        }
        if (selectedBox && selectedBox === this) {
            selectedBox = null;
        } else {
            this.style.background = 'yellowgreen';
            selectedBox = this;
        }
    }

    function onBoxMouseover(argument) {
       if (selectedBox !== this) {
			this.style.background = 'gold';
		}
    }

    function onBoxMouseout(argument) {
        if (selectedBox !== this) {
			this.style.background = '';
		}
    }
    
    var docFragment = document.createDocumentFragment();

    for (var i = 0; i < 30; i += 1) {
        docFragment.appendChild(dayBoxes[i]);
        dayBoxes[i].addEventListener('click', onBoxClick);
        dayBoxes[i].addEventListener('mouseover', onBoxMouseover);
        dayBoxes[i].addEventListener('mouseout', onBoxMouseout);
    }

    container.appendChild(docFragment);
}
