import { TestBed, async, inject } from '@angular/core/testing';

import { OptionalAuthGuard } from './optional-auth.guard';

describe('OptionalAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptionalAuthGuard]
    });
  });

  it('should ...', inject([OptionalAuthGuard], (guard: OptionalAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
