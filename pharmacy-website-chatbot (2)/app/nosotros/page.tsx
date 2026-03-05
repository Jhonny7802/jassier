import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Chatbot } from '@/components/chatbot'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Shield,
  Award,
  Users,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Target,
  BookOpen,
  Building,
  Briefcase,
} from 'lucide-react'

const timeline = [
  {
    year: '2014',
    title: 'Fundacion',
    description: 'PSILVAMEDIC nace como centro autorizado de reconocimientos medicos para licencias de armas.',
  },
  {
    year: '2016',
    title: 'Ampliacion de Servicios',
    description: 'Incorporamos asesoria legal y gestion integral de tramites de licencias.',
  },
  {
    year: '2019',
    title: 'Centro de Formacion',
    description: 'Abrimos nuestra galeria de tiro y centro de formacion homologado.',
  },
  {
    year: '2022',
    title: 'Lider Regional',
    description: 'Superamos las 3.000 licencias tramitadas, consolidandonos como referencia en el sector.',
  },
  {
    year: '2025',
    title: 'Expansion Digital',
    description: 'Lanzamos nuestra plataforma online para seguimiento de tramites y consultas.',
  },
]

const team = [
  {
    name: 'Dr. Pedro Silva',
    role: 'Director General y Medico',
    description: 'Mas de 15 anos de experiencia en medicina legal y reconocimientos psicofisicos para licencias de armas.',
    specialties: ['Medicina Legal', 'Reconocimientos Psicofisicos', 'Direccion Clinica'],
  },
  {
    name: 'Dra. Maria Lopez',
    role: 'Psicologa Clinica',
    description: 'Especialista en evaluaciones psicologicas y test psicotecnicos para permisos de armas.',
    specialties: ['Psicologia Clinica', 'Evaluacion Psicotecnica', 'Neuropsicologia'],
  },
  {
    name: 'Carlos Fernandez',
    role: 'Asesor Legal',
    description: 'Abogado especializado en legislacion de armas, normativa de seguridad y procedimiento administrativo.',
    specialties: ['Derecho Administrativo', 'Legislacion de Armas', 'Recursos'],
  },
  {
    name: 'Ana Martinez',
    role: 'Coordinadora de Tramites',
    description: 'Gestora administrativa con amplia experiencia en tramitacion de licencias ante la Guardia Civil.',
    specialties: ['Gestion Administrativa', 'Intervencion de Armas', 'Atencion al Cliente'],
  },
]

const certifications = [
  {
    icon: Shield,
    title: 'Centro Autorizado',
    description: 'Autorizacion del Ministerio de Sanidad para la realizacion de reconocimientos psicofisicos.',
  },
  {
    icon: Award,
    title: 'ISO 9001:2015',
    description: 'Certificacion de calidad en todos nuestros procesos de gestion y atencion al cliente.',
  },
  {
    icon: BookOpen,
    title: 'Centro Homologado',
    description: 'Homologacion como centro de formacion para cursos de capacitacion en armas.',
  },
  {
    icon: Building,
    title: 'Registro DGP',
    description: 'Inscripcion en el registro de la Direccion General de la Policia como centro colaborador.',
  },
]

