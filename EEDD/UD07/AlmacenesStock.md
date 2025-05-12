## Introducción

La **Plataforma Web de Gestión Integral de Almacenes y Stock** es una aplicación modular y escalable diseñada para empresas de distribución y fabricación. Permite:

* Planificar y supervisar flujos de entrada y salida de mercancías.
* Controlar niveles de stock en tiempo real con históricos de movimientos.
* Optimizar la ubicación interna de productos (pasillos, estantes, zonas de picking).
* Generar alertas automáticas ante umbrales críticos y caducidades.
* Facilitar la preparación de pedidos y su expedición, con integración de transportistas.
* Ofrecer dashboards y reportes dinámicos para la toma de decisiones operativas y estratégicas.

---

## 1. Objetivos SMART del Proyecto

| **ID** | **Objetivo**                                                            | **Tipo**    | **Métrica**                        | **Fecha Límite** | **Responsable**             | **Estado**  |
| ------ | ----------------------------------------------------------------------- | ----------- | ---------------------------------- | ---------------- | --------------------------- | ----------- |
| OBJ-01 | Reducir discrepancias de inventario físico vs sistema a < 2% en 6 meses | Estratégico | % de discrepancia                  | 2025-11-12       | Gestor de Almacén           | No iniciado |
| OBJ-02 | Disminuir tiempo medio de picking a < 3 min por orden en 4 meses        | Táctico     | Tiempo medio de picking (minutos)  | 2025-09-12       | Operario de Inventario      | No iniciado |
| OBJ-03 | Asegurar disponibilidad de stock crítica ≥ 98 % en tiempo real          | Operativo   | % de cumplimiento de stock crítico | 2025-12-31       | Administrador de Plataforma | No iniciado |
| OBJ-04 | Obtener CSAT ≥ 4,2/5 en encuestas de usuarios tras entrenamiento de uso | Estratégico | Puntuación CSAT                    | 2025-10-12       | Analista de Logística       | No iniciado |

---

## 2. Roles y Permisos

| **Rol**                     | **Permisos**                                                                                         |
| --------------------------- | ---------------------------------------------------------------------------------------------------- |
| Administrador de Plataforma | Configuración global (almacenes, parámetros), gestión de usuarios y roles, acceso completo a módulos |
| Gestor de Almacén           | Validación de recepciones, traslados, ajustes, generación de órdenes de picking y expedición         |
| Operario de Inventario      | Ejecución de recuentos, escaneo (códigos/RFID), reporte de incidencias                               |
| Analista de Logística       | Acceso a dashboards, generación de informes y KPIs, proyección de reaprovisionamientos               |

---

## 3. Requisitos

### 3.1. Requisitos Funcionales

| **ID** | **Descripción**                                                                                 | **Prioridad** | **Fuente**            | **Estado** |
| ------ | ----------------------------------------------------------------------------------------------- | ------------- | --------------------- | ---------- |
| RF-01  | Registro y alta de productos con atributos (código, descripción, dimensiones, lote, caducidad)  | Alta          | Cliente               | Propuesto  |
| RF-02  | Gestión de múltiples almacenes y ubicaciones internas                                           | Alta          | Stakeholder           | Propuesto  |
| RF-03  | Registro de recepciones, traslados, mermas y devoluciones                                       | Alta          | Cliente               | Propuesto  |
| RF-04  | Visualización de niveles de stock en tiempo real e histórico de movimientos                     | Alta          | Cliente               | Propuesto  |
| RF-05  | Creación de órdenes de salida (clientes/producción) y listados de picking con rutas optimizadas | Alta          | Cliente               | Propuesto  |
| RF-06  | Confirmación de preparación, embalaje y expedición de pedidos                                   | Media         | Stakeholder           | Propuesto  |
| RF-07  | Integración con transportistas para etiquetas y tracking                                        | Media         | Terceros              | Propuesto  |
| RF-08  | Configuración de umbrales de stock y caducidad                                                  | Media         | Cliente               | Propuesto  |
| RF-09  | Generación de alertas y notificaciones en interfaz y por correo                                 | Media         | Cliente               | Propuesto  |
| RF-10  | Dashboards de rotación, antigüedad de stock y tasa de cumplimiento de pedidos                   | Media         | Analista de Logística | Propuesto  |
| RF-11  | Exportación de reportes en CSV/PDF                                                              | Baja          | Cliente               | Propuesto  |
| RF-12  | Gestión de usuarios, roles y permisos                                                           | Alta          | Normativa interna     | Propuesto  |

