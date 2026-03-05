import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Chatbot } from '@/components/chatbot'
import Link from 'next/link'
import { StatsCounter } from '@/components/stats-counter'
import { FaqSection } from '@/components/faq-section'
import { 
  Shield, 
  Clock, 
  Phone, 
  Mail, 
  MapPin,
  FileText,
  Users,
  Award,
  Scale,
  Target,
  ClipboardCheck,
  Briefcase,
  ChevronRight,
  Star,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

export default function Page() {
  const categories = [
    {
      name: 'Licencias de Armas',
      description: 'Tramitacion completa de licencias tipo A, B, C, D y E',
      icon: FileText,
    },
    {
      name: 'Examenes Medicos',
      description: 'Reconocimientos medicos y psicologicos obligatorios',
      icon: ClipboardCheck,
    },
    {
      name: 'Cursos de Formacion',
      description: 'Capacitacion en manejo seguro y normativa vigente',
      icon: Target,
    },
    {
      name: 'Asesoria Legal',
      description: 'Consultas juridicas especializadas en armamento',
      icon: Scale,
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Consulta Inicial',
      description: 'Evaluamos tu caso, te informamos de los requisitos y planificamos el proceso completo.',
      icon: Phone,
    },
    {
      step: '02',
      title: 'Examenes Medicos',
      description: 'Realizamos los reconocimientos medicos y psicologicos exigidos por la normativa.',
      icon: ClipboardCheck,
    },
    {
      step: '03',
      title: 'Documentacion y Formacion',
      description: 'Preparamos toda la documentacion y te formamos en manejo seguro de armas.',
      icon: FileText,
    },
    {
      step: '04',
      title: 'Obtencion de Licencia',
      description: 'Gestionamos la solicitud ante la autoridad competente hasta obtener tu permiso.',
      icon: Award,
    },
  ]

  const testimonials = [
    {
      name: 'Carlos M.',
      role: 'Cazador deportivo',
      text: 'Excelente servicio. Me gestionaron la licencia D en tiempo record. Todo el proceso fue claro y profesional desde el primer momento.',
      rating: 5,
    },
    {
      name: 'Ana R.',
      role: 'Tiradora federada',
      text: 'Gracias a PSILVAMEDIC obtuve mi licencia federativa sin problemas. Me asesoraron en cada paso y resolvieron todas mis dudas.',
      rating: 5,
    },
    {
      name: 'Miguel A.',
      role: 'Vigilante de seguridad',
      text: 'Necesitaba renovar mi licencia B con urgencia y lo gestionaron de forma rapida y eficiente. Muy recomendables.',
      rating: 5,
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--accent)/0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.08),transparent_50%)]" />
          <div className="max-w-7xl mx-auto px-4 py-20 lg:py-28 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30">
                  Centro autorizado - Mas de 10 anos de experiencia
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
                  Tu Permiso de Armas, Sin Complicaciones
                </h1>
                <p className="text-lg lg:text-xl text-primary-foreground/80 text-pretty leading-relaxed">
                  Somos especialistas en la tramitacion de licencias y permisos de armas. 
                  Gestionamos examenes medicos, psicologicos, cursos de formacion y toda 
                  la documentacion que necesitas.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link href="/catalogo">
                    <Button size="lg" variant="secondary" className="text-base font-semibold">
                      Ver Catalogo de Armas
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contacto">
                    <Button size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      <Phone className="mr-2 h-4 w-4" />
                      Contactar Ahora
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 rounded-2xl p-8 space-y-5">
                  {[
                    { icon: FileText, label: 'Licencias', sub: 'Tipo A, B, C, D y E' },
                    { icon: ClipboardCheck, label: 'Examenes', sub: 'Medicos y psicologicos' },
                    { icon: Target, label: 'Formacion', sub: 'Cursos homologados' },
                    { icon: Scale, label: 'Asesoria Legal', sub: 'Consulta sin compromiso' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-3 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
                    >
                      <div className="h-14 w-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-7 w-7 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-foreground">{item.label}</h3>
                        <p className="text-sm text-primary-foreground/60">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsCounter />

        {/* Services Grid */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <Badge className="mb-4">Nuestros Servicios</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
                Todo lo que Necesitas en un Solo Lugar
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Desde la consulta inicial hasta la obtencion de tu licencia, nos encargamos de todo
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <category.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription className="leading-relaxed">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href="/servicios">
                      <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-colors">
                        Mas informacion
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <Badge className="mb-4">Como Funciona</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
                Tu Licencia en 4 Pasos Sencillos
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Un proceso claro y guiado de principio a fin
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border" />
                  )}
                  <div className="text-center space-y-4">
                    <div className="relative inline-flex">
                      <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="h-9 w-9 text-primary" />
                      </div>
                      <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Catalog Preview */}
        <section className="py-20 px-4 bg-primary">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <Badge className="bg-accent/20 text-accent border-accent/30">Catalogo</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
                  Explora Nuestro Catalogo de Armas
                </h2>
                <p className="text-lg text-primary-foreground/80 text-pretty leading-relaxed">
                  Consulta todas las armas para las que gestionamos permisos: pistolas, rifles, 
                  escopetas y armas deportivas. Cada una con informacion detallada sobre la 
                  licencia requerida.
                </p>
                <div className="space-y-3">
                  {['Pistolas y Revolveres - Licencia B', 'Rifles de Caza Mayor - Licencia D', 'Escopetas - Licencia E', 'Armas Deportivas - Licencia Federativa'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-primary-foreground/90">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/catalogo">
                  <Button size="lg" variant="secondary" className="font-semibold mt-2">
                    Ver Catalogo Completo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="flex-1 w-full">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Pistolas', count: '6 modelos', license: 'Licencia B' },
                    { label: 'Rifles', count: '5 modelos', license: 'Licencia D' },
                    { label: 'Escopetas', count: '5 modelos', license: 'Licencia E' },
                    { label: 'Deportivas', count: '4 modelos', license: 'Federativa' },
                  ].map((cat, i) => (
                    <div key={i} className="p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur">
                      <p className="text-sm text-primary-foreground/60 mb-1">{cat.license}</p>
                      <h4 className="text-xl font-bold text-primary-foreground">{cat.label}</h4>
                      <p className="text-sm text-accent font-medium mt-1">{cat.count}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <Badge className="mb-4">Testimonios</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
                Lo que Dicen Nuestros Clientes
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Miles de clientes satisfechos avalan nuestra profesionalidad
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed italic">
                      {`"${testimonial.text}"`}
                    </p>
                    <div className="pt-4 border-t">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FaqSection />

        {/* CTA */}
        <section className="py-20 px-4 bg-primary">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Listo para Obtener tu Licencia de Armas?
            </h2>
            <p className="text-lg text-primary-foreground/80 text-pretty">
              Nuestro equipo de profesionales esta disponible para asesorarte en todo el proceso. 
              Contactanos hoy y da el primer paso.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Link href="/contacto">
                <Button size="lg" variant="secondary" className="text-base font-semibold">
                  Solicitar Informacion
                </Button>
              </Link>
              <Link href="/catalogo">
                <Button size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Ver Catalogo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Quick */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">Visitanos o Contactanos</h2>
                <p className="text-muted-foreground text-lg text-pretty leading-relaxed">
                  Estamos aqui para ayudarte. Visitanos en nuestra oficina o contactanos 
                  por cualquiera de nuestros medios.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, title: 'Direccion', text: 'Calle Principal #123, Centro, Ciudad' },
                    { icon: Phone, title: 'Telefono', text: '+34 123 456 789' },
                    { icon: Mail, title: 'Email', text: 'info@psilvamedic.com' },
                    { icon: Clock, title: 'Horario', text: 'L-V: 9:00-19:00 | S: 10:00-14:00' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-0.5">{item.title}</h3>
                        <p className="text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Solicita Informacion</CardTitle>
                  <CardDescription>Responderemos lo antes posible</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Nombre</label>
                    <input 
                      id="name"
                      type="text" 
                      placeholder="Tu nombre" 
                      className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input 
                      id="email"
                      type="email" 
                      placeholder="tu@email.com" 
                      className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Tipo de Licencia</label>
                    <select 
                      id="subject"
                      className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                    >
                      <option value="">Seleccionar...</option>
                      <option value="b">Licencia B - Armas Cortas</option>
                      <option value="d">Licencia D - Rifles</option>
                      <option value="e">Licencia E - Escopetas</option>
                      <option value="fed">Licencia Federativa</option>
                      <option value="other">Otra consulta</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
                    <textarea 
                      id="message"
                      placeholder="En que podemos ayudarte?" 
                      rows={3}
                      className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                    />
                  </div>
                  <Button className="w-full">Enviar Solicitud</Button>
                </CardContent>
              </Card>
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
                  <li><Link href="/productos" className="hover:opacity-100 transition-opacity">Tramites</Link></li>
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
