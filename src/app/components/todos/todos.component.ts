import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[] ;
  constructor() { }
  inputTodo=''
  ngOnInit(): void {
    this.todos=[
      {
        content:"First Todo",
        completed:false
      },
      {
        content:"First Todo",
        completed:true
      }
    ]
  }

  toggleDone(id):void{
    this.todos.map((v,i)=>{
      if(i==id) v.completed =!v.completed
      return v;
    })
  }
  deleteTodo(id:number){
    this.todos=this.todos.filter((v,i)=> i!=id)
  }
  addTodo(){
    this.todos.push({
      content:this.inputTodo,
      completed:false
    })
  }

}
