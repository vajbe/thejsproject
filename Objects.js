let myTodos = {                     /* Data type as object */
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num){      /* Method inside object */
        this.meetings = num;        /* This keyword to access the current object's attributes */
    },
    summary: function(){
        return `You have ${this.meetings} Today !`;
    }
};

myTodos.addMeeting(12);
console.log(myTodos.summary());