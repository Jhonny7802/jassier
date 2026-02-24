import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Chatbot } from '@/components/chatbot'
import Link from 'next/link'
import { 
  Pill, 
  Heart, 
  Shield, 
  Clock, 
  Phone, 
  Mail, 
  MapPin,
  ShoppingBag,
  Stethoscope,
  Users,
  Award,
  Truck
} from 'lucide-react'

export default function Page() {
  const products = [
    {
      name: 'Analgésicos',
      description: 'Alivio efectivo del dolor',
      icon: Pill,
      color: 'text-primary'
    },
    {
      name: 'Vitaminas',
      description: 'Suplementos nutricionales',
      icon: Heart,
      color: 'text-red-500'
    },
    {
      name: 'Cuidado Personal',
      description: 'Productos de higiene',
      icon: ShoppingBag,
      color: 'text-blue-500'
    },
    {
      name: 'Primeros Auxilios',
      description: 'Kit de emergencia',
      icon: Shield,
      color: 'text-orange-500'
    }
  ]

  const services = [
    {
      title: 'Atención 24/7',
      description: 'Estamos disponibles para ti en cualquier momento',
      icon: Clock
    },
    {
      title: 'Entrega Rápida',
      description: 'Recibe tus pedidos en menos de 24 horas',
      icon: Truck
    },
    {
      title: 'Farmacéuticos Certificados',
      description: 'Personal altamente capacitado y profesional',
      icon: Award
    },
    {
      title: 'Consultas Gratuitas',
      description: 'Asesoramiento farmacéutico sin costo',
      icon: Stethoscope
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
                Tu salud es nuestra prioridad
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Bienvenido a{' '}
                <span className="text-primary">FarmaVida</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Tu farmacia de confianza. Ofrecemos medicamentos de calidad, atención personalizada 
                y asesoramiento profesional para cuidar de tu salud y bienestar.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/productos">
                  <Button size="lg" className="text-base">
                    Ver Productos
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
                  <span className="text-sm text-muted-foreground">+10,000 clientes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Certificación ISO</span>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Pill className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Medicamentos</h3>
                    <p className="text-sm text-muted-foreground">Con y sin receta</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-accent/50 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Cuidado Personal</h3>
                    <p className="text-sm text-muted-foreground">Productos de calidad</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Stethoscope className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Asesoramiento</h3>
                    <p className="text-sm text-muted-foreground">Profesional y gratuito</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nuestras Categorías</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Encuentra todo lo que necesitas para tu salud y bienestar en un solo lugar
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className={`h-16 w-16 rounded-2xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${product.color}`}>
                    <product.icon className="h-8 w-8" />
                  </div>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Ver más
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">¿Por qué elegirnos?</Badge>
            <h2 className="text-4xl font-bold mb-4">Servicios que Ofrecemos</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprometidos con tu salud y bienestar
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
            ¿Tienes alguna pregunta sobre medicamentos?
          </h2>
          <p className="text-xl opacity-90 text-pretty">
            Nuestro chatbot está disponible para ayudarte con información sobre productos, 
            horarios, servicios y más. ¡Haz clic en el ícono de chat!
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button size="lg" variant="secondary" className="text-base">
              Iniciar Chat
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Ver Catálogo
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Visítanos o Contáctanos</h2>
              <p className="text-muted-foreground text-lg text-pretty">
                Estamos aquí para atenderte. Puedes visitarnos en nuestra farmacia o contactarnos 
                por cualquiera de nuestros medios disponibles.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Dirección</h3>
                    <p className="text-muted-foreground">Calle Principal #123, Centro, Ciudad</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">+34 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@farmavida.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horario</h3>
                    <p className="text-muted-foreground">Lunes a Sábado: 8:00 - 22:00</p>
                    <p className="text-muted-foreground">Domingo: 9:00 - 20:00</p>
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
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input 
                    id="email"
                    type="email" 
                    placeholder="tu@email.com" 
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
                  <textarea 
                    id="message"
                    placeholder="¿En qué podemos ayudarte?" 
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md"
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
          <h3 className="text-2xl font-bold mb-2">FarmaVida</h3>
          <p className="opacity-80 mb-4">Tu salud, nuestra misión</p>
          <p className="text-sm opacity-60">© 2026 FarmaVida. Todos los derechos reservados.</p>
        </div>
      </footer>

        {/* Chatbot Widget */}
        <Chatbot />
      </main>
    </>
  )
}
