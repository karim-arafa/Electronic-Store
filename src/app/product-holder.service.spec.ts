import { TestBed } from '@angular/core/testing';

import { ProductHolderService } from './product-holder.service';

describe('ProductHolderService', () => {
  let service: ProductHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
