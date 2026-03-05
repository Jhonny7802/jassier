import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Chatbot } from '@/components/chatbot'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Shield,
  Target,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Headphones,
  Eye,
  Ruler,
  Zap,
  Phone,
} from 'lucide-react'

const rangeFeatures = [
  {
    icon: Target,
    title: '6 Puestos de Tiro',
    description: 'Puestos individuales con separadores ballisticos homologados y sistema de ventilacion independiente.',
  },
  {
    icon: Ruler,
    title: 'Hasta 25 Metros',
    description: 'Distancia de tiro regulable de 5 a 25 metros con sistema de transporte de blancos automatizado.',
  },
  {
    icon: Eye,
    title: 'Iluminacion LED',
    description: 'Sistema de iluminacion profesional LED sin parpadeo para condiciones optimas de tiro.',
  },
  {
    icon: Headphones,
    title: 'Insonorizacion Total',
    description: 'Aislamiento acustico profesional con doble barrera y materiales absorbentes de ultima generacion.',
  },
  {
    icon: Zap,
    title: 'Ventilacion HEPA',
    description: 'Sistema de extraccion y filtrado de aire con filtros HEPA para eliminar particulas de plomo.',
  },
  {
    icon: Shield,
    title: 'Seguridad Integral',
    description: 'Sistema de videovigilancia, control de acceso y protocolo de seguridad certificado.',
  },
]

const calibersAllowed = [
  { name: '.22 LR', type: 'Anular', allowed: true },
  { name: '9mm Parabellum', type: 'Central', allowed: true },
  { name: '.38 Special', type: 'Central', allowed: true },
  { name: '.357 Magnum', type: 'Central', allowed: true },
  { name: '.45 ACP', type: 'Central', allowed: true },
  { name: '.380 Auto', type: 'Central', allowed: true },
]

const schedules = [
  { day: 'Lunes a Viernes', hours: '10:00 - 20:00', note: 'Ultimo turno 19:00' },
  { day: 'Sabados', hours: '10:00 - 14:00', note: 'Ultimo turno 13:00' },
  { day: 'Domingos y Festivos', hours: 'Cerrado', note: null },
]

const prices = [
  {
    name: 'Sesion Individual',
    price: '25',
    unit: '/ sesion',
    features: ['1 puesto de tiro por 1 hora', '50 dianas incluidas', 'Proteccion auditiva y ocular', 'Supervision de monitor'],
    popular: false,
  },
  {
    name: 'Bono 5 Sesiones',
    price: '100',
    unit: '/ bono',
    features: ['5 sesiones de 1 hora', '250 dianas incluidas', 'Proteccion incluida', 'Descuento del 20%', 'Validez 3 meses'],
    popular: true,
  },
  {
    name: 'Bono 10 Sesiones',
    price: '175',
    unit: '/ bono',
    features: ['10 sesiones de 1 hora', '500 dianas incluidas', 'Proteccion incluida', 'Descuento del 30%', 'Validez 6 meses'],
    popular: false,
  },
]

const rules = [
  'Es obligatorio presentar licencia de armas vigente o autorizacion del instructor.',
  'El uso de proteccion auditiva y ocular es obligatorio en todo momento.',
  'Todas las armas deben permanecer descargadas y enfundadas fuera de la linea de tiro.',
  'Solo se permite disparar a los blancos autorizados por el centro.',
  'Prohibido el acceso bajo los efectos de alcohol o sustancias estupefacientes.',
  'Los menores de edad solo pueden acceder acompanados de tutor legal y con autorizacion escrita.',
  'Seguir siempre las instrucciones del monitor de seguridad.',
]

