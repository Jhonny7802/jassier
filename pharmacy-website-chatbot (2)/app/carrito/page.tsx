import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/navbar'
import { CartItem } from '@/components/cart-item'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingBag, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function CarritoPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  const { data: cartItems } = await supabase
    .from('cart_items')
    .select(`
      *,
      products (
        id,
        name,
        description,
        price,
        image_url,
        requires_prescription
      )
    `)
    .eq('user_id', user.id)

  const subtotal = cartItems?.reduce((sum, item) => {
    return sum + (item.products?.price || 0) * item.quantity
  }, 0) || 0

  const envio = subtotal > 50 ? 0 : 5.99
  const total = subtotal + envio

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-muted/30 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Mi Carrito</h1>
            <p className="text-muted-foreground">
              {cartItems?.length || 0} {cartItems?.length === 1 ? 'producto' : 'productos'} en tu carrito
            </p>
          </div>

          {cartItems && cartItems.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Resumen del Pedido</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">€{subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Envío</span>
                        <span className="font-medium">
                          {envio === 0 ? (
                            <Badge variant="secondary" className="text-xs">Gratis</Badge>
                          ) : (
                            `€${envio.toFixed(2)}`
                          )}
                        </span>
                      </div>
                      {subtotal < 50 && (
                        <p className="text-xs text-muted-foreground">
                          Envío gratis en pedidos superiores a €50
                        </p>
                      )}
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold">Total</span>
                        <span className="text-2xl font-bold text-primary">
                          €{total.toFixed(2)}
                        </span>
                      </div>

                      <Button className="w-full" size="lg">
                        Proceder al Pago
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="text-center pt-4 border-t">
                      <Link
                        href="/productos"
                        className="text-sm text-primary hover:underline"
                      >
                        Continuar comprando
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <Card className="py-20">
              <CardContent className="text-center">
                <div className="inline-flex h-20 w-20 rounded-full bg-muted items-center justify-center mb-4">
                  <ShoppingBag className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tu carrito está vacío</h3>
                <p className="text-muted-foreground mb-6">
                  Agrega productos a tu carrito para comenzar tu compra
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
