import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Blog } from '../Models/BlogClass';

@Injectable({
  providedIn: 'root',
})
export class AddBlogServiceService {
  data!: Blog[];
  //this service share the blogs data to ohter components
  private approvalStageMessage = new BehaviorSubject<Blog[]>(this.data);
  currentApprovalStageMessage = this.approvalStageMessage.asObservable();

  constructor() {}
  updateApprovalMessage(message: Blog[]) {
    this.approvalStageMessage.next(message);
  }
}
