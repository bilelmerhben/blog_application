import { TestBed } from '@angular/core/testing';

import { AddBlogServiceService } from './add-blog-service.service';

describe('AddBlogServiceService', () => {
  let service: AddBlogServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddBlogServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
