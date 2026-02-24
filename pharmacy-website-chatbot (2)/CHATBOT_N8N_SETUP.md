# Configuración del Chatbot con n8n

Este documento explica cómo conectar el chatbot de FarmaVida con tu instancia de n8n.

## Pasos para Configurar n8n

### 1. Crear un Workflow en n8n

1. Accede a tu instancia de n8n
2. Crea un nuevo workflow
3. Añade un nodo **Webhook** como trigger

### 2. Configurar el Webhook

En el nodo Webhook de n8n:
- **HTTP Method**: POST
- **Path**: Elige un path personalizado (ej: `farmacia-chat`)
- **Authentication**: None (o configura según tus necesidades)
- **Response Mode**: "When Last Node Finishes"

Copia la URL del webhook que se genera (algo como: `https://tu-instancia.n8n.cloud/webhook/farmacia-chat`)

### 3. Estructura del JSON que envía el chatbot

El chatbot envía la siguiente estructura JSON al webhook:

```json
{
  "message": "Mensaje del usuario",
  "timestamp": "2026-02-05T10:30:00.000Z",
  "sessionId": "session-1738751234567"
}
```

### 4. Configurar la Respuesta de n8n

n8n debe responder con un JSON que contenga:

```json
{
  "reply": "La respuesta del bot para el usuario"
}
```

También puedes usar la estructura:

```json
{
  "message": "La respuesta del bot para el usuario"
}
```

### 5. Ejemplo de Workflow Básico en n8n

**Nodo 1: Webhook (Trigger)**
- Recibe el mensaje del usuario

**Nodo 2: Function o Code** (opcional)
- Procesa el mensaje
- Puedes agregar lógica personalizada aquí

**Nodo 3: Integración con IA** (opcional)
- OpenAI
- Anthropic Claude
- Google Gemini
- Groq
- Cualquier otro LLM

**Nodo 4: Respond to Webhook**
- Formato de respuesta:
```javascript
return {
  reply: "Tu respuesta aquí"
}
```

### 6. Configurar la Variable de Entorno

Una vez que tengas la URL del webhook de n8n:

1. Ve a la sección **Vars** en el sidebar de v0
2. Añade una nueva variable:
   - **Key**: `NEXT_PUBLIC_N8N_WEBHOOK_URL`
   - **Value**: Tu URL del webhook de n8n

Alternativamente, si deployeas en Vercel:
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Añade: `NEXT_PUBLIC_N8N_WEBHOOK_URL` con tu URL

## Ejemplo de Workflow Completo en n8n

### Opción 1: Respuesta Simple con IA (OpenAI)

```
[Webhook] → [OpenAI] → [Respond to Webhook]
```

Configuración del nodo OpenAI:
- **Resource**: Message
- **Operation**: Create
- **Model**: gpt-4 o gpt-3.5-turbo
- **Messages**: 
  - System: "Eres un asistente de farmacia amable y profesional. Ayudas a los clientes con información sobre productos farmacéuticos."
  - User: `{{ $json.message }}`

### Opción 2: Con Base de Datos de Productos

```
[Webhook] → [Function] → [Database Query] → [OpenAI] → [Respond to Webhook]
```

### Opción 3: Con Validación y Routing

```
[Webhook] → [Switch] 
              ├→ Preguntas Frecuentes → [Respond]
              ├→ Consulta Productos → [DB Query] → [Respond]
              └→ Otras → [OpenAI] → [Respond]
```

## Testing

Para probar la conexión:

1. Haz clic en el botón de chat en la página web
2. Escribe un mensaje de prueba
3. Verifica en n8n que el webhook recibe el mensaje
4. Verifica que el chatbot muestra la respuesta correctamente

## Troubleshooting

### El chatbot no se conecta

- Verifica que la variable de entorno `NEXT_PUBLIC_N8N_WEBHOOK_URL` esté configurada correctamente
- Asegúrate de que la URL del webhook sea accesible públicamente
- Revisa la consola del navegador para errores (F12)

### n8n no recibe mensajes

- Verifica que el webhook en n8n esté activado
- Comprueba que la URL sea correcta
- Asegúrate de que no haya firewall bloqueando las peticiones

### El chatbot no muestra respuestas

- Verifica que n8n esté devolviendo el JSON correcto con el campo `reply` o `message`
- Revisa los logs de n8n para errores
- Comprueba la estructura de la respuesta

## Seguridad

Para producción, considera:

1. **Añadir autenticación**: Usa API Keys o tokens en los headers
2. **Rate Limiting**: Implementa límites de peticiones por IP
3. **Validación**: Valida y sanitiza todos los inputs del usuario
4. **HTTPS**: Asegúrate de usar HTTPS en producción
5. **CORS**: Configura CORS correctamente en n8n si es necesario

## Mejoras Adicionales

Puedes mejorar el chatbot añadiendo:

- **Historial de conversación**: Guarda mensajes en una base de datos
- **Sesiones persistentes**: Usa cookies o localStorage para mantener el contexto
- **Typing indicators**: Muestra cuando el bot está "escribiendo"
- **Mensajes predefinidos**: Botones de respuesta rápida
- **Multimedia**: Soporte para imágenes y archivos
- **Notificaciones**: Alertas para el equipo de farmacia

## Recursos Adicionales

- [Documentación de n8n Webhooks](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/)
- [n8n AI Nodes](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chatOpenAi/)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
