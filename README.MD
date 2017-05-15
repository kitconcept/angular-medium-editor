[![kitconcept GmbH](https://kitconcept.com/logo.png)](https://kitconcept.com)

# angular-medium-editor

## Installation

To install this library, run:

```bash
$ npm install angular-medium-editor --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install angular-medium-editor
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { MediumEditorModule } from 'angular-medium-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    MediumEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
 <medium-editor ngModel name="content" class="editable" #content="ngModel"></medium-editor>

```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [kitconcept GmbH](mailto:info@kitconcept.com)
