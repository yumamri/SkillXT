import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserDto} from "../api/models/user-dto";
import {Observable} from "rxjs";
import {UsersService} from "../api/services/users.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly _http: HttpClient,
              private userService: UsersService) {
  }

  public addUser(user: UserDto): Observable<void> {
    return this.userService.addUser({body: user});
  }

  public searchUser(searchString: string, password: string): Observable<Array<UserDto>> {
    return this.userService.searchUsers({searchString: searchString});
  }

  public getUserByEmail(email: string): Observable<UserDto> {
    return this.userService.getUserByEmail({email: email});
  }

  public addUserCompetence(email: string, skill: string): Observable<void> {
    return this.userService.addUserCompetence({email: email, skill: skill});
  }

  public deleteUserCompetence(email: string, skill: string): Observable<void> {
    return this.userService.deleteUserCompetence({email: email, skill: skill});
  }

  public addUserInterest(email: string, skill: string): Observable<void> {
    return this.userService.addUserCompetence({email: email, skill: skill});
  }

  public deleteUserInterest(email: string, skill: string): Observable<void> {
    return this.userService.deleteUserCompetence({email: email, skill: skill});
  }
}
