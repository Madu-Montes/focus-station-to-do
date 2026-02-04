import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  title = '';
priority: 'high' | 'medium' | 'low' = 'medium';

constructor(private taskService: TaskService) {}

addTask() {
  if (!this.title.trim()) return;

  this.taskService.addTask(this.title, this.priority);

  this.title = '';
  this.priority = 'medium';
}


}
