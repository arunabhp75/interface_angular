import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { without } from 'lodash';

library.add(faTimes);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'Angular App';
  theList: object[];


  constructor(private http: HttpClient) { }

  ngOnInit() : void {
    this.http.get<object[]>('../assets/data.json').subscribe(data => {
      //console.log(data);
      this.theList = data;
    })
  }

  deleteApt(theApt: object){
    this.theList = without(this.theList, theApt);
  }

}
