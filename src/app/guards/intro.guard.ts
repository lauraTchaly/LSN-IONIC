import { Injectable } from '@angular/core';
//import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

export const INTRO_KEY = 'intro-seen';
@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanLoad {

  constructor(private router: Router){}

  async canLoad():Promise<boolean>{
    const hasSeenintro = await Storage.caller({key: INTRO_KEY});
    if (hasSeenintro && (hasSeenintro.value === 'true')){
      return true;
    }else{
      this.router.navigateByUrl('/intro',{replaceUrl:true});
      return false;
    }
  }
  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
}
//</boolean>