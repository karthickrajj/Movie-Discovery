import { TestBed } from '@angular/core/testing';
import { HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';

describe('AuthInterceptor', () => {
  const interceptor = (req: HttpRequest<any>, next: HttpHandlerFn) =>
    TestBed.runInInjectionContext(() => AuthInterceptor(req, next));

  it('should add Authorization header with hardcoded token', (done) => {
    const mockRequest = new HttpRequest('GET', '/test');

    const mockNext: HttpHandlerFn = (req) => {
      expect(req.headers.get('Authorization')).toBe(
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWMxMmU3MTEzNzg5NzA5YzM3MjYzNjhmMWUzZWY2OCIsIm5iZiI6MTc1MjQwOTg0Ni45NTI5OTk4LCJzdWIiOiI2ODczYTZmNjA3ZGNiOTdiNzJhOTgwZmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MI2x2dx1T5Frszw_OJPHaHgBJtvKSjVIQ_sjKrnPies'
      );
      done();
      return { subscribe: () => {} } as any;
    };

    interceptor(mockRequest, mockNext);
  });

  it('should call next with cloned request', (done) => {
    const mockRequest = new HttpRequest('POST', '/api/test', { data: 'sample' });

    const mockNext: HttpHandlerFn = (req) => {
      expect(req.method).toBe('POST');
      expect(req.url).toBe('/api/test');
      expect(req.headers.has('Authorization')).toBeTrue();
      done();
      return { subscribe: () => {} } as any;
    };

    interceptor(mockRequest, mockNext);
  });
});
