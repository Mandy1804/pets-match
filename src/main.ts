import { bootstrapApplication } from '@angular/platform-browser';
import { ProdutoFormComponent } from './app/components/produto-form/produto-form.component';


bootstrapApplication(ProdutoFormComponent).catch((err) => console.error(err));
