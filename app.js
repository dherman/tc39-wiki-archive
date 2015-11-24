(function(path, query, hash) {

  if (path === "/" || path === "/doku.php") {
    doku();
  } else {
    redirect('404.html');
  }

  function redirect(to) {
    window.location.href = to;
  }

  function doku() {
    if (!query) {
      redirect('doku.html');
      return;
    }

    query = query.replace(/^\?/, "");
    var match, namespace, name;
    if ((match = query.match(/id=([a-zA-Z\-_]+):([a-zA-Z\-_]+)/))) {
      namespace = match[1];
      name = match[2];
      var to = namespace + "/" + name + ".html";
      if (hash) {
        to = to + hash;
      }
      redirect(to);
    }
  }

})(document.location.pathname, document.location.search, document.location.hash);
