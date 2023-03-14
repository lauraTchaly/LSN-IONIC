import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlide } from '@ionic/angular';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
// import { IonicStorageModule } from '@ionic/storage-angular'
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  @ViewChild(IonSlide) slides:IonSlide |any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  next(){
    this.slides.slideNext();
  }

  async start(){
    await Storage.caller({key: INTRO_KEY, value:'true'});
    this.router.navigateByUrl('/login', {replaceUrl:true});

  }

}
