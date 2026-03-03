import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://lmuhcehpsfnyjizwhljw.supabase.co',
  'sb_publishable_9AYe3vXEOLt8xnZ4ohrnPQ_qVpmH1fu'
);

function App() {
  const [cars, setCars] = useState<any[]>([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    const { data } = await supabase.from('cars').select('*');
    if (data) setCars(data);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">BORAA VENTURES</h1>
      <p className="text-center text-gray-400 mb-8">Mobility without the noise</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cars.map((car) => (
          <div key={car.id} className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">{car.name}</h3>
            <p className="text-gray-400 mb-4">{car.year} • {car.type}</p>
            <p className="text-3xl font-bold text-blue-400">${car.price_per_week}<span className="text-sm text-gray-500">/semana</span></p>
            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg">
              Reservar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
