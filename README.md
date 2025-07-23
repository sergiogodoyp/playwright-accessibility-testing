# playwright-accessibility-testing

Automatiza pruebas de accesibilidad web utilizando [Playwright](https://playwright.dev/) y [@axe-core/playwright](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/playwright). Este proyecto genera reportes HTML detallados sobre el cumplimiento de estándares de accesibilidad como WCAG.

## Requisitos

- Node.js >= 16
- npm

## Instalación

```bash
npm install
```

## Estructura del Proyecto

```
.
├── tests/
│   └── test-accesibility.spec.js
├── build/
│   └── reports/
├── package.json
└── README.md
```

## Uso

Ejecuta las pruebas de accesibilidad con Playwright:

```bash
npx playwright test
```

Los reportes HTML se generarán en la carpeta `build/reports/`.

## Ejemplo de Pruebas

- Escaneo de página completa
- Escaneo de una sección específica
- Escaneo de un elemento específico
- Escaneo usando tags WCAG 2.1 A y AA
- Escaneo excluyendo elementos

Puedes modificar las URLs y selectores en `tests/test-accesibility.spec.js` según tus necesidades.

## Personalización

- Cambia las URLs objetivo en los tests para adaptarlas a tu aplicación.
- Ajusta los selectores en `.include()` o `.exclude()` para enfocar o excluir partes específicas.

## Recursos útiles

- [Documentación Playwright](https://playwright.dev/docs/intro)
- [axe-core/playwright](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/playwright)
- [axe-html-reporter](https://www.npmjs.com/package/axe-html-reporter)
- [WCAG Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)

## Licencia

MIT
