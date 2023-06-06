import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutosListPage } from './produtos-list.page';

describe('ProdutosListPage', () => {
  let component: ProdutosListPage;
  let fixture: ComponentFixture<ProdutosListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdutosListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
