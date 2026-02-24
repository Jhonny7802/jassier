import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { User, Mail, Phone, MapPin, Calendar } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function PerfilPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const createdAt = new Date(user.created_at).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-muted/30 py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Mi Perfil</h1>
              <p className="text-muted-foreground">Gestiona tu información personal</p>
            </div>
            <Badge variant="secondary" className="flex items-center gap-2">
              <Calendar className="h-3 w-3" />
              Miembro desde {createdAt}
            </Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Profile Summary */}
            <Card className="md:col-span-1">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="inline-flex h-24 w-24 rounded-full bg-primary/10 items-center justify-center">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">
                      {profile?.nombre} {profile?.apellido}
                    </h2>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                  <div className="pt-4 space-y-2 text-left">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Email verificado</span>
                    </div>
                    {profile?.telefono && (
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{profile.telefono}</span>
                      </div>
                    )}
                    {profile?.direccion && (
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{profile.direccion}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Edit Profile */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Información Personal</CardTitle>
                <CardDescription>
                  Actualiza tus datos personales y de contacto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre</Label>
                      <Input
                        id="nombre"
                        type="text"
                        defaultValue={profile?.nombre || ''}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apellido">Apellido</Label>
                      <Input
                        id="apellido"
                        type="text"
                        defaultValue={profile?.apellido || ''}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={user.email || ''}
                      disabled
                      className="bg-muted"
                    />
                    <p className="text-xs text-muted-foreground">
                      El email no se puede cambiar
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      type="tel"
                      defaultValue={profile?.telefono || ''}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="direccion">Dirección</Label>
                    <Input
                      id="direccion"
                      type="text"
                      defaultValue={profile?.direccion || ''}
                      placeholder="Calle, número, ciudad, código postal"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button type="submit">
                      Guardar Cambios
                    </Button>
                    <Button type="button" variant="outline">
                      Cancelar
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Seguridad</CardTitle>
                <CardDescription>Gestiona tu contraseña y seguridad</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full bg-transparent">
                  Cambiar Contraseña
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preferencias</CardTitle>
                <CardDescription>Configura tus preferencias</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notificaciones por email</p>
                    <p className="text-xs text-muted-foreground">Recibe ofertas y novedades</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Activar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}
