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
        // console.log("add that task son....", this.newTask);
        this.tasks.push(this.newTask);
      }
    }
  });
});

