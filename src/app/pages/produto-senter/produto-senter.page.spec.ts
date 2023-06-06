import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoSenterPage } from './produto-senter.page';

describe('ProdutoSenterPage', () => {
  let component: ProdutoSenterPage;
  let fixture: ComponentFixture<ProdutoSenterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdutoSenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
