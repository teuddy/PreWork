function generateFibonacciSequence(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      const nextValue = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextValue);
    }
    return sequence;
  }
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  } else if (number <= 3) {
    return true;
  } else if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function calculateFactorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(itemName, price, quantity) {
    this.items.push({ itemName, price, quantity });
  }

  removeItem(itemName) {
    this.items = this.items.filter((item) => item.itemName !== itemName);
  }

  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  printReceipt() {
    console.log("Receipt:");
    for (const item of this.items) {
      console.log(
        `${item.itemName} - ${item.quantity} x $${item.price.toFixed(2)} each`
      );
    }
    console.log(`Total: $${this.calculateTotal().toFixed(2)}`);
  }
}
