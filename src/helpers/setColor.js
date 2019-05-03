const setColor = color => {
  switch (color) {
    case 'blond':
      return '#FAF0BE';

    case 'brown':
      return '#964B00';

    case 'grey':
      return '#808080';

    case 'black':
      return '#000000';

    case 'auburn':
      return '#A52A2A';

    case 'fair':
      return '#fef2e9';

    case 'gold':
      return '#b57722';

    case 'blue':
      return 'blue';

    case 'light':
      return '#f6c99f';

    case 'red':
      return 'red';

    case 'green':
      return 'green';

    case 'green-tan':
      return '#5c745e';

    case 'pale':
      return '#fbdac6';

    case 'dark':
      return '#452009';

    case 'brown mottle':
      return '#a52a2a';

    case 'mottled green':
      return '#133200';

    case 'tan':
      return '#d1b48c';

    case 'silver':
      return '#bfc0bf';

    case 'blue-gray':
      return '#8690a7';

    default:
      return color;
  }
};

export default setColor;
