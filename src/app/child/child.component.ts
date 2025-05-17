import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked, OnDestroy {
  ngAfterContentChecked(): void {
    console.info('child ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.info('child ngAfterContentInit')

  }

  ngAfterViewInit(): void {
    console.info('child ngAfterViewInit')
  }

  ngDoCheck(): void {
    console.info('child ngDoCheck')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info('child ngOnChanges')
  }

  ngOnDestroy(): void {
    console.info('child ngOnDestroy')
  }

  ngOnInit(): void {
    console.info('child ngOnInit')
  }

}
