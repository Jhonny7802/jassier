import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Clock,
  Award,
  Phone,
  Shield,
  FileText,
  Users,
  Scale,
  Target,
  ClipboardCheck,
  Briefcase,
  BookOpen,
  CheckCircle
} from 'lucide-react'

export default function ServiciosPage() {
  const mainServices = [
    {
      icon: FileText,
      title: 'Tramitacion de Licencias',
      description: 'Gestion completa de licencias de armas tipo A, B, C, D y E',
      features: [
        'Licencia tipo A - Armas de guerra (profesional)',
        'Licencia tipo B - Armas cortas (defensa personal)',
        'Licencia tipo D - Armas largas rayadas (caza mayor)',
        'Licencia tipo E - Armas de fuego (uso deportivo)'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Examenes Medicos y Psicologicos',
      description: 'Reconocimientos obligatorios realizados por profesionales autorizados',
      features: [
        'Examen medico general completo',
        'Evaluacion psicologica y aptitudinal',
        'Test psicotecnico oficial',
        'Certificados con validez legal'
      ]
    },
    {
      icon: Target,
      title: 'Cursos de Formacion',
      description: 'Capacitacion homologada en manejo seguro de armas',
      features: [
        'Normativa vigente sobre armas',
        'Manejo y conservacion segura',
        'Practica en galeria de tiro',
        'Preparacion para examen teorico'
      ]
    },
    {
      icon: Scale,
      title: 'Asesoria Legal',
      description: 'Consultas juridicas especializadas en legislacion de armas',
      features: [
        'Interpretacion de normativa',
        'Recursos y reclamaciones',
        'Renovaciones de licencia',
        'Herencias y traspasos de armas'
      ]
    }
  ]

  const additionalServices = [
    {
      icon: Shield,
      title: 'Guia de Pertenencia',
      description: 'Tramitacion de guias para tenencia legal de armas'
    },
    {
      icon: BookOpen,
      title: 'Renovacion de Permisos',
      description: 'Gestion de renovaciones antes del vencimiento'
    },
    {
      icon: Briefcase,
      title: 'Licencia Federativa',
      description: 'Tramites para tiradores deportivos federados'
    },
    {
      icon: CheckCircle,
      title: 'Revision de Documentacion',
      description: 'Verificacion previa de expedientes y solicitudes'
    },
    {
      icon: Users,
      title: 'Atencion Empresarial',
      description: 'Servicios especializados para empresas de seguridad'
    },
    {
      icon: Clock,
      title: 'Tramite Urgente',
      description: 'Gestion prioritaria con seguimiento personalizado'
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
              Ofrecemos una gama completa de servicios para la tramitacion 
              de licencias y permisos de armas
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
                Mas soluciones para tus necesidades
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
                    Necesitas mas informacion?
                  </h2>
                  <p className="text-lg opacity-90">
                    Nuestro equipo de profesionales esta disponible para resolver todas tus dudas
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
