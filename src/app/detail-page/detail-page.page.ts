import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.page.html',
  styleUrls: ['./detail-page.page.scss'],
})
export class DetailPagePage implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    let obj: string[] = [];
    Array.from(this.route.snapshot.paramMap.keys).forEach(key => {
      obj.push(this.route.snapshot.paramMap.get(key) || '');
    });
    alert(obj);

  }

}
