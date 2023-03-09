function extractContent(value) {
    var content_holder = "";
  
    for (var i = 0; i < value.length; i++) {
      if (value.charAt(i) === '>') {
        continue;
        while (value.charAt(i) != '<') {
          content_holder += value.charAt(i);
        }
      }
  
    }
    console.log(content_holder);
  }
  
  extractContent("<p>Hello</p><a href='http://w3c.org'>W3C</a>");