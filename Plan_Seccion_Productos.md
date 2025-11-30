# Plan: Seccion "Productos" - Kavitea

## Objetivo
Implementar la seccion "Productos" en la pagina principal de Kavitea, presentando las dos lineas de productos (Electrolitos en Sticks y Te RTD) con enfoque en beneficios, diferenciadores y propuesta de valor para distribuidores y socios internacionales.

## Decisiones del Usuario
- **Posicion:** Despues de los USPs (Puntos Clave de Venta)
- **Animaciones:** Si, incluir fade-in al scroll con Stimulus
- **CTAs:** Solo boton "Contactar para Distribucion" (sin catalogo)
- **Imagenes:** Placeholders con gradients CSS e iconos SVG

---

## Contenido a Implementar

### 1. Introduccion de Seccion
- Titulo: "Nuestros Productos"
- Subtitulo: "Bebidas funcionales que cuidan tu cuerpo mientras disfrutas del sabor"
- Frase introductoria que reafirme la promesa de marca

### 2. Electrolitos en Sticks
- **Descripcion:** Sobres individuales de mezcla de electrolitos en polvo para disolver en agua
- **Beneficios:**
  - Hidratacion rapida antes, durante o despues de actividades fisicas
  - Reposicion de sales minerales y vitaminas
  - Sin azucar ni calorias anadidas
  - Apto para deportistas y personas activas
- **Diferenciadores:**
  - 100% libres de azucar y calorias
  - Ingredientes organicos certificados
  - Sabores naturales (limon, frutos rojos)
  - Sin aditivos artificiales
- **Conveniencia:** Facil de transportar, llevar al gimnasio, trabajo o viaje

### 3. Te RTD (Ready-to-Drink)
- **Descripcion:** Te helado listo para beber, sin azucar, sin calorias, 100% organico
- **Beneficios:**
  - Sabor agradable con cero calorias
  - No impacta indice glucemico
  - Rico en antioxidantes naturales
  - Apto para dietas cetogenicas
- **Diferenciadores:**
  - Tendencia de mercado en auge (te sin azucar crecio 41% en Asia)
  - Clean label / etiqueta limpia
  - Cultivos organicos, sin pesticidas
  - Sin comprometer el sabor
- **Variedades previstas:** Te verde con limon, te negro con durazno, infusion de hibisco

### 4. CTA para Distribuidores
- Boton "Contactanos para Distribucion" (enlace a #contact)
- Mensaje dirigido a socios B2B

---

## Checklist de Implementacion

### Fase 1: Estructura Base ✅
- [x] Agregar seccion `<section id="products">` en `home.html.erb`
- [x] Posicionar despues de los USPs (Puntos Clave de Venta)
- [x] Aplicar padding responsive (`py-16 md:py-24`)
- [x] Usar contenedor `max-w-6xl mx-auto px-4`
- [x] Agregar atributo `data-controller="products"` para animaciones

### Fase 2: Encabezado de Seccion ✅
- [x] Agregar titulo "Nuestros Productos" con estilo destacado
- [x] Subtitulo con propuesta de valor
- [x] Aplicar colores de marca (`text-kavitea-blue`, `text-kavitea-green`)
- [x] Centrar texto con `text-center`

### Fase 3: Tarjeta Electrolitos en Sticks ✅
- [x] Crear tarjeta con imagen placeholder (gradient o icono SVG)
- [x] Agregar badge "Proximamente"
- [x] Titulo del producto
- [x] Descripcion breve
- [x] Lista de beneficios con iconos check
- [x] Lista de diferenciadores (badges)
- [x] Seccion de conveniencia con icono
- [x] Hover effects consistentes

### Fase 4: Tarjeta Te RTD ✅
- [x] Crear tarjeta con imagen placeholder (gradient o icono SVG)
- [x] Agregar badge "Proximamente"
- [x] Titulo del producto
- [x] Descripcion breve
- [x] Lista de beneficios con iconos check
- [x] Lista de diferenciadores (badges)
- [x] Variedades de sabores
- [x] Hover effects consistentes

### Fase 5: Seccion de Datos de Mercado ✅
- [x] Bloque destacado con estadistica de tendencia
- [x] Mencion del crecimiento del 41% en te sin azucar en Asia
- [x] Mensaje de oportunidad para distribuidores

### Fase 6: CTA para Distribuidores ✅
- [x] Boton "Contactanos para Distribucion" (enlace a #contact)
- [x] Diseño centrado y llamativo
- [x] Colores de marca en boton (bg-kavitea-green)

### Fase 7: Controlador Stimulus (Animaciones) ✅
- [x] Crear `app/javascript/controllers/products_controller.js`
- [x] Implementar IntersectionObserver para detectar scroll
- [x] Agregar clases de animacion fade-in a elementos
- [x] Aplicar `data-products-target` a elementos animables

### Fase 8: Responsive Design ✅
- [x] Layout de tarjetas: 2 columnas en desktop, 1 en mobile (`grid md:grid-cols-2`)
- [x] Tamaños de fuente responsive
- [x] Espaciado responsive

---

## Archivos Modificados/Creados

| Archivo | Accion | Descripcion |
|---------|--------|-------------|
| `app/views/pages/home.html.erb` | Modificado | Agregada seccion "Productos" despues de USPs |
| `app/javascript/controllers/products_controller.js` | Creado | Controlador Stimulus para animaciones fade-in |

---

## Paleta de Colores Usados

- **Fondo seccion:** `bg-gradient-to-b from-white to-kavitea-green/5`
- **Fondo datos mercado:** `bg-kavitea-blue text-white`
- **Titulos:** `text-kavitea-blue`
- **Acentos:** `text-kavitea-green`, `bg-kavitea-green/10`
- **Tarjetas:** `border-kavitea-green/20 hover:border-kavitea-green`
- **Boton CTA:** `bg-kavitea-green text-white hover:bg-kavitea-blue`

---

## Controlador Stimulus para Animaciones

```javascript
// app/javascript/controllers/products_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["animate"]

  connect() {
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    this.animateTargets.forEach((target) => {
      target.classList.add("opacity-0", "translate-y-8")
      this.observer.observe(target)
    })
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-8")
        entry.target.classList.add("opacity-100", "translate-y-0", "transition-all", "duration-700")
        this.observer.unobserve(entry.target)
      }
    })
  }

  disconnect() {
    this.observer.disconnect()
  }
}
```

---

## Notas de Diseno

- Mantener consistencia con secciones existentes (Hero, About, USPs)
- Usar el mismo patron de tarjetas con hover effects
- Aplicar espaciado responsive consistente
- Iconos SVG inline (sin dependencias externas)
- Placeholders con gradients CSS hasta tener imagenes reales
- Animaciones sutiles fade-in al scroll con IntersectionObserver
- Badges "Proximamente" para indicar que los productos aun no estan en venta
- Enfoque B2B: CTAs orientados a distribuidores y socios

---

## Orden Final de Secciones en home.html.erb

1. Hero Section
2. Quienes Somos (About)
3. USPs (Puntos Clave de Venta)
4. **Productos** ← Nueva seccion
5. Footer/Contacto
