function calculateAverage(numbers) {
    let sum = 0;
    numbers.forEach((number) => {
      sum += number;
    });
    return sum / numbers.length;
  }
  