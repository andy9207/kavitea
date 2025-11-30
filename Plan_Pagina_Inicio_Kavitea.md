# Plan: Pagina de Inicio Kavitea

## Resumen
Crear la pagina de inicio (homepage) para Kavitea con Tailwind CSS, siguiendo los colores de la marca y las pautas de diseno establecidas.

## Colores de la Marca
- **Verde Kavitea (Primario):** `#0E4B3C` - Organico, saludable, frescura
- **Azul Marino Kavitea (Secundario):** `#0A1D31` - Premium, internacional

---

## Checklist de Implementacion

### Fase 1: Configuracion de Tailwind CSS ✅
- [x] Instalar tailwindcss-rails gem
- [x] Ejecutar `rails tailwindcss:install`
- [x] Configurar colores personalizados de Kavitea (en CSS con @theme para Tailwind v4)
- [x] Verificar que Tailwind funciona correctamente

**Archivos modificados:**
- `Gemfile` - Agregado tailwindcss-rails
- `app/assets/tailwind/application.css` - Colores Kavitea configurados

---

### Fase 2: Controlador y Rutas ✅
- [x] Crear `PagesController` con accion `home`
- [x] Configurar ruta raiz (`root`) apuntando a `pages#home`
- [x] Crear vista `app/views/pages/home.html.erb`

**Archivos creados/modificados:**
- `app/controllers/pages_controller.rb` - Creado
- `config/routes.rb` - Ruta root agregada
- `app/views/pages/home.html.erb` - Creado con Hero y USPs

---

### Fase 3: Layout Principal ✅
- [x] Actualizar `application.html.erb` con estructura base
- [x] Agregar meta tags SEO basicos (description, keywords, Open Graph)
- [x] Configurar fuentes (Google Fonts - Inter)

**Archivo modificado:**
- `app/views/layouts/application.html.erb`

---

### Fase 4: Navegacion/Header ✅
- [x] Crear partial `_navbar.html.erb` para la barra de navegacion
- [x] Agregar logo Kavitea (placeholder texto inicialmente)
- [x] Implementar enlaces de navegacion:
  - [x] Inicio
  - [x] Quienes Somos
  - [x] Productos
  - [x] Contacto
- [x] Hacer navbar sticky (fija al hacer scroll)
- [x] Implementar menu hamburguesa para mobile
- [x] Agregar efecto de transparencia/solido en scroll
- [x] Aplicar colores de marca

**Archivos creados:**
- `app/views/shared/_navbar.html.erb`
- `app/javascript/controllers/navbar_controller.js` (Stimulus para menu mobile)

---

### Fase 5: Footer ✅
- [x] Crear partial `_footer.html.erb`
- [x] Agregar logo/nombre Kavitea
- [x] Incluir enlaces de navegacion rapida
- [x] Agregar informacion de contacto:
  - [x] Email
  - [x] WeChat/WhatsApp
- [x] Incluir iconos de redes sociales (LinkedIn, Instagram)
- [x] Agregar copyright y ano actual (dinamico)
- [x] Mensaje final amistoso: "Colaboremos juntos"
- [x] Hacer responsive

**Archivo creado:**
- `app/views/shared/_footer.html.erb`

---

### Fase 6: Hero Section (Seccion Principal) ✅
- [x] Crear contenedor hero con altura completa de viewport
- [x] Agregar imagen de fondo placeholder (gradient de colores Kavitea)
- [x] Implementar titular principal: "Hidratacion saludable 100% organica, 0 azucar y 0 calorias"
- [x] Agregar subtitulo explicativo sobre los productos
- [x] Crear boton CTA "Contactanos para colaborar" (estilo destacado con hover)
- [x] Hacer responsive (mobile-first)

**Implementado en:**
- `app/views/pages/home.html.erb`

---

