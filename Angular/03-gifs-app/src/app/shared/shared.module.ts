import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';

@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent // Asegúrate de declarar el componente aquí
  ],
  imports: [
    CommonModule // Importa solo módulos, como CommonModule, aquí
  ],
  exports: [
    SidebarComponent, // Exporta el componente si quieres usarlo en otros módulos
    LazyImageComponent // Exporta el componente si quieres usarlo en otros módulos
  ]
})
export class SharedModule { }