const values = [
  {
    icon: Shield,
    title: 'Seguridad',
    description: 'La seguridad es nuestra prioridad en cada tramite y evaluacion que realizamos.',
  },
  {
    icon: Users,
    title: 'Confianza',
    description: 'Construimos relaciones de confianza con cada cliente, basadas en la transparencia.',
  },
  {
    icon: Target,
    title: 'Excelencia',
    description: 'Buscamos la excelencia en cada servicio, con los mas altos estandares de calidad.',
  },
  {
    icon: Briefcase,
    title: 'Profesionalidad',
    description: 'Un equipo altamente cualificado y en constante formacion y actualizacion.',
  },
]

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-primary py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--accent)/0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.06),transparent_50%)]" />
          <div className="max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Sobre Nosotros</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
                  Mas de 10 Anos al Servicio de tu Seguridad
                </h1>
                <p className="text-lg text-primary-foreground/80 text-pretty leading-relaxed mb-6">
                  PSILVAMEDIC es un centro autorizado y referente en la tramitacion de licencias
                  y permisos de armas. Combinamos experiencia medica, legal y administrativa para
                  ofrecerte un servicio integral, profesional y de confianza.
                </p>
                <div className="flex flex-wrap gap-6">
                  {[
                    { value: '5,000+', label: 'Licencias' },
                    { value: '10+', label: 'Anos' },
                    { value: '98%', label: 'Aprobacion' },
                  ].map((stat, i) => (
                    <div key={i}>
                      <p className="text-2xl font-bold text-accent">{stat.value}</p>
                      <p className="text-sm text-primary-foreground/60">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-primary-foreground/10">
                  <Image
                    src="/images/team.jpg"
                    alt="Equipo de PSILVAMEDIC en nuestra oficina"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <Badge className="mb-4">Nuestros Valores</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
                Principios que Nos Definen
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Cada decision que tomamos esta guiada por estos valores fundamentales
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center group hover:shadow-lg transition-all hover:border-primary/30">
                  <CardContent className="pt-8 pb-6">
                    <div className="inline-flex h-16 w-16 rounded-2xl bg-primary/10 items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <value.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <Badge className="mb-4">Nuestra Historia</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
                Un Recorrido de Crecimiento
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Desde nuestra fundacion, hemos crecido para convertirnos en referencia del sector
              </p>
            </div>
            <div className="space-y-0">
              {timeline.map((event, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10">
                      <Clock className="h-5 w-5 text-primary-foreground" />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-border" />
                    )}
                  </div>
                  <div className="pb-10">
                    <Badge variant="outline" className="mb-2 text-accent border-accent/30">{event.year}</Badge>
                    <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <Badge className="mb-4">Nuestro Equipo</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
                Profesionales a tu Servicio
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Un equipo multidisciplinar de medicos, psicologos, abogados y gestores
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-primary to-accent" />
                  <CardContent className="pt-6">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-center mb-4">
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-sm text-accent font-medium">{member.role}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-center">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {member.specialties.map((spec, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 px-4 bg-primary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Certificaciones</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary-foreground text-balance">
                Garantia de Calidad y Legalidad
              </h2>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto text-pretty">
                Contamos con todas las autorizaciones y certificaciones exigidas por la normativa
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 text-center">
                  <div className="inline-flex h-14 w-14 rounded-xl bg-accent/20 items-center justify-center mb-4">
                    <cert.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-primary-foreground mb-2">{cert.title}</h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge>Nuestras Instalaciones</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                  Un Centro Moderno y Completo
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                  Nuestras instalaciones estan disenadas para ofrecerte la mejor experiencia.
                  Contamos con consultas medicas, gabinete psicologico, aulas de formacion
                  y galeria de tiro, todo en un mismo espacio.
                </p>
                <ul className="space-y-3">
                  {[
                    'Consultas medicas equipadas con tecnologia de ultima generacion',
                    'Gabinete psicologico insonorizado y climatizado',
                    'Aula de formacion con capacidad para 20 personas',
                    'Galeria de tiro interior con 6 puestos',
                    'Sala de espera comoda y aparcamiento gratuito',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/galeria-tiro.jpg"
                  alt="Instalaciones de PSILVAMEDIC - Galeria de tiro"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Conocenos en Persona
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Visitanos en nuestras instalaciones o contactanos para resolver cualquier duda
              sobre nuestros servicios.
            </p>
            <div className="flex items-center justify-center gap-4 pt-2">
              <Link href="/contacto">
                <Button size="lg" className="font-semibold">
                  <MapPin className="mr-2 h-4 w-4" />
                  Contactar
                </Button>
              </Link>
              <Link href="/servicios">
                <Button size="lg" variant="outline" className="font-semibold">
                  Ver Servicios
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-background py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-lg bg-background/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-background" />
                  </div>
                  <span className="text-xl font-bold">PSILVAMEDIC</span>
                </div>
                <p className="text-sm opacity-70 leading-relaxed">
                  Centro autorizado especializado en la tramitacion de licencias y permisos de armas.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Servicios</h4>
                <ul className="space-y-2 text-sm opacity-70">
                  <li><Link href="/servicios" className="hover:opacity-100 transition-opacity">Licencias de Armas</Link></li>
                  <li><Link href="/servicios" className="hover:opacity-100 transition-opacity">Examenes Medicos</Link></li>
                  <li><Link href="/servicios" className="hover:opacity-100 transition-opacity">Cursos de Formacion</Link></li>
                  <li><Link href="/servicios" className="hover:opacity-100 transition-opacity">Asesoria Legal</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Navegacion</h4>
                <ul className="space-y-2 text-sm opacity-70">
                  <li><Link href="/" className="hover:opacity-100 transition-opacity">Inicio</Link></li>
                  <li><Link href="/catalogo" className="hover:opacity-100 transition-opacity">Catalogo</Link></li>
                  <li><Link href="/nosotros" className="hover:opacity-100 transition-opacity">Nosotros</Link></li>
                  <li><Link href="/contacto" className="hover:opacity-100 transition-opacity">Contacto</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-sm opacity-70">
                  <li>+34 123 456 789</li>
                  <li>info@psilvamedic.com</li>
                  <li>Calle Principal #123</li>
                  <li>L-V: 9:00 - 19:00</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-background/10 pt-8 text-center">
              <p className="text-sm opacity-60">2026 PSILVAMEDIC. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>

        <Chatbot />
      </main>
    </>
  )
}