### Fase 7: Puntos Clave de Venta (USPs) ✅
- [x] Crear seccion con 4 bloques de beneficios
- [x] Disenar iconos/badges para cada punto:
  - [x] "0 Calorias"
  - [x] "0 Azucar"
  - [x] "100% Organico"
  - [x] "Hidratacion Funcional"
- [x] Usar grid responsive (4 columnas desktop, 2 tablet, 1 mobile)
- [x] Aplicar colores de marca en iconos/bordes
- [x] Hover effects en cada tarjeta

**Implementado en:**
- `app/views/pages/home.html.erb`

---

### Fase 8: Imagenes Placeholder ✅
- [x] Agregar imagen placeholder para hero section (usando gradient CSS)
- [x] Crear iconos SVG simples para los puntos de venta (inline SVGs)
- [x] Documentar donde colocar las imagenes reales despues

**Nota:** Para agregar imagenes reales:
- Reemplazar gradient del hero por imagen en `app/views/pages/home.html.erb`
- Colocar imagenes en `app/assets/images/`

---

### Fase 9: Estilos Tailwind Personalizados ✅
- [x] Definir clases utilitarias para botones CTA
- [x] Crear hover effects suaves
- [x] Agregar transiciones CSS (duration-300)
- [x] Implementar sombras y efectos visuales sutiles

---

### Fase 10: Responsive Design ✅
- [x] Verificar diseno en mobile (320px - 480px)
- [x] Verificar diseno en tablet (481px - 768px)
- [x] Verificar diseno en desktop (769px+)
- [x] Ajustar tamanos de fuente responsive (text-4xl md:text-5xl lg:text-6xl)
- [x] Ajustar espaciados responsive (py-16 md:py-24)

---

### Fase 11: Testing y Verificacion ✅
- [x] Probar en navegador local (`bin/dev`)
- [x] Verificar que no hay errores en consola
- [x] Comprobar accesibilidad basica (contraste de colores)
- [x] Verificar tiempos de carga

**Para probar:** Visita http://localhost:3000 en tu navegador

---

## Archivos Clave a Crear/Modificar

| Archivo | Accion | Descripcion |
|---------|--------|-------------|
| `Gemfile` | Modificar | Agregar tailwindcss-rails |
| `config/tailwind.config.js` | Crear | Configurar colores Kavitea |
| `config/routes.rb` | Modificar | Agregar root route |
| `app/controllers/pages_controller.rb` | Crear | Controlador de paginas |
| `app/views/pages/home.html.erb` | Crear | Vista de la homepage |
| `app/views/layouts/application.html.erb` | Modificar | Layout con estructura base |
| `app/views/shared/_navbar.html.erb` | Crear | Barra de navegacion |
| `app/views/shared/_footer.html.erb` | Crear | Pie de pagina |
| `app/javascript/controllers/navbar_controller.js` | Crear | Controlador Stimulus menu mobile |

---

## Configuracion de Colores Tailwind

```javascript
// config/tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'kavitea-green': '#0E4B3C',
        'kavitea-blue': '#0A1D31',
      }
    }
  }
}
```

---

## Textos Sugeridos

**Titular:**
> "Hidratacion saludable 100% organica, 0 azucar y 0 calorias"

**Subtitulo:**
> "Bebidas funcionales: electrolitos en stick y te listo para beber, pensados para una hidratacion sana y sin remordimientos."

**CTA:**
> "Contactanos para colaborar"

---

## Orden de Ejecucion Recomendado

1. **Fase 1:** Configurar Tailwind CSS
2. **Fase 2:** Crear controlador y rutas
3. **Fase 3:** Actualizar layout principal
4. **Fase 4:** Implementar Navegacion/Header
5. **Fase 5:** Implementar Footer
6. **Fase 6:** Implementar Hero Section
7. **Fase 7:** Agregar Puntos Clave de Venta (USPs)
8. **Fase 8:** Agregar Placeholders e iconos
9. **Fase 9:** Pulir estilos Tailwind
10. **Fase 10:** Ajustes responsive
11. **Fase 11:** Testing y verificacion final
