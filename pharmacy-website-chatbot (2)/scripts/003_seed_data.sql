-- Insert categories
insert into public.categories (name, description, icon) values
  ('Analgésicos', 'Medicamentos para aliviar el dolor', 'pill'),
  ('Vitaminas', 'Suplementos nutricionales y vitaminas', 'heart'),
  ('Cuidado Personal', 'Productos de higiene y cuidado', 'shopping-bag'),
  ('Primeros Auxilios', 'Kit de emergencia y primeros auxilios', 'shield'),
  ('Dermatología', 'Productos para el cuidado de la piel', 'sparkles'),
  ('Digestivos', 'Medicamentos para problemas digestivos', 'tablets')
on conflict do nothing;

-- Insert products (getting category ids first)
insert into public.products (category_id, name, description, price, stock, requires_prescription, featured) 
select 
  c.id,
  'Paracetamol 500mg',
  'Analgésico y antipirético efectivo para dolores leves y moderados',
  5.99,
  100,
  false,
  true
from public.categories c where c.name = 'Analgésicos'
union all
select 
  c.id,
  'Ibuprofeno 400mg',
  'Antiinflamatorio no esteroideo para dolor e inflamación',
  7.50,
  80,
  false,
  true
from public.categories c where c.name = 'Analgésicos'
union all
select 
  c.id,
  'Vitamina C 1000mg',
  'Fortalece el sistema inmunológico',
  12.99,
  150,
  false,
  true
from public.categories c where c.name = 'Vitaminas'
union all
select 
  c.id,
  'Multivitamínico Completo',
  'Complejo vitamínico con minerales esenciales',
  18.50,
  120,
  false,
  true
from public.categories c where c.name = 'Vitaminas'
union all
select 
  c.id,
  'Omega 3',
  'Ácidos grasos esenciales para la salud cardiovascular',
  22.00,
  90,
  false,
  false
from public.categories c where c.name = 'Vitaminas'
union all
select 
  c.id,
  'Gel Antibacterial',
  'Higienizante de manos con 70% alcohol',
  3.99,
  200,
  false,
  true
from public.categories c where c.name = 'Cuidado Personal'
union all
select 
  c.id,
  'Crema Hidratante',
  'Crema facial con ácido hialurónico',
  15.99,
  60,
  false,
  false
from public.categories c where c.name = 'Cuidado Personal'
union all
select 
  c.id,
  'Botiquín Primeros Auxilios',
  'Kit completo con vendas, gasas y antisépticos',
  29.99,
  40,
  false,
  true
from public.categories c where c.name = 'Primeros Auxilios'
union all
select 
  c.id,
  'Termómetro Digital',
  'Medición rápida y precisa de temperatura',
  12.50,
  70,
  false,
  false
from public.categories c where c.name = 'Primeros Auxilios'
union all
select 
  c.id,
  'Protector Solar SPF 50',
  'Protección avanzada contra rayos UV',
  24.99,
  85,
  false,
  true
from public.categories c where c.name = 'Dermatología'
union all
select 
  c.id,
  'Crema Antiacné',
  'Tratamiento para piel propensa al acné',
  19.99,
  55,
  false,
  false
from public.categories c where c.name = 'Dermatología'
union all
select 
  c.id,
  'Antiácido',
  'Alivio rápido de acidez estomacal',
  8.50,
  110,
  false,
  false
from public.categories c where c.name = 'Digestivos'
on conflict do nothing;
