-- Create profiles table
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text,
  phone text,
  address text,
  created_at timestamp with time zone default now()
);

-- Create categories table
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  icon text,
  created_at timestamp with time zone default now()
);

-- Create products table
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.categories(id) on delete set null,
  name text not null,
  description text,
  price numeric(10,2) not null,
  stock integer not null default 0,
  image_url text,
  requires_prescription boolean default false,
  featured boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Create cart items table
create table if not exists public.cart_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  product_id uuid references public.products(id) on delete cascade not null,
  quantity integer not null default 1,
  created_at timestamp with time zone default now(),
  unique(user_id, product_id)
);

-- Create orders table
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  total numeric(10,2) not null,
  status text not null default 'pending',
  shipping_address text not null,
  created_at timestamp with time zone default now()
);

-- Create order items table
create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references public.orders(id) on delete cascade not null,
  product_id uuid references public.products(id) on delete set null,
  product_name text not null,
  quantity integer not null,
  price numeric(10,2) not null,
  created_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.cart_items enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

-- Profiles policies
create policy "profiles_select_own" on public.profiles for select using (auth.uid() = id);
create policy "profiles_insert_own" on public.profiles for insert with check (auth.uid() = id);
create policy "profiles_update_own" on public.profiles for update using (auth.uid() = id);

-- Categories policies (public read)
create policy "categories_select_all" on public.categories for select using (true);

-- Products policies (public read)
create policy "products_select_all" on public.products for select using (true);

-- Cart items policies
create policy "cart_items_select_own" on public.cart_items for select using (auth.uid() = user_id);
create policy "cart_items_insert_own" on public.cart_items for insert with check (auth.uid() = user_id);
create policy "cart_items_update_own" on public.cart_items for update using (auth.uid() = user_id);
create policy "cart_items_delete_own" on public.cart_items for delete using (auth.uid() = user_id);

-- Orders policies
create policy "orders_select_own" on public.orders for select using (auth.uid() = user_id);
create policy "orders_insert_own" on public.orders for insert with check (auth.uid() = user_id);

-- Order items policies
create policy "order_items_select_own" on public.order_items 
  for select using (
    exists (
      select 1 from public.orders 
      where orders.id = order_items.order_id 
      and orders.user_id = auth.uid()
    )
  );
