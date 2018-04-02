/*
  \_\_\_    \_      \_   \_\_\_\_  \_      \_    \_      \_
\_          \_\_  \_\_    \_        \_\_    \_    \_      \_
\_          \_  \_   \_    \_\_\_    \_  \_  \_    \_      \_
\_          \_        \_    \_        \_    \_\_    \_      \_
  \_\_\_    \_         \_    \_\_\_\_  \_      \_      \_\_\_
*/

var defaultCmenu = '';
var overCmenu = false;
var overSpecialCmenuElement = false;
var CmenuStyle = "default";

function closeCmenu() {
  if(!overCmenu) {
  document.getElementById("cmenu").parentNode.removeChild(document.getElementById("cmenu"));
  }
}

function openCmenu(e) {
  if(document.getElementById("cmenu")) {
    closeCmenu();
  }
  if(!overSpecialCmenuElement) {
  e = e || window.event;
  var cmenu = document.createElement("div");
  cmenu.id = 'cmenu';
  cmenu.className = 'customCmenu-' + CmenuStyle;
  cmenu.style.top = e.clientY + 'px';
  cmenu.style.left = e.clientX + 'px';
  cmenu.style.position = 'fixed';
  cmenu.innerHTML = defaultCmenu;
  cmenu.onmouseover = function() {overCmenu = true;};
  cmenu.onmouseout = function() {overCmenu = false;};
  document.body.appendChild(cmenu);
  e.preventDefault();
  }
}

function initCmenu(code) {
  defaultCmenu = code;
  document.oncontextmenu = openCmenu;
  document.onclick = closeCmenu;
}

Element.prototype.addSpecialCmenu = function(specialMenu) {
  this.oncontextmenu = function(e) {
    e = e || window.event;
    var cmenu = document.createElement("div");
    cmenu.id = 'cmenu';
    cmenu.style.top = e.clientY + 'px';
    cmenu.style.left = e.clientX + 'px';
    cmenu.style.position = 'fixed';
    cmenu.innerHTML = specialMenu;
    cmenu.className = 'customCmenu-'+CmenuStyle;
    cmenu.onmouseover = function() {overCmenu = true;};
    cmenu.onmouseout = function() {overCmenu = false;};
    document.body.appendChild(cmenu);
    e.preventDefault();
  };
  this.onmouseover = function() {overSpecialCmenuElement = true;};
  this.onmouseout = function() {overSpecialCmenuElement = false;};
};

function loadCSS(href) {
  var head;
  if(document.getElementsByTagName("head")[0]) {
    head = document.getElementsByTagName("head")[0];
  } else {
    head = document.createElement("head");
    document.appendChild(head);
  }
  var css_link = document.createElement("link");
  css_link.rel  = 'stylesheet';
  css_link.type = 'text/css';
  css_link.href = href;
  css_link.media = 'all';
  head.appendChild(css_link);
}

loadCSS("cmenu.css");
