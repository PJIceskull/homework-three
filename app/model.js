let parentPage = "";

export function changePage(pathArray) {
  // print to console "mvc"
  console.log("mvc");
  $("#bread-crumb").html(``);

  if (pathArray == "") {
    console.log("mvc home");
    $.get(`pages/home.html`, (data) => {
      $("#app").html(data);
    }).fail(() => {
      console.log("failed");
    });
  } else {
    if (pathArray.length == 1) {
      $.get(`pages/${pathArray}.html`, (data) => {
        if (data) {
          $("#app").html(data);
        } else {
          alert("page not found.");
        }
        $("#app").html(data);
      }).fail(() => {
        console.log("Page not found");
      });
    } else {
      $("#bread-crumb").html(
        `<a href="#${pathArray[0]}">${pathArray[0]}</a> / ${pathArray[1]}`
      );
      $.get(`pages/${pathArray[1]}.html`, (data) => {
        if (data) {
          $("#app").html(data);
        } else {
          alert("page not found.");
        }
        $("#app").html(data);
      }).fail(() => {
        console.log("Page not found");
      });
    }
    // $("#app").html("another Page");
  }
}
