# MovieDiscovery

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


This is an Angular application called Movie Discovery.
It allows users to:

View a navbar with links to Home & Search.

Search for movies by title or actor.

Display movie cards with details like title, rating, and poster.

Navigate to detailed movie views.

Has responsive design with Bootstrap.

Includes unit tests using Jasmine & Karma.

 Project Structure

movie-discovery/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── movie-search/
│   │   │   ├── movie-card/
│   │   │   └── movie-details/
│   │   ├── services/
│   │   │   └── movie-service.ts
│   │   ├── data/
│   │   │   └── movies.ts
│   │   ├── app.routes.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.component.spec.ts
│   ├── assets/
│   │   ├── happy-times.png
│   │   ├── fast-strike.jpg
│   │   └── fast&f.jpg
│   └── styles.css
├── angular.json
├── package.json
└── tsconfig.json

 Install packages
npm install
 Run the app
ng serve
Open in browser at http://localhost:4200
We can also run explicitly with the dev configuration:
ng serve --configuration=development

For production:
ng build --configuration=production


 Run tests
ng test
It launches Karma and opens results in browser.

 Routing
Uses Angular Router:
const routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: MovieSearch },
  { path: 'movie/:id', component: MovieDetails },
  { path: '**', redirectTo: '' }
];
Defined in app.routes.ts and imported into main.ts.

 UI & Design
 Bootstrap
Used for:

Navbar

Responsive columns

Cards

Shadows & spacing

Installed via:

"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]

 Search Flow
Components
<app-movie-search>
Contains an input & button, calls movieService.searchMovies(query).

<app-movie-card>
Displays each movie result.
Includes routerLink to movie details.

 Movie Images
Stored inside src/assets.

Referenced in movies.ts like:

poster_path: "assets/happy-times.png"
Angular CLI automatically copies assets during build.

 Testing
 Jasmine & Karma
Unit tests written with Jasmine in *.spec.ts files.

Examples:

it('should create the app', () => {
  const fixture = TestBed.createComponent(App);
  const app = fixture.componentInstance;
  expect(app).toBeTruthy();
});

it('should render navbar text', () => {
  const fixture = TestBed.createComponent(App);
  fixture.detectChanges();
  expect(fixture.nativeElement.textContent).toContain('Movie Discovery');
});
Run with:
ng test