### 3.2. Requisitos No Funcionales

| **ID** | **Descripción**                                              | **Categoría**  | **Métrica**                      | **Nivel Objetivo** | **Comentarios**                     |
| ------ | ------------------------------------------------------------ | -------------- | -------------------------------- | ------------------ | ----------------------------------- |
| RNF-01 | Tiempo de respuesta para CRUD de inventario < 200 ms         | Rendimiento    | Latencia HTTP                    | < 200 ms           | Pruebas de carga periódicas         |
| RNF-02 | Soportar al menos 500 usuarios concurrentes                  | Escalabilidad  | Usuarios concurrentes            | ≥ 500              | Autoescalado en la nube             |
| RNF-03 | Encriptación de datos sensibles en tránsito y reposo         | Seguridad      | Cifrado AES-256                  | Obligatorio        | Cumplir GDPR y normas de seguridad  |
| RNF-04 | Autenticación multifactor para accesos críticos              | Seguridad      | Método de autenticación          | MFA obligatorio    | Integración con proveedor de MFA    |
| RNF-05 | Disponibilidad ≥ 99,5 % mensual                              | Disponibilidad | % Uptime                         | ≥ 99,5 %           | Monitorización 24/7 con alertas     |
| RNF-06 | Interfaz accesible según WCAG 2.1 AA                         | Usabilidad     | Puntuación de auditoría          | Nivel AA           | Auditoría externa antes del go-live |
| RNF-07 | Tiempo de carga de dashboards inicial ≤ 1 s                  | Rendimiento    | Tiempo medio de carga (segundos) | ≤ 1 s              | Optimización de assets y uso de CDN |
| RNF-08 | Escaneo de códigos de barras/RFID con tasa de acierto ≥ 98 % | Funcionalidad  | % de lecturas exitosas           | ≥ 98 %             | Pruebas en dispositivos reales      |

---

## 4. Casos de Uso

| **ID** | **Nombre**                      | **Actor(es)**          | **Precondición**               | **Flujo Principal**                                                                        | **Flujos Alternativos**                                    | **Postcondición**                                |
| ------ | ------------------------------- | ---------------------- | ------------------------------ | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------- | ------------------------------------------------ |
| CU-01  | Dar de alta producto            | Operario de Inventario | Credenciales válidas           | 1. Ingresar datos de producto<br>2. Validar campos<br>3. Guardar registro                  | 2a. Error validación → mostrar mensaje y volver a ingresar | Producto creado en base de datos                 |
| CU-02  | Gestión de ubicaciones internas | Gestor de Almacén      | CU-01 completado               | 1. Seleccionar almacén<br>2. Definir pasillos/estantes/zonas<br>3. Guardar configuraciones | —                                                          | Ubicaciones internas disponibles para asignación |
| CU-03  | Realizar recuento de stock      | Operario de Inventario | Producto registrado en sistema | 1. Escanear producto<br>2. Registrar cantidad física<br>3. Comparar con sistema            | 2a. Discrepancia → generar incidencia                      | Recuento almacenado y discrepancias reportadas   |
| CU-04  | Generar orden de picking        | Gestor de Almacén      | Nivel de stock suficiente      | 1. Seleccionar pedido<br>2. Calcular ruta óptima<br>3. Emitir lista de picking             | 2a. Stock insuficiente → alertar y detener orden           | Orden de picking disponible para operario        |
| CU-05  | Enviar notificaciones de alerta | Sistema                | Umbral o caducidad alcanzado   | 1. Detectar evento crítico<br>2. Generar alerta en interfaz y correo                       | —                                                          | Notificación recibida por destinatarios          |
| CU-06  | Visualizar dashboard de KPI     | Analista de Logística  | Privilegios de analista        | 1. Acceder módulo de informes<br>2. Seleccionar métricas<br>3. Mostrar gráficos y datos    | —                                                          | Dashboard actualizado con datos en tiempo real   |

---


