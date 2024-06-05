import { TestBed } from '@angular/core/testing';

import { ItemServices } from './item.service';

describe('EmployeeService', () => {
  let service: ItemServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