export default function GaleriaTiroPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero with image */}
        <section className="relative bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/galeria-tiro.jpg"
              alt="Galeria de Tiro PSILVAMEDIC"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
          <div className="max-w-7xl mx-auto px-4 py-20 lg:py-28 relative">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Galeria de Tiro</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance max-w-3xl">
              Galeria de Tiro Interior Homologada
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl text-pretty leading-relaxed mb-8">
              Instalaciones de primer nivel con 6 puestos de tiro, sistema de ventilacion HEPA,
              insonorizacion completa y supervision profesional. Practica en un entorno seguro
              y controlado.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contacto">
                <Button size="lg" variant="secondary" className="font-semibold">
                  Reservar Sesion
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#precios">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Ver Precios
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <Badge className="mb-4">Equipamiento</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
                Instalaciones de Primer Nivel
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Tecnologia y seguridad de ultima generacion para una experiencia de tiro optima
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rangeFeatures.map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all hover:border-primary/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Calibers Table */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <Badge className="mb-4">Calibres</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
                Calibres Autorizados
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Nuestra galeria esta preparada para los siguientes calibres
              </p>
            </div>
            <Card>
              <CardContent className="p-0">
                <div className="grid grid-cols-3 gap-0 text-sm font-semibold p-4 border-b bg-muted/50">
                  <span>Calibre</span>
                  <span>Tipo</span>
                  <span className="text-right">Estado</span>
                </div>
                {calibersAllowed.map((caliber, index) => (
                  <div key={index} className={`grid grid-cols-3 gap-0 p-4 text-sm ${index < calibersAllowed.length - 1 ? 'border-b' : ''}`}>
                    <span className="font-medium">{caliber.name}</span>
                    <span className="text-muted-foreground">{caliber.type}</span>
                    <span className="text-right">
                      <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 text-xs">
                        Autorizado
                      </Badge>
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pricing */}
        <section id="precios" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <Badge className="mb-4">Tarifas</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
                Precios y Bonos
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Tarifas transparentes y descuentos por fidelidad
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {prices.map((plan, index) => (
                <Card key={index} className={`relative overflow-hidden hover:shadow-lg transition-all ${plan.popular ? 'border-accent shadow-md' : ''}`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent" />
                  )}
                  <CardHeader className="text-center">
                    {plan.popular && (
                      <Badge className="mx-auto mb-2 bg-accent/20 text-accent border-accent/30">Mas Popular</Badge>
                    )}
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="pt-2">
                      <span className="text-4xl font-bold">{plan.price}EUR</span>
                      <span className="text-muted-foreground text-sm ml-1">{plan.unit}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contacto">
                      <Button className={`w-full ${plan.popular ? '' : 'variant-outline'}`} variant={plan.popular ? 'default' : 'outline'}>
                        Reservar
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Hours */}
              <div>
                <Badge className="mb-4">Horarios</Badge>
                <h2 className="text-3xl font-bold mb-6">Horarios de Apertura</h2>
                <div className="space-y-4">
                  {schedules.map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-card border">
                      <div>
                        <p className="font-semibold">{schedule.day}</p>
                        {schedule.note && <p className="text-xs text-muted-foreground">{schedule.note}</p>}
                      </div>
                      <Badge variant={schedule.hours === 'Cerrado' ? 'destructive' : 'secondary'}>
                        {schedule.hours}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rules */}
              <div>
                <Badge className="mb-4">Seguridad</Badge>
                <h2 className="text-3xl font-bold mb-6">Normas de la Galeria</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0" />
                      <p className="text-sm font-medium text-foreground">El incumplimiento de las normas supone la expulsion inmediata.</p>
                    </div>
                    <ul className="space-y-3">
                      {rules.map((rule, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-muted-foreground">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Reserva tu Sesion de Tiro
            </h2>
            <p className="text-lg text-primary-foreground/80 text-pretty">
              Contactanos para reservar tu puesto o resolver cualquier duda
              sobre nuestra galeria de tiro.
            </p>
            <div className="flex items-center justify-center gap-4 pt-2">
              <Link href="/contacto">
                <Button size="lg" variant="secondary" className="font-semibold">
                  <Phone className="mr-2 h-4 w-4" />
                  Reservar Ahora
                </Button>
              </Link>
              <Link href="/nosotros">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Conocer el Centro
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
                  <li><Link href="/galeria-tiro" className="hover:opacity-100 transition-opacity">Galeria de Tiro</Link></li>
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
