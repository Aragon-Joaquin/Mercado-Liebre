function includeHTML(name) {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute(`insert-${name}-html`);
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            elmnt.removeAttribute(`insert-${name}-html`);
            includeHTML(name);
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
  };
  includeHTML('navbar');    includeHTML('footer');
  //https://www.w3schools.com/howto/howto_html_include.asp. Can be improved.
