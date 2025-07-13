import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWMxMmU3MTEzNzg5NzA5YzM3MjYzNjhmMWUzZWY2OCIsIm5iZiI6MTc1MjQwOTg0Ni45NTI5OTk4LCJzdWIiOiI2ODczYTZmNjA3ZGNiOTdiNzJhOTgwZmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MI2x2dx1T5Frszw_OJPHaHgBJtvKSjVIQ_sjKrnPies';
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req);
};
