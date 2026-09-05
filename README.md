# Cali Cheesecake Co.

INICIO DEL PROMPT

Eres el desarrollador frontend y diseñador líder de este proyecto. Vas a construir el sitio web de La Casa del Cheesecake, una repostería artesanal de Cali, Colombia, especializada en cheesecakes.

No generes un sitio genérico de repostería. Cada decisión visual y de interacción debe justificarse por el producto: un cheesecake es un objeto de capas, textura y corte. Ese es el mundo del que salen las decisiones de diseño.

1. Contexto de marca
Negocio: repostería artesanal de cheesecakes, con presencia fuerte en Instagram (@cheesecakecali).
Ciudad: Cali, Colombia.
Operación: únicamente domicilios en Cali. No hay local con servicio de mesa. No hay envíos nacionales.
Público: [[describe en 2 líneas: rango de edad, quién compra, para qué ocasiones]]
Tono de voz: [[cercano y cálido / premium y sobrio / juvenil y desparpajado — elige uno y da 2 ejemplos de frases reales de la marca]]
Diferencial real: [[qué las hace distintas frente a otras reposterías de Cali: receta, textura, tamaño, sabores exclusivos, tiempo de entrega]]

Escribe todos los textos en español de Colombia, en tono natural y específico. Nada de copy de plantilla tipo "Sabores que enamoran" o "Calidad y tradición desde siempre". Si una frase podría estar en el sitio de cualquier otra repostería del mundo, reescríbela.

2. Objetivo del sitio

El sitio tiene dos trabajos, en este orden de prioridad:

Que la marca se vea seria y deseable. Alguien que llega desde Instagram debe entender en 5 segundos qué venden y sentir antojo.
Que se pueda armar y enviar un pedido sin fricción.

Métrica de éxito: porcentaje de visitantes que completan un pedido y lo envían por WhatsApp.

Decisión crítica de alcance: el sitio tiene carrito y checkout completos, pero NO pasarela de pago en esta versión. El checkout recoge los datos del pedido y genera un mensaje estructurado que se abre en WhatsApp con el pedido completo. La lógica del carrito debe quedar totalmente aislada del método de entrega del pedido, para poder conectar Wompi o Bold más adelante sin reescribir nada.

3. Stack y restricciones técnicas
React + TypeScript + Vite + Tailwind CSS + shadcn/ui.
Sin backend, sin base de datos, sin autenticación, sin CMS.
Todo el contenido (sabores, precios, zonas de cobertura, horarios) vive en archivos de datos tipados en src/data/, no incrustado en los componentes. Debe poder editarse sin tocar JSX.
Estado del carrito con React Context + useReducer, persistido en localStorage. No instales librerías de estado.
No instales librerías de animación pesadas. Usa CSS transitions, @keyframes y IntersectionObserver cuando haga falta.
Sin librerías de carrusel. Los scrolls horizontales se hacen con scroll-snap-type nativo.
Componentes pequeños y de una sola responsabilidad. Ningún archivo debe pasar de ~150 líneas.
Tipa todo. Nada de any.

Este código se va a migrar a un repositorio y se va a seguir trabajando desde un editor con un agente de código. Escribe pensando en eso: nombres explícitos, sin lógica duplicada, sin componentes gigantes, sin dependencias innecesarias.

4. Sistema de diseño

Concepto rector: las capas del corte. Un cheesecake se entiende cuando se corta. El sitio se lee como un corte transversal: capas horizontales bien definidas, cada una con su propio peso visual, separadas por transiciones limpias en lugar de líneas decorativas.

Gasta la audacia en un solo lugar: la sección de sabores. Todo lo demás debe ser silencioso y disciplinado.

Paleta base — punto de partida; ajústala a los colores reales de la marca en Instagram si difieren:

Rol	Hex	Uso
Porcelana	
#FFFDFB	Fondo principal. El plato sobre el que va todo.
Crema	
#F2E6D2	Fondos de sección alternos, superficies elevadas.
Galleta	
#8A5A34	Bordes, detalles estructurales, estados hover.
Tinta	
#2B211C	Todo el texto. Marrón muy oscuro, nunca negro puro ni negro tintado.
Mora	
#A8213F	Acento único: CTAs, precio activo, badges. Usar poco.

