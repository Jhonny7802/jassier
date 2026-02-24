import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { 
  FileText, 
  Shield, 
  Target, 
  Scale, 
  ClipboardCheck,
  ArrowRight
} from 'lucide-react'

export default function ProductosPage() {
  const licenses = [
    {
      icon: FileText,
      title: 'Licencia Tipo B',
      subtitle: 'Armas Cortas - Defensa Personal',
      description: 'Para la tenencia de armas cortas con fines de defensa personal. Requiere justificacion y aprobacion de la autoridad competente.',
      features: ['Examen medico', 'Examen psicologico', 'Justificacion de necesidad', 'Prueba de tiro'],
      badge: 'Mas solicitada'
    },
    {
      icon: Target,
      title: 'Licencia Tipo D',
      subtitle: 'Armas Largas Rayadas - Caza Mayor',
      description: 'Licencia para armas largas rayadas destinadas a la practica de caza mayor en todo el territorio nacional.',
      features: ['Examen medico', 'Examen psicologico', 'Licencia de caza', 'Seguro obligatorio'],
      badge: null
    },
    {
      icon: Shield,
      title: 'Licencia Tipo E',
      subtitle: 'Armas de Fuego - Uso Deportivo',
      description: 'Para tiradores deportivos federados. Permite la tenencia de armas para practica deportiva en galerias autorizadas.',
      features: ['Examen medico', 'Ficha federativa', 'Inscripcion en club', 'Certificado de aptitud'],
      badge: 'Deportivo'
    },
    {
      icon: Scale,
      title: 'Licencia Tipo C',
      subtitle: 'Armas Largas Lisas - Caza Menor',
      description: 'Licencia para escopetas y armas largas de anima lisa. La mas comun para actividades de caza menor.',
      features: ['Examen medico', 'Examen psicologico', 'Licencia de caza', 'Seguro de cazador'],
      badge: null
    },
    {
      icon: ClipboardCheck,
      title: 'Renovacion de Licencia',
      subtitle: 'Todas las Categorias',
      description: 'Servicio de renovacion para cualquier tipo de licencia de armas antes de su vencimiento. Gestion integral del proceso.',
      features: ['Examen medico actualizado', 'Examen psicologico', 'Revision de documentacion', 'Entrega en plazo'],
      badge: 'Renovacion'
    },
    {
      icon: FileText,
      title: 'Guia de Pertenencia',
      subtitle: 'Alta y Traslado de Armas',
      description: 'Tramitacion de guias de pertenencia para el alta, baja o traslado de armas de fuego legalmente adquiridas.',
      features: ['Documentacion del arma', 'Verificacion de origen', 'Registro en Intervencion', 'Certificado final'],
      badge: null
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-muted/30">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 px-4 border-b">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                Catalogo de tramites
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
                Licencias y Tramites
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Consulta todos los tipos de licencias de armas y tramites que gestionamos
              </p>
            </div>
          </div>
        </section>

        {/* Licenses Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Mostrando {licenses.length} tipos de tramites disponibles
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {licenses.map((license, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <license.icon className="h-6 w-6 text-primary" />
                      </div>
                      {license.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {license.badge}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{license.title}</CardTitle>
                    <p className="text-sm font-medium text-accent">{license.subtitle}</p>
                    <CardDescription className="text-sm">
                      {license.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-1.5 mb-6 flex-1">
                      {license.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contacto">
                      <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" variant="outline">
                        Solicitar Informacion
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
