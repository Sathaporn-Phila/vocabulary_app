import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'vocabulary_app';
  file : FileList;
  url: any;
  constructor(private domSanitizer: DomSanitizer) { }
  ngOnInit() {
  }
  changeSource(e){
    this.file = e.target.files[0];
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(this.file));
  }
  ngOnDestroy() {
    URL.revokeObjectURL(this.url)
  }
}

