const getDay = () => {
  const date = new Date();
  const hour = date.getHours();
  const hrs = [
    'Doce',
    'Una',
    'Dos',
    'Tres',
    'Cuatro',
    'Cinco',
    'Seis',
    'Siete',
    'Ocho',
    'Nueve',
    'Diez',
    'Once',
    'Doce',
    'Una',
    'Dos',
    'Tres',
    'Cuatro',
    'Cinco',
    'Seis',
    'Siete',
    'Ocho',
    'Nueve',
    'Diez',
    'Once',
  ];

  let msj = '';
  switch (true) {
    case hour >= 6 && hour < 11:
      msj = 'de la Mañana';
      break;
    case hour >= 11 && hour < 13:
      msj = 'del Mediodía';
      break;
    case hour >= 13 && hour < 19:
      msj = 'de la Tarde';
      break;
    case hour >= 19 && hour < 24:
      msj = 'de la Noche';
      break;
    case hour >= 0 && hour < 6:
      msj = 'de la Madrugada';
      break;
  }
  const response = `Son las ${hrs[hour]} ${msj}`;
  console.log(response)
  return response
};

module.exports = { getDay };
