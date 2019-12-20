import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class LoaderService {

    public loaderCounter: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    public show(): void {

        this.loaderCounter.next(this.loaderCounter.value + 1);

    }

    public hide(): void {

        this.loaderCounter.next(this.loaderCounter.value - 1);

    }

}