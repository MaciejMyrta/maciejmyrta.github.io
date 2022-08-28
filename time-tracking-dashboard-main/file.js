data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
] 

fetch("sample.json")

let timeTranslate = {'daily': 'Day', 'weekly': 'Week', 'monthly': 'Month'};
let currentActiveTimeRange = document.getElementsByClassName('range active')[0].id;

let btnContainer = document.getElementById("timeline");
let btns = btnContainer.getElementsByClassName("range");
let cards = document.querySelectorAll('div.card-content > div.card-desc')

let loadData = function(range) {

  cards.forEach(function(item) {

    let activity = item.querySelector('h4').textContent;
    let current = item.parentNode.querySelector('.current-span');
    let previous = item.parentNode.querySelector('.previous-span');
    let timespan = item.parentNode.querySelector('.time-span');
  
    timespan.textContent = timeTranslate[range];
  
    data.find(function(item) {
      if(item['title'] == activity) {
        current.textContent = item.timeframes[range]['current'];
        previous.textContent = item.timeframes[range]['previous'];
      }
    })
  });
}

loadData(currentActiveTimeRange);

for (let i = 0; i < btns.length; i++) {  
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    let timeFrame = this.id;
    loadData(timeFrame);
  });
};