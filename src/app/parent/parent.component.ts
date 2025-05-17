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
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked, OnDestroy {
  ngAfterContentChecked(): void {
    console.info('parent ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.info('parent ngAfterContentInit')

  }

  ngAfterViewInit(): void {
    console.info('parent ngAfterViewInit')
  }

  ngDoCheck(): void {
    console.info('parent ngDoCheck')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info('parent ngOnChanges')
  }

  ngOnDestroy(): void {
    console.info('parent ngOnDestroy')
  }

  ngOnInit(): void {
    console.info('parent ngOnInit')
  }

}
