function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Ambos parámetros deben ser números');
    }
  
    return a + b;
  }
  
  function resta(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Ambos parámetros deben ser números');
    }
  
    return a - b;
  }
