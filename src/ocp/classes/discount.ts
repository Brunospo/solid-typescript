export abstract class Discount {
  abstract calculate(value: number): number;
}

export class FiftyPercentDiscount extends Discount {
  calculate(value: number): number {
    return value - value * 0.5;
  }
}
export class TenPercentDiscount extends Discount {
  calculate(value: number): number {
    return value - value * 0.1;
  }
}
export class NoDiscount extends Discount {
  calculate(value: number): number {
    return value;
  }
}
