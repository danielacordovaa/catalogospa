import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  productos = [
    { 
      id: 1, 
      nombre: 'Exfoliante facial',
      precio: '17', 
      imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/2Y3jDNEkQwU4kuZecjZiUW/2728813b79a9267519b9386b89c9ef67/ntgn_exfoliante_oilf-ree-es-ec' // URL de imagen de Google
    },
    { 
      id: 2, 
      nombre: 'Limpiador facial', 
      precio: '12', 
      imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/2axmBf2Xe2KvCuU1ViDccJ/383f7fbfcfb6f5e110564b4b3a0cceb1/ntgn_limpiadro_oil-free-es-ec' // Otra URL de imagen
    },
    { 
      id: 3, 
      nombre: 'Toallitas desmaquillantes', 
      precio: '8', 
      imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/5B2klgellidfQ8PfrJSeUZ/300fbbe8b49d20f9ad3216c9cc31a581/mu-remover2-es-ec' // Otra URL de imagen
    },
    { 
      id: 4, 
      nombre: 'Crema antiedad', 
      precio: '16', 
      imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/7BBmfAZIeWq7aoDmGlE1UT/4b2251231112d11db41b0ec06ccf7c5b/ntgn_brightboost_product-es-ec' // Otra URL de imagen
    },
    { 
      id: 5, 
      nombre: 'Serum hidratante', 
      precio: '11', 
      imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/4nKVZ56WnCFEnxtEjPwnSe/7fec16ee742d6dbfc84725a9588e2c8a/serum_facial_hb_01_v2-es-ec' // Otra URL de imagen
    },
    { 
      id: 6, 
      nombre: 'Hydra Boost', 
      precio: '16', 
      imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/5wj1pHHcWOD1o2bJD7dIf/f7aa6b695ed190b5060e8cbeb48258ae/agua_micelar_hydro_boost_200ml-es-ec' // Otra URL de imagen
    },
    { 
      id: 7, 
      nombre: 'Deep Clean', 
      precio: '18', 
      imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/7wAjluB8LohqLhCvaHpcaJ/418859f9b8894f134b483e74d80fbfc9/deep-clean-energizing-exfoliante_1-es-ec' // Otra URL de imagen
    },
    { 
      id: 8, 
      nombre: 'Exfoliante facial Purificante', 
      precio: '12', 
      descripcion:'Elimina las toxinas que se acumulan en tu piel por la contaminación con este exfoliante facial.',
      imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/rPh2wlYBpiPVhoce9dREm/94acc96f5bd11a6584d3977b40ebc3e5/exfoliante-facial-purified-skin-es-ec' // Otra URL de imagen
    },
    { 
      id: 9, 
      nombre: 'Limpiador con acido glicolico', 
      precio: '16', 
      imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/id2zSCPzDb3YUDOaJFBRP/f4f212053198bd1459c8ad9c9c03b2a0/ps-gel_ps-es-ec' // Otra URL de imagen
    },
    { 
      id: 10, 
      nombre: 'Crema corporal', 
      precio: '22', 
      imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/6O0YiJ2j9UU3rSWERFBgeJ/59953dff5417930d156c0aa1ad80e912/neutrogena_hydroboost_cuerpo-es-ec' // Otra URL de imagen
    },
    { 
      id: 11, 
      nombre: 'Protector solar', 
      precio: '20', 
      imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/35sAjeOMc0TWvJ5ixBYwfH/3d3ca1e60b3d94b1bed9916e94d68416/ps-sf70_sc1-es-ec' 
    },
    { 
      id: 12, 
      nombre: 'Desmaquillante de ojos ', 
      precio: '10', 
      imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/37qjtJtHFSTtOtCzoDoF9n/c88e4c7c8aa177c6cb13a67d935d1e5a/oil-free-desmaquillante-de-ojos_0-es-ec' 
    }

  ];

  @Output() verDetalles: EventEmitter<number> = new EventEmitter<number>();

  verDetallesProducto(id: number) {
    this.verDetalles.emit(id);
  }
}
