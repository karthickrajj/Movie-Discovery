# 🎬 MovieDiscovery

A simple Angular application to discover movies.  
It uses The Movie Database (TMDb) API, integrates with Bootstrap for responsive design, and includes unit tests with Jasmine + Karma.

---

## 🚀 Features

✅ Search for movies by title or actor  
✅ Display movie cards with title, overview, and poster  
✅ Navigate to detailed movie views  
✅ Responsive UI using Bootstrap  
✅ Unit tests with Jasmine & Karma  
✅ Hard-coded API Authorization via Angular HTTP Interceptor

---

## 📁 Project Structure

movie-discovery/
├── src/
│ ├── app/
│ │ ├── components/
│ │ │ ├── movie-search/
│ │ │ ├── movie-card/
│ │ │ └── movie-details/
│ │ ├── services/
│ │ │ └── movie-service.ts
│ │ ├── data/
│ │ │ └── movies.ts
│ │ ├── app.routes.ts
│ │ ├── app.component.ts / html / spec.ts
│ ├── assets/
│ │ ├── happy-times.png
│ │ ├── fast-strike.jpg
│ │ └── fast&f.jpg
│ └── styles.css
├── angular.json
├── package.json
└── tsconfig.json

yaml
Copy
Edit

---

## ⚙️ Installation & Setup

### 🔥 Install packages

```bash
npm install
🚀 Run in development mode
bash
Copy
Edit
ng serve
Then open http://localhost:4200 in your browser.

Or explicitly with dev configuration:

bash
Copy
Edit
ng serve --configuration=development
🏗 Build for production
bash
Copy
Edit
ng build --configuration=production
The build artifacts will be in the dist/ directory, optimized for performance.

🛠 API Integration
🎯 How API works
The app queries TMDb’s API.

API requests are automatically intercepted by an Angular HTTP interceptor that adds a hard-coded Bearer token.

🔑 Hard-coded AuthInterceptor
Your AuthInterceptor file (src/app/auth-interceptor.ts):

typescript
Copy
Edit
import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const token = 'eyJhbGciOi...'; // your hard-coded JWT
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req);
};
This means no need to store or fetch the token at runtime—every API request automatically includes it.

🔎 Search Flow
<app-movie-search>:
Contains an input box & button, calls movieService.searchMovies(query) on search.

<app-movie-card>:
Displays each movie result, includes a routerLink to details.

<app-movie-details>:
Shows detailed info for the selected movie.

🎨 UI & Styling
Built with Bootstrap for:

Navbar

Responsive columns

Cards & spacing

Bootstrap loaded via angular.json:

json
Copy
Edit
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]
🚦 Routing
Configured with Angular Router (app.routes.ts):

typescript
Copy
Edit
const routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: MovieSearch },
  { path: 'movie/:id', component: MovieDetails },
  { path: '**', redirectTo: '' }
];
🧪 Testing
✅ Unit Tests
Written with Jasmine, executed by Karma.

To run:

bash
Copy
Edit
ng test
Launches a browser showing test results.

Sample unit tests check for:

Component creation

Correct rendering of navbar text

AuthInterceptor adding headers