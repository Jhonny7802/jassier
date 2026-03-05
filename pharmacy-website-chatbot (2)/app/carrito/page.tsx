import { Navbar } from '@/components/navbar'
import { Chatbot } from '@/components/chatbot'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Phone,
  ClipboardCheck,
  FileText,
  Award,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
} from 'lucide-react'

export default function ProcesoPage() {
  const steps = [
    {
      step: 1,
      title: 'Consulta Inicial Gratuita',
      icon: Phone,
      description: 'Contacta con nosotros para una primera evaluacion de tu caso. Te informamos de todos los requisitos, documentacion necesaria y plazos estimados segun el tipo de licencia que necesites.',
      details: [
        'Evaluacion personalizada de tu situacion',
        'Informacion detallada de requisitos',
        'Presupuesto sin compromiso',
        'Planificacion del calendario de tramites',
      ],
    },
    {
      step: 2,
      title: 'Examenes Medicos y Psicologicos',
      icon: ClipboardCheck,
      description: 'Realizamos en nuestro centro los reconocimientos medicos y psicologicos exigidos por la normativa vigente para la obtencion o renovacion de licencias de armas.',
      details: [
        'Examen medico general (vision, audicion, motricidad)',
        'Evaluacion psicologica completa',
        'Certificado de aptitud psicofisica oficial',
        'Validez de 3 meses para la solicitud',
      ],
    },
    {
      step: 3,
      title: 'Documentacion y Formacion',
      icon: FileText,
      description: 'Preparamos toda la documentacion requerida y te proporcionamos la formacion necesaria. Segun el tipo de licencia, esto puede incluir cursos de manejo seguro y pruebas de aptitud.',
      details: [
        'Preparacion de toda la documentacion oficial',
        'Cursos de formacion en manejo seguro de armas',
        'Preparacion para pruebas de aptitud',
        'Fotografia y tramites administrativos',
      ],
    },
    {
      step: 4,
      title: 'Solicitud y Obtencion',
      icon: Award,
      description: 'Presentamos tu solicitud ante la Intervencion de Armas de la Guardia Civil y te acompanamos hasta la obtencion efectiva de tu licencia o permiso de armas.',
      details: [
        'Presentacion de solicitud oficial',
        'Seguimiento del expediente',
        'Resolucion de incidencias',
        'Entrega de tu licencia',
      ],
    },
  ]

  const requirements = [
    'Ser mayor de edad (18 anos para licencia E, 14 con autorizacion para licencia federativa)',
    'Nacionalidad espanola o residencia legal en Espana',
    'No tener antecedentes penales',
    'Superar el reconocimiento psicofisico',
    'No haber sido sancionado en materia de armas en los ultimos 3 anos',
    'Superar las pruebas de capacitacion segun el tipo de licencia',
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-primary py-16 px-4">
          <div className="max-w-7xl mx-auto relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.1),transparent_60%)]" />
            <div className="relative">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Proceso de Solicitud</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
                Como Obtener tu Licencia de Armas
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-3xl text-pretty leading-relaxed">
                Te guiamos paso a paso en todo el proceso, desde la consulta inicial hasta la obtencion de tu permiso.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Steps */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6">
                {/* Left: Step number + connector */}
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-4" />
                  )}
                </div>

                {/* Right: Content */}
                <Card className="flex-1 mb-4">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Requisitos Generales</h2>
              <p className="text-muted-foreground text-lg text-pretty">
                Estos son los requisitos basicos comunes a todos los tipos de licencia
              </p>
            </div>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6 p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <AlertCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <p className="text-sm text-foreground">
                    Los requisitos pueden variar segun el tipo de licencia. Contactanos para una evaluacion personalizada de tu caso.
                  </p>
                </div>
                <ul className="space-y-4">
                  {requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-primary">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary-foreground text-balance">
              Listo para Empezar?
            </h2>
            <p className="text-lg text-primary-foreground/80 text-pretty">
              Contactanos hoy para tu consulta inicial gratuita y te guiaremos en cada paso del proceso.
            </p>
            <Link href="/contacto">
              <Button size="lg" variant="secondary" className="font-semibold mt-2">
                Solicitar Consulta Gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-background py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">PSILVAMEDIC</h3>
            <p className="opacity-80 mb-4">Tu licencia de armas, nuestra especialidad</p>
            <p className="text-sm opacity-60">2026 PSILVAMEDIC. Todos los derechos reservados.</p>
          </div>
        </footer>

        <Chatbot />
      </main>
    </>
  )
}
