# Plan: Seccion "Contacto" - Kavitea

## Objetivo
Implementar una seccion de contacto completa que facilite la comunicacion con distribuidores, clientes potenciales y fabricas interesadas en colaborar con Kavitea. La seccion debe ser accesible, profesional y adaptada a socios internacionales.

## Decisiones del Usuario
- **Formulario:** Formulario visual (solo diseño HTML/CSS, sin backend funcional por ahora)
- **Mapa:** No incluir mapa de Google Maps, solo direccion en texto
- **WeChat:** Omitir WeChat, solo WhatsApp y otros medios
- **Posicion:** Seccion separada antes del footer

---

## Checklist de Implementacion

### Fase 1: Estructura Base ✅
- [x] Agregar seccion `<section id="contact">` en `home.html.erb`
- [x] Posicionar antes del footer
- [x] Aplicar padding responsive (`py-16 md:py-24`)
- [x] Usar contenedor `max-w-6xl mx-auto px-4`
- [x] Agregar atributo `data-controller="contact"` para animaciones

### Fase 2: Layout de 2 Columnas ✅
- [x] Columna izquierda: Formulario de contacto
- [x] Columna derecha: Informacion de contacto
- [x] Grid responsive (1 col mobile, 2 cols desktop)

### Fase 3: Formulario de Contacto ✅
- [x] Crear formulario con campos: Nombre, Empresa, Email, Tipo de consulta, Mensaje
- [x] Estilos consistentes con la marca
- [x] Validacion basica HTML5 (required)
- [x] Boton de envio con hover effects
- [x] Mensaje de confirmacion (Stimulus controller)

### Fase 4: Informacion de Contacto ✅
- [x] Tarjetas/bloques para cada medio de contacto
- [x] Iconos SVG para Email, WhatsApp, Ubicacion
- [x] Enlaces funcionales (mailto:, wa.me/)
- [x] Direccion fisica (texto placeholder)

### Fase 5: Redes Sociales ✅
- [x] Iconos de LinkedIn e Instagram
- [x] Enlaces a perfiles (placeholder #)

### Fase 6: Controlador Stimulus ✅
- [x] Crear `contact_controller.js` para animaciones
- [x] Manejar envio de formulario (visual)
- [x] Mostrar mensaje de confirmacion

### Fase 7: Responsive Design ✅
- [x] Grid 2 columnas en desktop, 1 en mobile
- [x] Espaciado responsive

---

## Archivos Creados/Modificados

| Archivo | Accion | Descripcion |
|---------|--------|-------------|
| `app/views/pages/home.html.erb` | Modificado | Agregada seccion "Contacto" antes del footer |
| `app/javascript/controllers/contact_controller.js` | Creado | Animaciones y manejo visual del formulario |

---

## Paleta de Colores Usados

- **Fondo seccion:** `bg-gradient-to-b from-kavitea-green/5 to-white`
- **Titulos:** `text-kavitea-blue`
- **Acentos:** `text-kavitea-green`
- **Formulario inputs:** `border-gray-300 focus:ring-kavitea-green focus:border-kavitea-green`
- **Boton enviar:** `bg-kavitea-green text-white hover:bg-kavitea-blue`
- **Iconos contacto:** `text-kavitea-green`

---

## Contenido Implementado

### Encabezado
- Titulo: "Contacto"
- Subtitulo: "¿Interesado en colaborar con Kavitea? Envianos un mensaje y te responderemos pronto"

### Formulario de Contacto
- Nombre completo (requerido)
- Empresa (opcional)
- Email (requerido)
- Tipo de consulta (dropdown): Distribucion, Fabricacion/Produccion, Colaboracion/Alianza, Otro
- Mensaje (requerido)
- Boton "Enviar Mensaje"
- Mensaje de exito al enviar

### Informacion de Contacto
- Email: info@kavitea.com (con enlace mailto:)
- WhatsApp: Enlace directo wa.me (placeholder)
- Ubicacion: Latinoamerica (texto)

### Redes Sociales
- LinkedIn (icono con enlace)
- Instagram (icono con enlace)

### Mensaje Final
- "¡Estamos listos para llevar la hidratacion saludable a tu mercado!"

---

## Controlador Stimulus

```javascript
// app/javascript/controllers/contact_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["animate", "form", "success"]

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

  submit(event) {
    event.preventDefault()
    // Show success message (visual only)
    if (this.hasSuccessTarget) {
      this.successTarget.classList.remove("hidden")
    }
    // Reset form
    if (this.hasFormTarget) {
      this.formTarget.reset()
    }
    // Hide success after 5 seconds
    setTimeout(() => {
      if (this.hasSuccessTarget) {
        this.successTarget.classList.add("hidden")
      }
    }, 5000)
  }

  disconnect() {
    this.observer.disconnect()
  }
}
```

---

## Notas

- El formulario es visual solamente (sin backend funcional)
- Al enviar, muestra mensaje de exito y resetea el formulario
- Los enlaces de WhatsApp y redes sociales son placeholders (actualizar con datos reales)
- Animaciones fade-in al scroll con IntersectionObserver

---

## Orden Final de Secciones en home.html.erb

1. Hero Section
2. Quienes Somos (About)
3. USPs (Puntos Clave de Venta)
4. Productos
5. **Contacto** ← Nueva seccion
6. Footer
