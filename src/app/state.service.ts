import { Posting } from './postings/posting.model';

export interface FilterState {
  country: string;
  department: string;
}

export interface PostingsState {
  postings: Posting[];
}

export interface ErrorState {
  error: string;
}

export class State {
  private filterState: FilterState;
  private postingsState: PostingsState;
  private errorState: ErrorState;

  getFilterState(): FilterState {
    return this.filterState;
  }

  saveFilterState(newState: FilterState): void {
    this.filterState = newState;
  }

  getPostingsState(): PostingsState {
    return this.postingsState;
  }

  savePostingsState(newState: PostingsState): void {
    this.postingsState = newState;
  }

  getErrorState(): ErrorState {
    return this.errorState;
  }

  saveErrorState(newState: ErrorState): void {
    this.errorState = newState;
  }
}
