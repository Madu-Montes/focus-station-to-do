import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
})
export class Timer {
  initialTime = 30 * 60;
  time = signal(this.initialTime);
  isRunning = false;
  intervalId: any = null;

  startTimer() {
    if (this.isRunning) return;
    if (this.time() <= 0) return;

    this.isRunning = true;

    this.intervalId = setInterval(() => {
      if (this.time() > 0) {
        this.time.update((t) => t - 1);
      } else {
        this.pauseTimer();
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.intervalId);
    this.isRunning = false;
  }

  resetTimer() {
    clearInterval(this.intervalId);
    this.time.set(this.initialTime);
    this.isRunning = false;
  }

  formattedTime = computed(() => {
    const minutes = Math.floor(this.time() / 60);
    const seconds = this.time() % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  });
}
