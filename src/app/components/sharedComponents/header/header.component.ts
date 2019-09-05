import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  language: string;
  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    if (localStorage.getItem('currentLang')) {
      this.language = localStorage.getItem('currentLang');
    } else {
      this.language = 'en';
    }
  }

  ngOnInit() {
    console.log(this.language);
    
    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language);

    //  const browserLang = this.translate.getBrowserLang();
    //  this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    // this.translate.use(this.language);
    // const currentLang = this.translate.currentLang;
    // localStorage.setItem('currentLang', currentLang);
  }
  onChangeLang(lang: string) { 
    localStorage.setItem('currentLang', lang);
    this.language = lang;
    
  }
}
