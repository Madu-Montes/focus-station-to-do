import { Component, signal } from '@angular/core';
import { TaskForm } from './components/task-form/task-form';
import { TaskList } from './components/task-list/task-list';
import { Timer } from './components/timer/timer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TaskForm,
    TaskList,
    Timer
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-app');
}
