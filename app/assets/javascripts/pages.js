document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      tasks: ['mow lawn',
        'clean room',
        'pay bills']
    }
  });
});

