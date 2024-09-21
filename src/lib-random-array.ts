export class UseRandomArray {
  number(length: number = 10, min: number = 0, max: number = 10, unique: boolean = true) {

    if (!Number.isInteger(length) || length <= 0) {
      throw new Error("The length of the array must be a positive integer!");
    }
    if (!Number.isInteger(max) || max <= min) {
      throw new Error("The maximum value must be greater than the minimum value and be a positive integer!");
    }
    if (!Number.isInteger(min)) {
      throw new Error("The minimum value must be an integer!");
    }
    if (typeof unique !== "boolean") {
      throw new Error("The uniqueness parameter must be a boolean value!");
    }
    if (length > max - min + 1 && unique) {
      throw new Error("The length of the array cannot exceed the range of values when unique numbers are required!");
    }

    const array: Set<number> | number[] = unique ? new Set<number>() : [];

    while (unique ? (array as Set<number>).size < length : (array as number[]).length < length) {
      const random = Math.floor(Math.random() * (max - min + 1)) + min;

      unique ? (array as Set<number>).add(random) : (array as number[]).push(random);
    }

    return unique ? Array.from(array as Set<number>) : (array as number[]);
  }

  string(length: number = 10, character: number = 10): string[] {
    const map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from({ length }, () =>
      Array.from({ length: character }, () => map[Math.floor(Math.random() * map.length)]).join("")
    );
  }

  boolean(length: number = 10): boolean[] {
    return Array.from({ length }, () => Math.random() > 0.5);
  }
}
