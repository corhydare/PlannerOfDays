# Day Planning

## Description

"A worker from Coasta Rica is so busy that they needed a planner to help them sort the day out, with important events and other things that needed to be done"

Published at: https://corhydare.github.io/PlannerOfDays/

Following instructions were given:

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

### most of the struggle was with .js file:

```javascript
    function Crayons() {
      var currentTime = new Date().getHours();
      for (var i = 7; i < 22; i++) {
        // decide what to color, in a loop, for each created row it updates the time and color.

        if ($(`#${i}`).data("time") == currentTime) {
          $(`#text${i}`).addClass("nearBy");
        } else if (currentTime < $(`#${i}`).data("time")) {
          $(`#text${i}`).addClass("upcoming");
        }
      }
    }
    Crayons();
```

### local storage once again joins in

```javascript
function getLocalStorage(ID) {
  let savings = localStorage.getItem(ID);
  if (savings) {
    $(`#text${ID}`).text(savings);
  }
}
```

## Styling

spening more time with styling now. pretty things are beatiful:

### text area cleaning

```css
    background: transparent;
    border: none;
    outline: none;
    resize: none;
```

### body needed side scrolling removed and nice background added

```css
    overflow-x: hidden;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: linear-gradient(#F8B195, #F67280, #C06C84, #6C5B7B, #355C7D);
```

## App

![Quiz is progress](screen.png)

## Conclusion

Things are starting to make more and more sense. I'm content.
