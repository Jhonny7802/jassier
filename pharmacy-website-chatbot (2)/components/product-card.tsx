'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Heart, Loader2, Check } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  categories?: { name: string }
  requires_prescription: boolean
}

export function ProductCard({ product }: { product: Product }) {
  const router = useRouter()
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAddToCart = async () => {
    setLoading(true)

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      router.push('/auth/login')
      return
    }

    try {
      // Verificar si ya existe en el carrito
      const { data: existing } = await supabase
        .from('cart_items')
        .select('id, quantity')
        .eq('user_id', user.id)
        .eq('product_id', product.id)
        .single()

      if (existing) {
        // Actualizar cantidad
        await supabase
          .from('cart_items')
          .update({ quantity: existing.quantity + 1 })
          .eq('id', existing.id)
      } else {
        // Insertar nuevo
        await supabase
          .from('cart_items')
          .insert({
            user_id: user.id,
            product_id: product.id,
            quantity: 1
          })
      }

      setAdded(true)
      setTimeout(() => setAdded(false), 2000)
      router.refresh()
    } catch (error) {
      console.error('Error adding to cart:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image_url || '/placeholder-product.jpg'}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        {product.requires_prescription && (
          <Badge className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-600">
            Receta
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/80 hover:bg-background"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-4">
        {product.categories && (
          <p className="text-xs text-muted-foreground mb-1">
            {product.categories.name}
          </p>
        )}
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">
            €{product.price.toFixed(2)}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={handleAddToCart}
          disabled={loading || added}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Agregando...
            </>
          ) : added ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Agregado
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Agregar al carrito
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
