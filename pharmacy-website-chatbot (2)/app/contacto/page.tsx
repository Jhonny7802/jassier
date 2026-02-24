import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send
} from 'lucide-react'

export default function ContactoPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Direccion',
      details: [
        'Calle Principal #123',
        'Centro, Ciudad 28001',
        'Espana'
      ]
    },
    {
      icon: Phone,
      title: 'Telefono',
      details: [
        '+34 123 456 789',
        '+34 987 654 321 (Urgencias)'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@psilvamedic.com',
        'tramites@psilvamedic.com'
      ]
    },
    {
      icon: Clock,
      title: 'Horario',
      details: [
        'Lunes a Viernes: 9:00 - 19:00',
        'Sabado: 10:00 - 14:00',
        'Domingo: Cerrado'
      ]
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-muted/30">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 px-4 border-b">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              Estamos aqui para ayudarte
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Contactanos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Tienes alguna pregunta sobre licencias de armas o necesitas ayuda con tu tramite? 
              Nuestro equipo esta disponible para atenderte
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="inline-flex h-14 w-14 rounded-full bg-primary/10 items-center justify-center mb-4">
                      <info.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form and Map */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Envíanos un Mensaje
                  </CardTitle>
                  <CardDescription>
                    Completa el formulario y te responderemos lo antes posible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input
                          id="nombre"
                          type="text"
                          placeholder="Tu nombre"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="apellido">Apellido</Label>
                        <Input
                          id="apellido"
                          type="text"
                          placeholder="Tu apellido"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono">Telefono</Label>
                      <Input
                        id="telefono"
                        type="tel"
                        placeholder="+34 123 456 789"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="asunto">Asunto</Label>
                      <Input
                        id="asunto"
                        type="text"
                        placeholder="Tipo de licencia o tramite"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensaje">Mensaje</Label>
                      <Textarea
                        id="mensaje"
                        placeholder="Describe tu consulta aqui..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map and Additional Info */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Nuestra Ubicacion</CardTitle>
                    <CardDescription>
                      Encuentranos en el centro de la ciudad
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <MapPin className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Estamos ubicados en una zona de facil acceso con estacionamiento 
                        disponible y buenas conexiones de transporte publico.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">Necesitas ayuda urgente?</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Nuestro equipo esta disponible para resolver consultas urgentes 
                      sobre tramites y plazos de licencias
                    </p>
                    <Button variant="secondary" className="w-full" size="lg">
                      <Phone className="mr-2 h-4 w-4" />
                      Llamar Ahora
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3">Preguntas Frecuentes</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium text-foreground">Que requisitos necesito para obtener una licencia?</p>
                        <p className="text-muted-foreground">Ser mayor de edad, no tener antecedentes penales y aprobar los examenes medico y psicologico</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Cuanto tarda el tramite completo?</p>
                        <p className="text-muted-foreground">El proceso completo suele durar entre 2 y 4 semanas, dependiendo del tipo de licencia</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Cada cuanto debo renovar mi licencia?</p>
                        <p className="text-muted-foreground">Las licencias se renuevan cada 5 anos, aunque puede variar segun el tipo</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
