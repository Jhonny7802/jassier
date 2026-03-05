import { Navbar } from '@/components/navbar'
import { Chatbot } from '@/components/chatbot'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Scale,
  BookOpen,
  Shield,
  AlertTriangle,
  FileText,
  ArrowRight,
} from 'lucide-react'

export default function NormativaPage() {
  const regulations = [
    {
      title: 'Licencia B - Armas Cortas',
      icon: Shield,
      description: 'Autoriza la tenencia de armas cortas (pistolas y revolveres) para defensa personal.',
      details: [
        'Requiere justificacion documentada de necesidad',
        'Examen psicofisico en centro autorizado',
        'Prueba de capacitacion con arma de fuego',
        'Renovacion cada 3 anos',
        'Maximo 1 arma corta (excepcionalmente mas)',
      ],
    },
    {
      title: 'Licencia D - Armas Largas Rayadas',
      icon: FileText,
      description: 'Para rifles y carabinas de canon estriado, destinados a caza mayor.',
      details: [
        'Requiere licencia de caza vigente',
        'Examen psicofisico en centro autorizado',
        'No requiere prueba de tiro adicional',
        'Renovacion cada 3 anos',
        'Permite hasta 5 armas largas rayadas',
      ],
    },
    {
      title: 'Licencia E - Escopetas',
      icon: FileText,
      description: 'Para escopetas y armas largas de anima lisa, las mas comunes en caza y tiro deportivo.',
      details: [
        'Examen psicofisico en centro autorizado',
        'No requiere justificacion especial',
        'La mas accesible para uso recreativo y caza',
        'Renovacion cada 5 anos',
        'Permite hasta 6 escopetas',
      ],
    },
    {
      title: 'Licencia C - Vigilantes de Seguridad',
      icon: Shield,
      description: 'Exclusiva para personal de empresas de seguridad privada en ejercicio.',
      details: [
        'Solo para vigilantes de seguridad en activo',
        'Vinculada al contrato de trabajo',
        'La empresa gestiona la dotacion del arma',
        'Formacion especifica obligatoria',
        'Vigencia vinculada al contrato laboral',
      ],
    },
    {
      title: 'Licencia Federativa',
      icon: Scale,
      description: 'Para tiradores federados que practican tiro deportivo en clubes homologados.',
      details: [
        'Requiere pertenencia a club de tiro',
        'Licencia federativa de tiro vigente',
        'Examen psicofisico',
        'Las armas se custodian en el club o domicilio con armero',
        'Renovacion anual',
      ],
    },
  ]

  const importantNotes = [
    {
      icon: AlertTriangle,
      title: 'Almacenamiento Seguro',
      text: 'Todas las armas deben guardarse en un armero homologado de Grado III (segun UNE-EN 1143-1) anclado a pared o suelo. La municion debe almacenarse por separado.',
    },
    {
      icon: BookOpen,
      title: 'Transporte de Armas',
      text: 'Las armas deben transportarse descargadas, dentro de su funda, y con la guia de pertenencia. El transporte debe realizarse por la ruta mas directa entre el domicilio y el lugar de uso.',
    },
    {
      icon: Scale,
      title: 'Intervenciones de Armas',
      text: 'Toda compraventa, herencia o cesion de armas debe comunicarse a la Intervencion de Armas de la Guardia Civil para actualizar la guia de pertenencia.',
    },
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
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Normativa Legal</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
                Normativa sobre Armas y Licencias
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-3xl text-pretty leading-relaxed">
                Informacion detallada sobre los tipos de licencias, requisitos legales y 
                normativa vigente en materia de armas en Espana.
              </p>
            </div>
          </div>
        </section>

        {/* License Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Tipos de Licencias</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Cada tipo de arma requiere una licencia especifica con requisitos diferenciados
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regulations.map((reg, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <reg.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{reg.title}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reg.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {reg.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Informacion Importante</h2>
              <p className="text-muted-foreground text-lg text-pretty">
                Aspectos clave de la normativa que debes conocer como titular de armas
              </p>
            </div>
            <div className="space-y-6">
              {importantNotes.map((note, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <note.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{note.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{note.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-primary">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary-foreground text-balance">
              Tienes Dudas sobre la Normativa?
            </h2>
            <p className="text-lg text-primary-foreground/80 text-pretty">
              Nuestro equipo legal te asesora sin compromiso sobre cualquier cuestion
              relacionada con la legislacion de armas.
            </p>
            <Link href="/contacto">
              <Button size="lg" variant="secondary" className="font-semibold mt-2">
                Consultar con un Experto
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
