# Angular Tippy.JS Directive & Service

  This is a wrapper around the Tippy.js. Easily create tooltips using a directive or utilize the service


## Installation

Install Using NPM

```javascript
  npm install --save angular-tippy
```


## Adding Module 

```javascript

import { AppComponent } from './app.component';
import { NgTippyModule } from 'ng-tippy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgTippyModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage as a Service
	
```javascript
import { NgTippyService, Instance} from 'ng-tippy';

  @Component({
    selector: 'app-test',
    template: `
      <div #element> </div>
    `
  })
  export class TestComponent implements OnInit {
    @ViewChild('element') element: ElementRef;
    private options = {
      content: 'This is a basic popup'
    }
    private tippyInstance: Instance;
    constructor(
      private tippy: NgTippyService;
    ) {

    }

    ngOnInit() {
      this.tippyInstance = this.tippy.init(this.element, this.options);
      this.tippyInstance.show(3000);
    }
  }
```


## Usage as a directive

```javascript
  const config = {
    content: 'This is a basic Popup'
  }
```

```html
  <div *ngTippy="config"> 
    
  </div>
```

## API

Check out the full documentation for the configuration at the official documents [Tippy.js](https://atomiks.github.io/tippyjs/all-options/)
    
## License
Apache License Version 2.0, January 2004

##TODO
Update positioning


