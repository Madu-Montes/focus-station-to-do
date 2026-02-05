import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskForm } from '../task-form/task-form';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})

export class TaskList {

  editingTaskId: number | null = null;
  editTitle: string = '';
  editPriority: 'high' | 'medium' | 'low' = 'low';

  constructor(public taskService: TaskService) {}

  startEdit(task: any) {
    this.editingTaskId = task.id;
    this.editTitle = task.title;
    this.editPriority = task.priority;
  }

  saveEdit() {
    if (this.editingTaskId === null) return;

    this.taskService.updateTask(
      this.editingTaskId,
      this.editTitle,
      this.editPriority
    );

    this.cancelEdit();
  }

  cancelEdit() {
    this.editingTaskId = null;
    this.editTitle = '';
    this.editPriority = 'low';
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
}

