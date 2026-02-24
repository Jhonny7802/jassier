import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle } from 'lucide-react'

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-muted/30">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="inline-flex h-12 w-12 rounded-full bg-destructive/10 items-center justify-center mb-4">
            <AlertCircle className="h-6 w-6 text-destructive" />
          </div>
          <CardTitle>Error de Autenticación</CardTitle>
          <CardDescription>
            Hubo un problema al intentar iniciar sesión. Por favor, intenta de nuevo.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/auth/login">
              Volver a Iniciar Sesión
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full bg-transparent">
            <Link href="/">
              Ir al Inicio
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
