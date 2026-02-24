'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

interface CartItemProps {
  item: {
    id: string
    quantity: number
    products: {
      id: string
      name: string
      description: string
      price: number
      image_url: string
      requires_prescription: boolean
    } | null
  }
}

export function CartItem({ item }: CartItemProps) {
  const router = useRouter()
  const supabase = createClient()
  const [loading, setLoading] = useState(false)

  if (!item.products) return null

  const handleUpdateQuantity = async (newQuantity: number) => {
    if (newQuantity < 1) return
    
    setLoading(true)
    try {
      await supabase
        .from('cart_items')
        .update({ quantity: newQuantity })
        .eq('id', item.id)
      
      router.refresh()
    } catch (error) {
      console.error('Error updating quantity:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleRemove = async () => {
    setLoading(true)
    try {
      await supabase
        .from('cart_items')
        .delete()
        .eq('id', item.id)
      
      router.refresh()
    } catch (error) {
      console.error('Error removing item:', error)
    } finally {
      setLoading(false)
    }
  }

  const subtotal = item.products.price * item.quantity

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex gap-4">
          {/* Image */}
          <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
            <img
              src={item.products.image_url || '/placeholder-product.jpg'}
              alt={item.products.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between gap-4 mb-2">
              <div className="flex-1">
                <h3 className="font-semibold line-clamp-1">
                  {item.products.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.products.description}
                </p>
                {item.products.requires_prescription && (
                  <Badge variant="outline" className="mt-2 text-xs">
                    Requiere receta
                  </Badge>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleRemove}
                disabled={loading}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>

            {/* Quantity & Price */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 bg-transparent"
                  onClick={() => handleUpdateQuantity(item.quantity - 1)}
                  disabled={loading || item.quantity <= 1}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center font-medium">
                  {item.quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 bg-transparent"
                  onClick={() => handleUpdateQuantity(item.quantity + 1)}
                  disabled={loading}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              
              <div className="text-right">
                <p className="text-sm text-muted-foreground">
                  €{item.products.price.toFixed(2)} c/u
                </p>
                <p className="text-lg font-bold text-primary">
                  €{subtotal.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