Reglas de color:

El color dominante de la página lo ponen las fotos del producto, no los bloques de color. Fondos sobrios, fotos saturadas.
Mora se reserva para acción. Si aparece en algo que no es clicable, está mal usado.
Nada de gradientes decorativos ni washes de fondo.

Tipografía:

Display: Fraunces (Google Fonts), pesos 400 y 600, con font-optical-sizing alto en tamaños grandes. Es una serif con calidez y curvas, coherente con el producto.
Texto: Karla (Google Fonts), pesos 400 y 500.
Escala tipográfica con proporción clara y consistente. Los titulares de sección son grandes de verdad: la tipografía es un elemento activo del diseño, no un rótulo.
Prohibido: etiquetas en MAYÚSCULAS con letter-spacing sobre los títulos, resaltar una sola palabra del titular en otro color o itálica, cadenas de metadatos unidas con puntos medios, flechas "→" pegadas al texto de los botones.

Layout:

Ancho máximo de contenido 1200px, con secciones full-bleed cuando la foto lo justifique.
Radio de esquinas: 4px en elementos de interfaz, 16px en tarjetas de producto. No uses el mismo radio en todo.
Sombras: casi ninguna. La jerarquía se resuelve con espaciado y contraste de fondo, no con sombras grises.
Espaciado vertical generoso entre capas. Que respire.

Movimiento:

Un solo momento orquestado en la carga del hero. Nada más automático.
El resto del movimiento responde a acciones del usuario: abrir el panel de sabor, agregar al carrito, actualizar el total.
Respeta prefers-reduced-motion.
No pongas entradas fade-and-slide-up en cada sección al hacer scroll. Es el tell más obvio de una página generada.
5. Arquitectura de secciones

Una sola página con scroll narrativo, más una ruta de checkout.

5.1 — Header Minimal y transparente sobre el hero, con fondo sólido al hacer scroll. Logo, tres enlaces de ancla (Sabores, Ocasiones, Domicilios) y el ícono de carrito con contador. En móvil solo logo y carrito.

5.2 — Hero Foto o video en loop, a pantalla casi completa, de un cheesecake cortado: se debe ver la capa de galleta, el cuerpo y el topping. No uses slider ni carrusel. Encima: el nombre de la marca en Fraunces a gran tamaño, una línea de descripción concreta (no un eslogan) y un CTA único: "Armar mi pedido". Debajo del CTA, una línea de utilidad real: [[tiempo de entrega en Cali, ej. "Domicilios en Cali · pedidos con 24 horas de anticipación"]].

5.3 — Sabores (la sección protagonista)

Fila de categorías con scroll horizontal y snap: [[categorías reales, ej. Clásicos / Frutales / Chocolate / Sin azúcar]].
Grid de tarjetas de sabor: foto en formato vertical, nombre, precio desde, y un descriptor corto de textura o ingrediente.
Al tocar una tarjeta se abre un panel de detalle: sheet inferior en móvil, modal lateral en escritorio. Dentro: foto grande, descripción, selector de tamaño con precio que se actualiza en vivo, selector de cantidad, campo opcional de dedicatoria, y botón "Agregar al pedido".
El panel debe cerrarse con gesto, con Escape y con clic fuera. Al agregar, muestra confirmación breve y deja el panel abierto para seguir explorando.

5.4 — Ocasiones Tres bloques: cumpleaños, corporativo y eventos. Cada uno con foto propia, una descripción de una frase y un CTA que abre WhatsApp con un mensaje pre-armado según la ocasión. Esta sección existe para subir el ticket promedio; que no se sienta secundaria.

5.5 — Prueba social Galería curada de fotos reales de clientes, en grid tipo mosaico con alturas variables. Enlace al perfil de Instagram. Si hay testimonios, van sobre fondo crema, sin comillas gigantes decorativas.

5.6 — Domicilios Zonas de cobertura en Cali, horarios de entrega, anticipación mínima requerida y métodos de pago aceptados. Información pura, presentada de forma legible. Nada de mapa embebido en esta versión.

5.7 — Footer Contacto, WhatsApp, Instagram, horarios. Sobrio.

5.8 — Barra de pedido sticky (móvil) Aparece al hacer scroll más allá del hero. Muestra cantidad de ítems y total, y lleva al checkout. Es el elemento de mayor impacto en conversión; que sea imposible de perder pero que no tape contenido.

