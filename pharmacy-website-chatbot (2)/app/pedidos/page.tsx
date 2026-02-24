import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Package, Clock, CheckCircle2, XCircle } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function PedidosPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  const { data: orders } = await supabase
    .from('orders')
    .select(`
      *,
      order_items (
        *,
        products (
          name,
          image_url
        )
      )
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <Badge variant="outline" className="flex items-center gap-1 w-fit">
            <Clock className="h-3 w-3" />
            Pendiente
          </Badge>
        )
      case 'processing':
        return (
          <Badge className="bg-blue-500 flex items-center gap-1 w-fit">
            <Package className="h-3 w-3" />
            En proceso
          </Badge>
        )
      case 'shipped':
        return (
          <Badge className="bg-orange-500 flex items-center gap-1 w-fit">
            <Package className="h-3 w-3" />
            Enviado
          </Badge>
        )
      case 'delivered':
        return (
          <Badge className="bg-primary flex items-center gap-1 w-fit">
            <CheckCircle2 className="h-3 w-3" />
            Entregado
          </Badge>
        )
      case 'cancelled':
        return (
          <Badge variant="destructive" className="flex items-center gap-1 w-fit">
            <XCircle className="h-3 w-3" />
            Cancelado
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-muted/30 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Mis Pedidos</h1>
            <p className="text-muted-foreground">
              Historial completo de tus compras
            </p>
          </div>

          {orders && orders.length > 0 ? (
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-lg">
                          Pedido #{order.id.slice(0, 8).toUpperCase()}
                        </CardTitle>
                        <CardDescription>
                          {new Date(order.created_at).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-2">
                        {getStatusBadge(order.status)}
                        <p className="text-lg font-bold text-primary">
                          €{order.total.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {order.order_items?.map((item: any) => (
                        <div key={item.id} className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-lg bg-muted flex-shrink-0 overflow-hidden">
                            <img
                              src={item.products?.image_url || '/placeholder-product.jpg'}
                              alt={item.products?.name || 'Producto'}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium line-clamp-1">
                              {item.products?.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Cantidad: {item.quantity} × €{item.price.toFixed(2)}
                            </p>
                          </div>
                          <p className="font-medium">
                            €{(item.quantity * item.price).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>

                    {order.direccion_envio && (
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm text-muted-foreground">
                          Dirección de envío: {order.direccion_envio}
                        </p>
                      </div>
                    )}

                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">
                        Ver Detalles
                      </Button>
                      {order.status === 'delivered' && (
                        <Button variant="outline" size="sm">
                          Comprar de nuevo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="py-20">
              <CardContent className="text-center">
                <div className="inline-flex h-20 w-20 rounded-full bg-muted items-center justify-center mb-4">
                  <Package className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No tienes pedidos aún</h3>
                <p className="text-muted-foreground mb-6">
                  Comienza a comprar para ver tu historial de pedidos
                </p>
                <Button asChild>
                  <a href="/productos">
                    Explorar Productos
                  </a>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </>
  )
}
