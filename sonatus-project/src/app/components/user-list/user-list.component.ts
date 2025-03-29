import { Component } from '@angular/core';
import { User } from '../../modals/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  title = 'sonatus-project';
  users:User[]=[];
  tableColumns=["id","name","email"];
  selectedUser: any;
  isUserSelected: boolean=false;
  searchQuery: string="";
  filteredList: any;
  isLoading: boolean=false;
  errorMessage: string="";
  sortField: string = 'name';
  sortDirection: boolean = true;

  constructor(
    private userService: UserService 
  ) {
  }

  ngOnInit():void{
    this.loadUsers(); 
  }
  loadUsers(): void {
    this.isLoading = true;
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
  
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load users.';
        this.isLoading = false;
      }
    );
  }
  
  
  sortUsers(field: string): void {
    this.sortField = field;
    this.sortDirection = !this.sortDirection;
    this.users.sort((a:any, b:any) => {
      const valueA = a[field];
      const valueB = b[field];
      const compare = valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
      return this.sortDirection ? compare : -compare;
    });
  }


  onUserClick(user:any){
    this.isUserSelected=true;
    this.selectedUser=user;

  }

  onClickClose(){
    this.isUserSelected=false;
  }
}
