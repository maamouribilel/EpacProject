import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  language: string;
  languageForm = new FormGroup({
    langSelect: new FormControl()
  });
  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    if (localStorage.getItem('currentLang')) {
      this.language = localStorage.getItem('currentLang');
      this.languageForm.get('langSelect').setValue(this.language);
    } else {
      this.language = 'en';
      this.languageForm.get('langSelect').setValue(this.language);
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
