import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../modals/user';

@Pipe({
  name: 'search',

})
export class SearchPipe implements PipeTransform {

  transform(users: User[], searchQuery: string): User[] {
    if (!searchQuery) {
      return users;
    }
  
    searchQuery = searchQuery.toLowerCase();
    return users.filter(user => 
      user.name.toLowerCase().includes(searchQuery) || 
      user.email.toLowerCase().includes(searchQuery)
    );
  }
  
}

