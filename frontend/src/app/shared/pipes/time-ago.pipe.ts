import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true,
  pure: false,
})
export class TimeAgoPipe implements PipeTransform {
  transform(iso: string | null | undefined): string {
    if (!iso) {
      return '';
    }
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) {
      return '';
    }
    const diffMs = Date.now() - d.getTime();
    const sec = Math.floor(diffMs / 1000);
    if (sec < 45) {
      return 'just now';
    }
    const min = Math.floor(sec / 60);
    if (min < 60) {
      return min === 1 ? '1 min ago' : `${min} min ago`;
    }
    const hr = Math.floor(min / 60);
    if (hr < 24) {
      return hr === 1 ? '1 hr ago' : `${hr} hrs ago`;
    }
    const day = Math.floor(hr / 24);
    if (day === 1) {
      return 'yesterday';
    }
    if (day < 7) {
      return `${day} days ago`;
    }
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }
}
