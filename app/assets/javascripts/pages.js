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
        if (this.newTask !== "") {
          this.tasks.push(this.newTask);
          this.newTask = "";
        }
      },
      deleteTask: function(inputTask) {
        var index = this.tasks.indexOf(inputTask);
        this.tasks.splice(index ,1);
      },
      
    }
  });
});

// Data is instance variable (called methods n vue)
// methods house methods

