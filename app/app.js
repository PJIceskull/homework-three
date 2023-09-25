import { changePage } from "./model.js";

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  let path = pageID.split("/");
  //   console.log(hashTag);
  console.log("hash", hashTag);
  console.log("page name ", pageID);
  console.log("sub Page Name: ", path);

  changePage(path);
}

function initListeners() {
  console.log("Hello!");
}

function initSite() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initListeners();
  initSite();
});
