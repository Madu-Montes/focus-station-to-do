import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  constructor(public taskService: TaskService) {}
}
