import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Clock,
  Truck,
  Award,
  Stethoscope,
  Phone,
  Pill,
  Heart,
  Shield,
  Home,
  Calendar,
  FileText,
  Users
} from 'lucide-react'

export default function ServiciosPage() {
  const mainServices = [
    {
      icon: Clock,
      title: 'Atención 24/7',
      description: 'Estamos disponibles para ti en cualquier momento del día',
      features: [
        'Farmacia de guardia',
        'Atención telefónica continua',
        'Pedidos urgentes',
        'Consultas en línea'
      ]
    },
    {
      icon: Truck,
      title: 'Entrega a Domicilio',
      description: 'Recibe tus medicamentos en la puerta de tu casa',
      features: [
        'Entrega en 24h',
        'Envío gratis +€50',
        'Seguimiento en tiempo real',
        'Horarios flexibles'
      ]
    },
    {
      icon: Stethoscope,
      title: 'Consulta Farmacéutica',
      description: 'Asesoramiento profesional personalizado',
      features: [
        'Consultas gratuitas',
        'Farmacéuticos certificados',
        'Seguimiento de tratamientos',
        'Recomendaciones personalizadas'
      ]
    },
    {
      icon: Award,
      title: 'Calidad Garantizada',
      description: 'Productos certificados y de máxima calidad',
      features: [
        'Certificación ISO',
        'Proveedores verificados',
        'Control de calidad',
        'Garantía de satisfacción'
      ]
    }
  ]

  const additionalServices = [
    {
      icon: Heart,
      title: 'Control de Salud',
      description: 'Medición de presión arterial, glucosa y más'
    },
    {
      icon: Shield,
      title: 'Servicio de Vacunación',
      description: 'Vacunas con cita previa y personal especializado'
    },
    {
      icon: Home,
      title: 'Atención Domiciliaria',
      description: 'Servicio especializado para personas con movilidad reducida'
    },
    {
      icon: Calendar,
      title: 'Recordatorios',
      description: 'Sistema de alertas para tomar tus medicamentos'
    },
    {
      icon: FileText,
      title: 'Gestión de Recetas',
      description: 'Digitalización y renovación de recetas médicas'
    },
    {
      icon: Users,
      title: 'Programas de Fidelidad',
      description: 'Acumula puntos y obtén descuentos exclusivos'
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
              Servicios profesionales
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Nuestros Servicios
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ofrecemos una amplia gama de servicios farmacéuticos profesionales 
              para cuidar de tu salud y bienestar
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {mainServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="inline-flex h-14 w-14 rounded-2xl bg-primary/10 items-center justify-center mb-4">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Servicios Adicionales</h2>
              <p className="text-muted-foreground text-lg">
                Más formas de cuidar tu salud
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="inline-flex h-16 w-16 rounded-full bg-primary/10 items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6 text-center space-y-6">
                <div className="inline-flex h-16 w-16 rounded-full bg-primary-foreground/10 items-center justify-center">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    ¿Necesitas más información?
                  </h2>
                  <p className="text-lg opacity-90">
                    Nuestro equipo está disponible para ayudarte con cualquier consulta
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button size="lg" variant="secondary">
                    <Phone className="mr-2 h-4 w-4" />
                    Llamar Ahora
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Chatear con Nosotros
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  )
}
