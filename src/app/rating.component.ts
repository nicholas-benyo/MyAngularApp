import { Component, Input} from '@angular/core';

@Component({
  selector: 'rating',
  template: `
    <ng-container *ngIf="rating <1;else elseBlock">
      <star (click)="onClick(1)"></star>
    </ng-container>
    <ng-template #elseBlock>
      <starfill (click)="onClick(1)"></starfill>
    </ng-template>
    <!--Star 2-->
    <ng-container *ngIf="rating <2;else elseBlock">
      <star (click)="onClick(2)"></star>
    </ng-container>
    <ng-template #elseBlock>
      <starfill (click)="onClick(2)"></starfill>
    </ng-template>
    <!--Star 3-->
    <ng-container *ngIf="rating <3;else elseBlock">
      <star (click)="onClick(3)"></star>
    </ng-container>
    <ng-template #elseBlock>
      <starfill (click)="onClick(3)"></starfill>
    </ng-template>
    <!--Star 4-->
    <ng-container *ngIf="rating <4;else elseBlock">
      <star (click)="onClick(4)"></star>
    </ng-container>
    <ng-template #elseBlock>
      <starfill (click)="onClick(4)"></starfill>
    </ng-template>
    <!--Star 5-->
    <ng-container *ngIf="rating <5;else elseBlock">
      <star (click)="onClick(5)"></star>
    </ng-container>
    <ng-template #elseBlock>
      <starfill (click)="onClick(5)"></starfill>
    </ng-template>
    {{ numOfReviews }}
  `,
  styles: [
    'star {color: orange}', 'starfill{color:orange}'
  ]
})

export class RatingComponent{
  @Input('rating') rating = 0;
  @Input() numOfReviews = 0;
  // tslint:disable-next-line:typedef
  onClick(ratingValue){
    this.rating = ratingValue;
  }
}
