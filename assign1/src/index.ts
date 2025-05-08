function formatString(input: string, toUpper?: boolean): string {
  const result = toUpper === false ? input.toLowerCase() : input.toUpperCase();
  console.log(result);
  return result;
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const result = items.filter((item) => item.rating >= 4);
  console.log(result);
  return result;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const matchElement = typeof arrays[0][0];

  for (const array of arrays) {
    if (!array.every((item) => typeof item === matchElement)) {
      throw new Error("All elements need to be the same type");
    }
  }

  const result = ([] as T[]).concat(...arrays);
  console.log(result);
  return result;
}

class Vehicle {
  constructor(private make: string, private year: number) {}

  public getInfo(): string {
    const result = `Make: ${this.make}, Year: ${this.year}`;
    console.log(result);
    return result;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }

  public getModel(): string {
    const result = `Model: ${this.model}`;
    console.log(result);
    return result;
  }
}

function processValue(value: string | number): number {
  const result = typeof value === "string" ? value.length : value * 2;
  console.log(result);
  return result;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  const result =
    products.length === 0
      ? null
      : [...products].sort((a, b) => b.price - a.price)[0];
  console.log(result);
  return result;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  const result =
    day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
  console.log(result);
  return result;
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error(" Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}
