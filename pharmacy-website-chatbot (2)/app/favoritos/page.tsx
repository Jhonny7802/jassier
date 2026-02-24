import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/navbar'
import { ProductCard } from '@/components/product-card'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function FavoritosPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  // Nota: Esta funcionalidad requiere crear la tabla favorites en Supabase
  // Por ahora mostramos un estado vacío
  const favorites: any[] = []

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-muted/30 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Mis Favoritos</h1>
            <p className="text-muted-foreground">
              Productos que has guardado para más tarde
            </p>
          </div>

          {favorites && favorites.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favorites.map((item: any) => (
                <ProductCard key={item.id} product={item.products} />
              ))}
            </div>
          ) : (
            <Card className="py-20">
              <CardContent className="text-center">
                <div className="inline-flex h-20 w-20 rounded-full bg-muted items-center justify-center mb-4">
                  <Heart className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No tienes favoritos guardados</h3>
                <p className="text-muted-foreground mb-6">
                  Explora nuestros productos y guarda tus favoritos para encontrarlos fácilmente
                </p>
                <Button asChild>
                  <Link href="/productos">
                    Explorar Productos
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </>
  )
}