5.9 — Carrito y checkout (ruta /pedido)

Lista de ítems editables: cambiar cantidad, cambiar tamaño, eliminar.
Formulario de entrega: nombre, teléfono, dirección, barrio, fecha y franja horaria de entrega, notas.
Resumen con subtotal, domicilio y total.
Validación en línea, con mensajes que dicen qué pasó y cómo corregirlo, en la voz de la interfaz. Sin disculpas.
Botón final: "Enviar pedido por WhatsApp". Genera un mensaje formateado y legible con todos los ítems, datos de entrega y total, y abre wa.me con ese texto.
La función que arma el mensaje va aislada en src/lib/, recibe el estado del pedido y devuelve un string. Nada de lógica de WhatsApp dentro de los componentes.
6. Patrones de interacción

Adjunto capturas de referencia. Toma de ellas el comportamiento, no la estética — la identidad visual la define la sección 4.

[[Pega aquí tus 6–10 patrones de Mobbin, uno por línea, describiendo el comportamiento. Ejemplos del formato correcto:]]

[[Bottom sheet de personalización de producto que sube desde abajo y se cierra arrastrando]]
[[Categorías con scroll horizontal, snap y estado activo persistente]]
[[Barra inferior fija con total en vivo que aparece al hacer scroll]]
[[Contador de cantidad inline dentro de la tarjeta, sin abrir modal]]
[[Checkout de un solo paso con resumen siempre visible]]
7. Contenido

Usa contenido real. No inventes sabores ni precios: usa exactamente lo que está abajo.

Sabores: [[Lista real. Formato por línea: Nombre | descripción corta de textura o ingrediente | tamaños y precios]]

Tamaños y precios: [[Ej. Porción individual $X · 12cm $X · 18cm $X · 24cm $X]]

Cobertura y logística: [[Zonas de Cali · horarios · anticipación mínima · costo de domicilio]]

Contacto: [[Número de WhatsApp en formato internacional, ej. 573001234567 · @cheesecakecali]]

Si algún dato falta, deja un TODO visible en el archivo de datos. No inventes información de negocio.

8. Estructura de archivos
src/
  components/
    layout/        Header, Footer, StickyOrderBar
    sections/      Hero, Flavors, Occasions, SocialProof, Delivery
    flavors/       FlavorCard, FlavorDetailPanel, SizeSelector, CategoryScroller
    cart/          CartProvider, CartDrawer, CartItem, OrderSummary
    checkout/      DeliveryForm, CheckoutPage
    ui/            shadcn
  data/            flavors.ts, occasions.ts, delivery.ts, site.ts
  lib/             buildWhatsAppMessage.ts, formatPrice.ts, cn.ts
  types/           index.ts

Precios en pesos colombianos, siempre formateados con formatPrice. Ningún componente formatea moneda por su cuenta.

9. Calidad mínima
Mobile-first. La mayoría del tráfico llega desde Instagram en móvil; el diseño móvil es el diseño principal, no una adaptación.
Foco de teclado visible en todo elemento interactivo. Paneles y modales con manejo correcto de foco.
Contraste accesible en todos los textos.
Todas las imágenes con alt descriptivo, loading="lazy" salvo el hero, y dimensiones explícitas para evitar saltos de layout.
HTML semántico: , 

, , encabezados en orden.
Meta tags y Open Graph completos, con imagen de compartir.
10. Fuera de alcance

No construyas nada de esto en esta versión:

Pasarela de pago o cualquier integración de cobro.
Cuentas de usuario, login, historial de pedidos.
Panel de administración o CMS.
Blog.
Multi-idioma.
Mapa interactivo.
Chat en vivo o chatbot.
Programa de puntos o cupones.
Antes de escribir código

Escribe primero un plan corto: paleta final con hex, escala tipográfica, y un wireframe en ASCII del hero y de la sección de sabores en móvil. Revisa ese plan contra este brief y señala cualquier parte que hayas resuelto con un default genérico en lugar de una decisión propia de este proyecto. Corrige eso. Solo entonces construye.

FIN DEL PROMPT

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a864c57b-eed7-458d-bbcb-c7251d81c9da).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
