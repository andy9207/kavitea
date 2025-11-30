# Plan: Seccion "Quienes Somos" - Kavitea

## Objetivo
Implementar la seccion "Quienes Somos" (About Us) en la pagina principal de Kavitea, presentando la historia, mision, valores de la empresa para conectar emocionalmente con visitantes y potenciales socios internacionales.

## Decisiones del Usuario
- **Posicion:** Entre el Hero y los USPs (Puntos Clave de Venta)
- **Equipo:** Omitir seccion de equipo/fundadores por ahora
- **Animaciones:** Si, incluir fade-in al scroll con Stimulus

---

## Contenido a Implementar

### 1. Historia Breve
- Kavitea inicia en 2025 con la meta de revolucionar la hidratacion saludable
- Tono autentico y humano, cercano y confiable
- Mencion de que estan en proceso de permisos legales pero con vision clara

### 2. Mision y Valores
- **Mision:** Ofrecer bebidas saludables y deliciosas que mejoren el bienestar sin comprometer el sabor
- **Valores:**
  - Innovacion (formulas nuevas de electrolitos y te sin azucar)
  - Calidad (ingredientes organicos, estandares internacionales)
  - Salud (priorizar bienestar del consumidor)

### 3. Enfoque Internacional
- Apertura a colaboraciones globales
- Mentalidad de alianzas internacionales
- Compromiso con certificaciones y normas sanitarias internacionales

---

## Checklist de Implementacion

### Fase 1: Estructura Base ✅
- [x] Agregar seccion `<section id="about">` en `home.html.erb`
- [x] Posicionar ENTRE el Hero Section y los USPs (Puntos Clave de Venta)
- [x] Aplicar padding responsive (`py-16 md:py-24`)
- [x] Usar contenedor `max-w-6xl mx-auto px-4`
- [x] Agregar atributo `data-controller="about"` para animaciones

### Fase 2: Encabezado de Seccion ✅
- [x] Agregar titulo "Quienes Somos" con estilo destacado
- [x] Subtitulo breve introductorio
- [x] Aplicar colores de marca (`text-kavitea-blue`, `text-kavitea-green`)

### Fase 3: Historia de la Empresa ✅
- [x] Crear bloque con historia breve de Kavitea
- [x] Disenar con icono o imagen placeholder (gradient CSS)
- [x] Texto autentico y humano sobre el origen (2025)
- [x] Estilo: layout de 2 columnas (imagen + texto)

### Fase 4: Mision y Valores ✅
- [x] Agregar bloque de mision destacado (quote style)
- [x] Crear grid de 3 tarjetas para los valores principales:
  - [x] Innovacion (con icono SVG bombilla)
  - [x] Calidad (con icono SVG estrella/medalla)
  - [x] Salud (con icono SVG corazon)
- [x] Hover effects consistentes con seccion USPs

### Fase 5: Enfoque Internacional ✅
- [x] Crear bloque sobre alianzas internacionales
- [x] Mencionar certificaciones y estandares
- [x] Mensaje dirigido a socios potenciales (especialmente China)
- [x] Icono de globo terraqueo

### Fase 6: Controlador Stimulus (Animaciones) ✅
- [x] Crear `app/javascript/controllers/about_controller.js`
- [x] Implementar IntersectionObserver para detectar scroll
- [x] Agregar clases de animacion fade-in a elementos
- [x] Aplicar `data-about-target` a elementos animables

### Fase 7: Responsive Design ✅
- [x] Verificar mobile (320px - 480px)
- [x] Verificar tablet (481px - 768px)
- [x] Verificar desktop (769px+)
- [x] Ajustar grid de valores (3 cols desktop, 1 mobile)
- [x] Ajustar layout historia (stack en mobile)

---

## Archivos a Modificar/Crear

| Archivo | Accion | Descripcion |
|---------|--------|-------------|
| `app/views/pages/home.html.erb` | Modificar | Agregar seccion "Quienes Somos" entre Hero y USPs |
| `app/javascript/controllers/about_controller.js` | Crear | Controlador Stimulus para animaciones fade-in |

---

## Paleta de Colores a Usar

- **Fondo seccion:** `bg-gradient-to-b from-white to-kavitea-green/5`
- **Titulos:** `text-kavitea-blue`
- **Acentos:** `text-kavitea-green`, `bg-kavitea-green/10`
- **Tarjetas:** `border-kavitea-green/20 hover:border-kavitea-green`
- **Botones/CTAs:** `bg-kavitea-green text-white`

---

## Iconos SVG Necesarios (Inline)

1. **Innovacion** - Bombilla (idea/creatividad)
2. **Calidad** - Estrella o certificado/medalla
3. **Salud** - Corazon
4. **Internacional** - Globo terraqueo

---

## Textos Sugeridos

### Titulo Principal
> "Quienes Somos"

### Subtitulo
> "Conoce la historia y la vision detras de Kavitea"

### Historia
> "Kavitea nacio en 2025 con un proposito claro: revolucionar la hidratacion saludable en nuestra region. Somos un equipo de emprendedores apasionados por la vida sana, comprometidos con crear bebidas innovadoras que cuiden tu bienestar sin comprometer el sabor."

### Mision
> "Ofrecer bebidas saludables y deliciosas que mejoren el bienestar de las personas, utilizando ingredientes 100% organicos y formulas innovadoras."

### Mensaje Internacional
> "Creemos en construir alianzas internacionales solidas. Buscamos socios distribuidores y fabricantes de todo el mundo que compartan nuestra vision de llevar salud en cada sorbo. Nuestros productos cumplen con los mas altos estandares sanitarios internacionales."

---

## Controlador Stimulus para Animaciones

```javascript
// app/javascript/controllers/about_controller.js
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

- Mantener consistencia con secciones existentes (Hero, USPs)
- Usar el mismo patron de tarjetas con hover effects
- Aplicar espaciado responsive consistente
- Iconos SVG inline (sin dependencias externas)
- Placeholders con gradients CSS hasta tener imagenes reales
- Animaciones sutiles fade-in al scroll con IntersectionObserver
