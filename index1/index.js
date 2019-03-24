Vue.component('todo-item',{
    props:['namepro'],
    template:"<li>{{namepro.id}}{{namepro.text}}</li>"
})
var app = new Vue({
    el: '#app',
    data: {
        message: 'demo',
        title: 'title',
        seen: true,
        //
        todos: [
            {
                id: 0,text: 'todo 1'
            },
            {
                id: 1,text: 'todo 2'
            }
        ]
    },
    methods: {
        revertMesg:function(){
            this.title = this.title.split('').reverse().join('')
        }
    },
})
app.seen = false; 
app.todos.push({text:'new item'})