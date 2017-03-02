import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject} from "rxjs";
import {User} from "../models";

@Injectable()
export class UserService {

    //Subjects的一个变体是BehaviorSubject,其有"当前值"的概念。
    // 它储存着要发射给消费者的最新的值。无论何时一个新的观察者订阅它，都会立即接受到这个来自BehaviorSubject的"当前值"。

    currentUser: Subject<User> = new BehaviorSubject<User>(null);

    public setCurrentUser(newUser: User):void{
      this.currentUser.next(newUser);
    }

}
