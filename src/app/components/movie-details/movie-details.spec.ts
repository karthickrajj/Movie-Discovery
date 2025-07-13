import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetails } from './movie-details';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieDetails', () => {
  let component: MovieDetails;
  let fixture: ComponentFixture<MovieDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MovieDetails,
        RouterTestingModule.withRoutes([]),
       HttpClientTestingModule  ]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
