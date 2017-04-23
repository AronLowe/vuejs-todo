document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      tasks: ['mow lawn',
        'clean room',
        'pay bills'
      ],
      newTask: ""
    },
    methods: {
      addTask: function() {
        
        this.tasks.push(this.newTask);
        this.newTask = "";
      }
    }
  });
});

// Data is instance variable (called methods n vue)
// methods house methods

