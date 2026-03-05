import { Navbar } from '@/components/navbar'
import { Chatbot } from '@/components/chatbot'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { User, Mail, Phone, Shield, ArrowRight, AlertCircle } from 'lucide-react'

export default function PerfilPage() {
  const hasSupabase =
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!hasSupabase) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen">
          <section className="bg-primary py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-primary-foreground mb-2">Mi Perfil</h1>
              <p className="text-primary-foreground/70">Gestiona tu informacion personal</p>
            </div>
          </section>

          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-accent/30">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex h-20 w-20 rounded-full bg-primary/10 items-center justify-center">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Inicia Sesion para Ver tu Perfil</h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    El sistema de perfiles estara disponible proximamente. 
                    Contactanos para gestionar tu cuenta o consultar tus datos.
                  </p>
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <Link href="/auth/login">
                      <Button>Iniciar Sesion</Button>
                    </Link>
                    <Link href="/contacto">
                      <Button variant="outline" className="bg-transparent">
                        Contactar
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

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

  // With Supabase connected, this would load user data
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="bg-primary py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-primary-foreground mb-2">Mi Perfil</h1>
            <p className="text-primary-foreground/70">Gestiona tu informacion personal</p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">Cargando perfil...</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Chatbot />
      </main>
    </>
  )
}
