import { Navbar } from '@/components/navbar'
import { Chatbot } from '@/components/chatbot'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FileText, Clock, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react'

export default function MisTramitesPage() {
  const hasSupabase =
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const sampleStatuses = [
    {
      title: 'Solicitud de Licencia E',
      status: 'En proceso',
      statusColor: 'bg-blue-600/20 text-blue-400 border-blue-600/30',
      date: '15 de febrero de 2026',
      description: 'Documentacion presentada ante Intervencion de Armas.',
    },
    {
      title: 'Examen Psicofisico',
      status: 'Completado',
      statusColor: 'bg-emerald-600/20 text-emerald-400 border-emerald-600/30',
      date: '10 de febrero de 2026',
      description: 'Certificado emitido con resultado apto.',
    },
    {
      title: 'Curso de Formacion',
      status: 'Completado',
      statusColor: 'bg-emerald-600/20 text-emerald-400 border-emerald-600/30',
      date: '5 de febrero de 2026',
      description: 'Curso de manejo seguro de armas finalizado.',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-primary py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-primary-foreground mb-2">Mis Tramites</h1>
            <p className="text-primary-foreground/70">
              Seguimiento del estado de tus solicitudes y tramites
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            {!hasSupabase ? (
              <div className="space-y-6">
                <Card className="border-accent/30">
                  <CardContent className="p-6 flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Funcionalidad en desarrollo</h3>
                      <p className="text-sm text-muted-foreground">
                        El seguimiento en linea de tramites estara disponible proximamente. 
                        Mientras tanto, contactanos para consultar el estado de tu solicitud.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Sample display */}
                <div className="text-center mb-6">
                  <Badge className="mb-3">Vista previa</Badge>
                  <h2 className="text-2xl font-bold">Asi veras tus Tramites</h2>
                </div>

                <div className="space-y-4 opacity-75">
                  {sampleStatuses.map((item, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-primary" />
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                          </div>
                          <Badge variant="outline" className={item.statusColor}>
                            {item.status === 'Completado' ? (
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                            ) : (
                              <Clock className="h-3 w-3 mr-1" />
                            )}
                            {item.status}
                          </Badge>
                        </div>
                        <CardDescription>{item.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center pt-6">
                  <Link href="/contacto">
                    <Button size="lg" className="font-semibold">
                      Consultar Estado de mi Tramite
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <Card className="py-20">
                <CardContent className="text-center">
                  <div className="inline-flex h-20 w-20 rounded-full bg-muted items-center justify-center mb-4">
                    <FileText className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No tienes tramites activos</h3>
                  <p className="text-muted-foreground mb-6">
                    Inicia una solicitud para ver su seguimiento aqui
                  </p>
                  <Button asChild>
                    <Link href="/contacto">Iniciar un Tramite</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
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
