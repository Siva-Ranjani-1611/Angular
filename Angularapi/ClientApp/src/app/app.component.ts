import { Component, OnInit } from '@angular/core';
import { Angularmodel } from './angularmodel.model';
import { RegserviceService } from './shared/regservice.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  updateSubscription!: Subscription;
  constructor(public service: RegserviceService) {}
  
  TableData!: Angularmodel[];

  ngOnInit(): void {
    this.service.getdatalist().subscribe((res) => {
      this.TableData = res;
      console.log(this.TableData);
      //this.getData()
    });
   // this.updateSubscription = interval(3000).subscribe(
    //(val) => { this.getData() });
  }
  getData() {
    this.service.getdatalist().subscribe((data: any) => { 
      console.log(data);
      this.TableData = data;
    });
  }
  reloadCurrentPage() {
    window.location.reload();
  }
}
