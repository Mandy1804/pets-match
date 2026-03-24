import { bootstrapApplication } from '@angular/platform-browser';
import { PetFormComponent } from './app/components/pet-form/pet-form.component';


bootstrapApplication(PetFormComponent).catch((err) => console.error(err));
