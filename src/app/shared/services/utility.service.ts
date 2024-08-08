import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  
  loading$ = this.loadingSubject.asObservable();

  constructor() {}

  /**
   * Start loading
   */
  startLoading() {
    this.loadingSubject.next(true);
  }

  /**
   * Stops loading
   */
  stopLoading() {
    this.loadingSubject.next(false);
  }

  /**
   * Handle loading with parameter
   * @param {boolean} loading 
   */
  setLoading(loading: boolean) {
    this.loadingSubject.next(loading);
  }
}
