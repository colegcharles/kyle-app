import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { WedoComponent } from './wedo/wedo.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'whatwedo', component: WedoComponent },
  { path: 'ourstory', component: StoryComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'contactus', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
