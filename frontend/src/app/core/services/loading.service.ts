import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private readonly counter = new BehaviorSubject<number>(0);
  readonly isLoading$ = new BehaviorSubject<boolean>(false);

  show(): void {
    const next = this.counter.value + 1;
    this.counter.next(next);
    this.isLoading$.next(true);
  }

  hide(): void {
    const next = Math.max(0, this.counter.value - 1);
    this.counter.next(next);
    this.isLoading$.next(next > 0);
  }

  reset(): void {
    this.counter.next(0);
    this.isLoading$.next(false);
  }
}
