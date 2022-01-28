// I like constants
$(document).ready(function () {
  $("#backToTheFuture").text(moment().format("dddd, MMMM Do"));
  for (let i = 7; i < 22; i++) {
    // create a row
    const row = $(`<div data-time=${i} id='${i}' class="row time">`);

    // creates time-stamp
    const col1 = $(
      `<div class="col-sm-2"><p class="hour">${formatAMPM(i)}00</p>`
    );

    // memo to save for each hour
    const col2 = $(
      `<div class="col-sm-8 noMore" id=text${i}><textarea class="description" placeholder="Nothing is happening this hour? Impossible. Fill it in!"></textarea>`
    );

    // just a fancy button from awesome fonts
    const col3 = $(
      `<div class="col-sm-1"><button class="save" id=${i}><i class="fas fa-cloud-upload-alt"></i></button>`
    );

    // connects each new row to corresponding column
    row.append(col1);
    row.append(col2);
    row.append(col3);

    //finally adds everything to the main .vessel
    $(".vessel").append(row);

    // color function stays within creating loop to and paints each new row
    //  the only variable that can't be constant

    function updateColors() {
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
    updateColors();
    getLocalStorage(i);
  }

  //  we're using 24 hour format, because it's better

  function formatAMPM(hours) {
    hours = hours % 24;
    hours = hours ? hours : 24;
    return hours;
  }
  // changing form am to 24
  formatAMPM();

  // make save button work again
  const save = $(".save");
  save.on("click", function () {
    let eventId = $(this).attr("id");
    let eventText = $(this).parent().siblings().children(".description").val();
    localStorage.setItem(eventId, eventText);
  });
});
// we call local storage for savings
function getLocalStorage(ID) {
  let value = localStorage.getItem(ID);
  if (value) {
    $(`#text${ID}`).text(value);
  }
}
