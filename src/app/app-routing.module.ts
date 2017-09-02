import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthGuard } from './pages/auth/auth-guard.service';
import { ExportGameComponent } from './pages/export-game/export-game.component';
import { CharMakerComponent } from './pages/char-maker/char-maker.component';
import { DnaCodeComponent } from './pages/dna-code/dna-code.component';
import { GameMakerComponent } from './pages/game-maker/game-maker.component';
import { SniperComponent } from './pages/sniper/sniper.component';
import { GameMakerStartComponent } from './pages/game-maker-start/game-maker-start.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { BlogComponent } from './pages/blog/blog.component';
import { Blog1Component } from './pages/blog1/blog1.component';
import { Blog2Component } from './pages/blog2/blog2.component';
import { Blog3Component } from './pages/blog3/blog3.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'tutorial',
    component: TutorialComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/A Generative AI Produces a Hallucinatory Footage',
    component:Blog1Component
  },{
    path: 'blog/A.I. teams up with Game Developers',
    component:Blog2Component
  },{
    path: 'blog/What is Unsupervised Learning?',
    component:Blog3Component
  },
  {
    path: 'export-game',
    component: ExportGameComponent
  }, {
    path: 'game-maker',
    component: GameMakerComponent
  },
  {
    path: 'char-maker',
    component: CharMakerComponent
  },
  {
    path: 'dna-code',
    component: DnaCodeComponent
  },
  {
    path: 'sniper',
    component: SniperComponent
  },
  {
    path: 'terrain-gen',
    loadChildren: 'app/pages/terrain-gen/terrain-gen.module#TerrainGenModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'contact-us',
    loadChildren: 'app/pages/contact-us/contact-us.module#ContactUsModule',
  },
  {
    path: 'repository',
    loadChildren: 'app/pages/repository/repository.module#RepositoryModule',
  },
  {
    path: 'auto-rigger',
    loadChildren: 'app/pages/auto-rigger/auto-rigger.module#AutoRiggerModule',
  },
  {
    path: 'my-library',
    loadChildren: 'app/pages/library/library.module#LibraryModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'style-transfer',
    loadChildren: 'app/pages/style-transfer/style-transfer.module#StyleTransferModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'motion-editor',
    loadChildren: 'app/pages/motion-editor/motion-editor.module#MotionEditorModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'gun-gen',
    loadChildren: 'app/pages/gun-gen/gun-gen.module#GunInterpModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'game-maker-start',
    component: GameMakerStartComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
