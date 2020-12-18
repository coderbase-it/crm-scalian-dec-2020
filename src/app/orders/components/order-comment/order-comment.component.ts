import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-order-comment',
  templateUrl: './order-comment.component.html',
  styleUrls: ['./order-comment.component.scss']
})
export class OrderCommentComponent implements OnInit {
  public form!: FormGroup;
  constructor(
    private os: OrdersService,
    private fb: FormBuilder
  ) {

    this.os.item$.subscribe((item) => {
      // console.log(item.comment);
      this.form = this.fb.group({
        comment: [item.comment]
      });
      this.form.controls.comment.valueChanges.pipe(
        debounceTime(500)
      ).subscribe(data => {
        item.comment = data;
        this.os.update(item).subscribe(res => {
          console.log('enregistré');
        });
      });
    });

  }

  ngOnInit(): void {
  }

}
