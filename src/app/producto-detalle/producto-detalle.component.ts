import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  @Input() id: number = 0;  // Recibe el id del producto
  @Output() regresar: EventEmitter<void> = new EventEmitter<void>();  // Evento de regresar

  producto: any;

  ngOnInit() {
    this.producto = this.getProductoById(this.id);
  }

  getProductoById(id: number) {
    const productos = [
      { 
        id: 1, 
        nombre: 'Limpiador Facial', 
        precio: 150, 
        descripcion: 'La espuma exfoliante limpiadora de toronja sin aceite que ayuda a combatir y prevenir la formación de granitos y puntos negros.', 
        imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/2Y3jDNEkQwU4kuZecjZiUW/2728813b79a9267519b9386b89c9ef67/ntgn_exfoliante_oilf-ree-es-ec'
      },
      { 
        id: 2, 
        nombre: 'Facial Purificante', 
        precio: '12', 
        descripcion: 'Tratamiento facial para limpiar y revitalizar la piel.',
        imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/2axmBf2Xe2KvCuU1ViDccJ/383f7fbfcfb6f5e110564b4b3a0cceb1/ntgn_limpiadro_oil-free-es-ec'
      },
      { 
        id: 3, 
        nombre: 'Manicura Spa', 
        precio: '8', 
        descripcion: 'Las toallitas faciales desmaquillantes son suaves y delicadas que remueven impurezas, grasa y maquillaje, todo en un simple paso. ¡incluso el rímel a prueba de agua!. Disfruta de una exclusiva fragancia relajante.',
        imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/5B2klgellidfQ8PfrJSeUZ/300fbbe8b49d20f9ad3216c9cc31a581/mu-remover2-es-ec'
      },
      { 
        id: 4, 
        nombre: 'Crema antiedad', 
        precio: '16', 
        descripcion:'Ayuda a reducir visiblemente líneas de expresión y manchas, unifica el tono y la textura de la piel y recupera la luminosidad. Para una piel más joven, uniforme y luminosa en tan sólo 1 semana.',
        imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/7BBmfAZIeWq7aoDmGlE1UT/4b2251231112d11db41b0ec06ccf7c5b/ntgn_brightboost_product-es-ec' 
      },
      { 
        id: 5, 
        nombre: 'Serum hidratante', 
        precio: '11', 
        descripcion:'Serum hidratante concentrado para cara y ojos que mantiene la piel suave, fortalecida e hidratada gracias a su formulación con 2 densidades de Ácido Hialurónico, Pro-Vitamina B5 y Glicerina. ',
        imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/4nKVZ56WnCFEnxtEjPwnSe/7fec16ee742d6dbfc84725a9588e2c8a/serum_facial_hb_01_v2-es-ec' 
      },
      { 
        id: 6, 
        nombre: 'Hydra Boost', 
        precio: '16', 
        descripcion:' Agua Micelar Desmaquillante es multifuncional: en un solo paso, limpia efectivamente, desmaquilla e hidrata por 24h para lucir una piel fortalecida y revitalizada. Piel normal a seca. Sin alcohol. No deja residuo en la piel.',
        imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/5wj1pHHcWOD1o2bJD7dIf/f7aa6b695ed190b5060e8cbeb48258ae/agua_micelar_hydro_boost_200ml-es-ec' 
      },
      { 
        id: 7, 
        nombre: 'Deep Clean', 
        precio: '18', 
        descripcion:' Remueve las impurezas y grasitud de la piel dejando una sensación refrescante. ',
        imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/7wAjluB8LohqLhCvaHpcaJ/418859f9b8894f134b483e74d80fbfc9/deep-clean-energizing-exfoliante_1-es-ec' 
      },
      { 
        id: 8, 
        nombre: 'Exfoliante facial Purificante', 
        precio: '12', 
        descripcion:'Elimina las toxinas que se acumulan en tu piel por la contaminación con este exfoliante facial.',
        imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/rPh2wlYBpiPVhoce9dREm/94acc96f5bd11a6584d3977b40ebc3e5/exfoliante-facial-purified-skin-es-ec' 
      },
      { 
        id: 9, 
        nombre: 'Limpiador con acido glicolico', 
        precio: '16', 
        descripcion:'Gel de limpieza facial que purifica tu piel, eliminando las toxinas que acumula tu piel por la contaminación.',
        imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/id2zSCPzDb3YUDOaJFBRP/f4f212053198bd1459c8ad9c9c03b2a0/ps-gel_ps-es-ec' 
      },
      { 
        id: 10, 
        nombre: 'Crema corporal', 
        precio: '22', 
        descripcion:' Contiene Ácido Hialurónico que absorbe hasta 1000 veces su peso en agua, aumentando y liberando la hidratación conforme tu piel lo necesita. ',
        imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/6O0YiJ2j9UU3rSWERFBgeJ/59953dff5417930d156c0aa1ad80e912/neutrogena_hydroboost_cuerpo-es-ec' 
      },
      { 
        id: 11, 
        nombre: 'Protector solar', 
        precio: '20', 
        descripcion:'Brinda protección de amplio espectro contra los rayos UVB, UVA, UVA profundos, además de ayudar a proteger contra la luz visible / luz azul, polución y radicales libres.',
        imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/35sAjeOMc0TWvJ5ixBYwfH/3d3ca1e60b3d94b1bed9916e94d68416/ps-sf70_sc1-es-ec' 
      },
      { 
        id: 12, 
        nombre: 'Desmaquillante de ojos ', 
        precio: '10', 
        descripcion:'Esta fórmula ultra-suave de doble fase se activa al agitarla para remover todo el maquillaje de los ojos, incluso el rímel a prueba de agua, sin dejar residuos grasosos.',
        imagen: 'https://images.ctfassets.net/m9qku1qrfhc5/37qjtJtHFSTtOtCzoDoF9n/c88e4c7c8aa177c6cb13a67d935d1e5a/oil-free-desmaquillante-de-ojos_0-es-ec' 
      }
    ];

    return productos.find(producto => producto.id === id);
  }

  // Emite el evento para regresar
  onRegresar() {
    this.regresar.emit();  // Emite el evento sin datos
  }
}
