# Configuración de Base de Datos - FarmaVida

Esta guía te ayudará a configurar la base de datos en Supabase para tu aplicación de farmacia.

## Paso 1: Acceder a Supabase

1. Ve al Dashboard de v0
2. Haz clic en la pestaña **Integrations** o **Connect**
3. Busca tu proyecto de Supabase conectado
4. Haz clic en "Go to Supabase Dashboard"

## Paso 2: Ejecutar Scripts SQL

En el Dashboard de Supabase:

1. Ve a **SQL Editor** en el menú lateral
2. Haz clic en **New Query**
3. Copia y pega el contenido de cada script en orden:

### Script 1: Crear Tablas (`scripts/001_create_tables.sql`)

Este script crea todas las tablas necesarias:
- `profiles` - Perfiles de usuario
- `categories` - Categorías de productos
- `products` - Productos de la farmacia
- `cart_items` - Carrito de compras
- `orders` - Pedidos
- `order_items` - Detalles de pedidos

```sql
-- Copia el contenido del archivo scripts/001_create_tables.sql
```

Haz clic en **Run** para ejecutar.

### Script 2: Crear Trigger de Perfiles (`scripts/002_profile_trigger.sql`)

Este script crea un trigger que automáticamente genera un perfil cuando un usuario se registra:

```sql
-- Copia el contenido del archivo scripts/002_profile_trigger.sql
```

Haz clic en **Run** para ejecutar.

### Script 3: Datos de Ejemplo (`scripts/003_seed_data.sql`)

Este script inserta categorías y productos de ejemplo:

```sql
-- Copia el contenido del archivo scripts/003_seed_data.sql
```

Haz clic en **Run** para ejecutar.

## Paso 3: Verificar las Tablas

1. Ve a **Table Editor** en Supabase
2. Deberías ver todas las tablas creadas:
   - profiles
   - categories
   - products
   - cart_items
   - orders
   - order_items

3. Verifica que las categorías y productos de ejemplo estén insertados

## Paso 4: Políticas RLS (Row Level Security)

Las políticas RLS ya están incluidas en el script 001. Verifica que estén activas:

1. Ve a **Authentication** > **Policies**
2. Deberías ver políticas para cada tabla
3. Las políticas aseguran que los usuarios solo puedan ver/modificar sus propios datos

## Estructura de la Base de Datos

### Tabla: profiles
- Información del usuario (nombre, apellido, teléfono, dirección)
- Vinculada a auth.users mediante foreign key

### Tabla: categories
- Categorías de productos (medicamentos, vitaminas, etc.)
- Con slug para URLs amigables

### Tabla: products
- Productos de la farmacia
- Incluye precio, imagen, descripción
- Campo `requires_prescription` para medicamentos con receta
- Vinculada a categories

### Tabla: cart_items
- Productos en el carrito del usuario
- Vinculada a users y products
- Incluye cantidad

### Tabla: orders
- Pedidos realizados por usuarios
- Estados: pending, processing, shipped, delivered, cancelled
- Incluye total y dirección de envío

### Tabla: order_items
- Detalles de cada pedido
- Vinculada a orders y products
- Incluye cantidad y precio al momento de la compra

## Solución de Problemas

### Error: "relation already exists"
- Las tablas ya fueron creadas. Puedes ignorar este error o eliminar las tablas existentes primero.

### Error: "permission denied"
- Asegúrate de estar usando el rol correcto (postgres o service_role)

### Error: "invalid input syntax"
- Verifica que copiaste todo el script correctamente, incluyendo los punto y coma

### Los productos no aparecen
- Verifica que el script 003 se haya ejecutado correctamente
- Ve a Table Editor > products y verifica que haya datos

## Funcionalidades Implementadas

✅ **Autenticación**
- Registro de usuarios con Supabase Auth
- Inicio de sesión
- Perfil de usuario auto-generado con trigger

✅ **Productos**
- Listado de productos por categoría
- Búsqueda de productos
- Filtrado por categoría
- Gestión de stock
- Productos con y sin receta

✅ **Carrito de Compras**
- Agregar productos al carrito
- Actualizar cantidades
- Eliminar productos
- Cálculo de totales
- Envío gratis en pedidos +€50

✅ **Navegación Completa**
- Navbar con menú de usuario
- Páginas: Inicio, Productos, Servicios, Contacto
- Área de usuario: Perfil, Pedidos, Favoritos, Carrito

✅ **Chatbot con n8n**
- Widget de chat flotante
- Integración con webhook de n8n
- Ver `CHATBOT_N8N_SETUP.md` para configuración

## Próximos Pasos

1. Personaliza los productos en la tabla `products`
2. Agrega más categorías según tus necesidades
3. Configura el webhook del chatbot de n8n (ver CHATBOT_N8N_SETUP.md)
4. Personaliza los estilos en `app/globals.css`
5. Implementa pasarela de pago para checkout completo

## Soporte

Si tienes problemas con la configuración:
1. Revisa los logs en Supabase SQL Editor
2. Verifica que las variables de entorno estén configuradas
3. Asegúrate de que Supabase esté correctamente conectado en v0

---

¡Tu farmacia online está lista para usar! 🎉
