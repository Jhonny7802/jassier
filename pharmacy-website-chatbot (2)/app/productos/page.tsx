import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/navbar'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Filter, Search } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function ProductosPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string; busqueda?: string }>
}) {
  const params = await searchParams
  const supabase = await createClient()

  // Obtener categorías
  const { data: categorias } = await supabase
    .from('categories')
    .select('*')
    .order('name')

  // Construir query de productos
  let query = supabase
    .from('products')
    .select('*, categories(name)')
    .eq('stock', true)
    .order('name')

  // Filtrar por categoría si existe
  if (params.categoria) {
    const { data: categoria } = await supabase
      .from('categories')
      .select('id')
      .eq('slug', params.categoria)
      .single()
    
    if (categoria) {
      query = query.eq('category_id', categoria.id)
    }
  }

  // Buscar si existe término de búsqueda
  if (params.busqueda) {
    query = query.ilike('name', `%${params.busqueda}%`)
  }

  const { data: productos } = await query

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-muted/30">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 px-4 border-b">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                Catálogo completo
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
                Encuentra todo lo que necesitas
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Explora nuestro catálogo completo de productos farmacéuticos y de salud
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b py-4 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <form action="/productos" method="get" className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    name="busqueda"
                    type="search"
                    placeholder="Buscar productos..."
                    className="pl-9"
                    defaultValue={params.busqueda}
                  />
                </div>
              </form>

              {/* Category Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                <Button
                  variant={!params.categoria ? 'default' : 'outline'}
                  size="sm"
                  asChild
                >
                  <a href="/productos">Todos</a>
                </Button>
                {categorias?.map((categoria) => (
                  <Button
                    key={categoria.id}
                    variant={params.categoria === categoria.slug ? 'default' : 'outline'}
                    size="sm"
                    asChild
                  >
                    <a href={`/productos?categoria=${categoria.slug}`}>
                      {categoria.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            {productos && productos.length > 0 ? (
              <>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    Mostrando {productos.length} {productos.length === 1 ? 'producto' : 'productos'}
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {productos.map((producto) => (
                    <ProductCard key={producto.id} product={producto} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <div className="inline-flex h-20 w-20 rounded-full bg-muted items-center justify-center mb-4">
                  <Filter className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No se encontraron productos</h3>
                <p className="text-muted-foreground mb-6">
                  Intenta cambiar los filtros o la búsqueda
                </p>
                <Button asChild>
                  <a href="/productos">Ver todos los productos</a>
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
