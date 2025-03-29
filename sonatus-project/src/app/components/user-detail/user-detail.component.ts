import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../modals/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  @Input() selectedUser: User | null = null
  @Output() close = new EventEmitter<void>();
  closeDetails(): void {
    this.close.emit();
  }


}
