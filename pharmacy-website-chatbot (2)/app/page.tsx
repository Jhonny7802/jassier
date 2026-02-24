import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Chatbot } from '@/components/chatbot'
import Link from 'next/link'
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
  Briefcase
} from 'lucide-react'

export default function Page() {
  const categories = [
    {
      name: 'Licencias de Armas',
      description: 'Tramitacion completa de licencias tipo A, B, C, D y E',
      icon: FileText,
      color: 'text-primary'
    },
    {
      name: 'Examenes Medicos',
      description: 'Reconocimientos medicos y psicologicos obligatorios',
      icon: ClipboardCheck,
      color: 'text-accent'
    },
    {
      name: 'Cursos de Formacion',
      description: 'Capacitacion en manejo seguro y normativa vigente',
      icon: Target,
      color: 'text-primary'
    },
    {
      name: 'Asesoria Legal',
      description: 'Consultas juridicas especializadas en armamento',
      icon: Scale,
      color: 'text-accent'
    }
  ]

  const services = [
    {
      title: 'Atencion Personalizada',
      description: 'Te acompanamos en cada paso del proceso de tramitacion',
      icon: Clock
    },
    {
      title: 'Gestion Integral',
      description: 'Nos encargamos de toda la documentacion necesaria',
      icon: Briefcase
    },
    {
      title: 'Profesionales Certificados',
      description: 'Equipo de expertos en normativa de armas y seguridad',
      icon: Award
    },
    {
      title: 'Asesoria Especializada',
      description: 'Orientacion legal y administrativa sin compromiso',
      icon: Scale
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                  Tu permiso de armas, sin complicaciones
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                  Bienvenido a{' '}
                  <span className="text-primary">ArmaLegal</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Somos especialistas en la tramitacion de licencias y permisos de armas. 
                  Gestionamos examenes medicos, psicologicos, cursos de formacion y toda 
                  la documentacion que necesitas.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/servicios">
                    <Button size="lg" className="text-base">
                      Ver Servicios
                    </Button>
                  </Link>
                  <Link href="/contacto">
                    <Button size="lg" variant="outline" className="text-base bg-transparent">
                      <Phone className="mr-2 h-4 w-4" />
                      Contactar Ahora
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">+5,000 licencias tramitadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Centro Autorizado</span>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl" />
                <div className="relative bg-card rounded-3xl shadow-2xl p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <FileText className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-card-foreground">Licencias</h3>
                      <p className="text-sm text-muted-foreground">Tipo A, B, C, D y E</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center">
                      <ClipboardCheck className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-card-foreground">Examenes</h3>
                      <p className="text-sm text-muted-foreground">Medicos y psicologicos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-card-foreground">Formacion</h3>
                      <p className="text-sm text-muted-foreground">Cursos homologados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Todo lo que necesitas para obtener tu licencia de armas en un solo lugar
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className={`h-16 w-16 rounded-2xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${category.color}`}>
                      <category.icon className="h-8 w-8" />
                    </div>
                    <CardTitle>{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href="/servicios">
                      <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Ver mas
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Por que elegirnos</Badge>
              <h2 className="text-4xl font-bold mb-4">Experiencia y Profesionalidad</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Mas de 10 anos ayudando a nuestros clientes a obtener sus licencias
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="inline-flex h-20 w-20 rounded-full bg-primary/10 items-center justify-center">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">{service.title}</h3>
                  <p className="text-muted-foreground text-pretty">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-balance">
              Necesitas tramitar tu licencia de armas?
            </h2>
            <p className="text-xl opacity-90 text-pretty">
              Nuestro equipo de profesionales esta disponible para asesorarte en todo el proceso. 
              Desde los examenes medicos hasta la obtencion de tu permiso.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Link href="/contacto">
                <Button size="lg" variant="secondary" className="text-base">
                  Solicitar Informacion
                </Button>
              </Link>
              <Link href="/servicios">
                <Button size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Ver Servicios
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Visitanos o Contactanos</h2>
                <p className="text-muted-foreground text-lg text-pretty">
                  Estamos aqui para ayudarte. Visitanos en nuestra oficina o contactanos 
                  por cualquiera de nuestros medios disponibles.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Direccion</h3>
                      <p className="text-muted-foreground">Calle Principal #123, Centro, Ciudad</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefono</h3>
                      <p className="text-muted-foreground">+34 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@armalegal.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horario</h3>
                      <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 19:00</p>
                      <p className="text-muted-foreground">Sabado: 10:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Envíanos un Mensaje</CardTitle>
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
                    <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
                    <textarea 
                      id="message"
                      placeholder="En que podemos ayudarte?" 
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                    />
                  </div>
                  <Button className="w-full">Enviar Mensaje</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-background py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">ArmaLegal</h3>
            <p className="opacity-80 mb-4">Tu licencia de armas, nuestra especialidad</p>
            <p className="text-sm opacity-60">2026 ArmaLegal. Todos los derechos reservados.</p>
          </div>
        </footer>

        {/* Chatbot Widget */}
        <Chatbot />
      </main>
    </>
  )
}
