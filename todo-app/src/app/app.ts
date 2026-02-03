import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TaskForm } from './components/task-form/task-form';
import { TaskList } from './components/task-list/task-list';
import { Timer } from './components/timer/timer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
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
