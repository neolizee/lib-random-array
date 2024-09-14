'use strict';

class UseRandomArray {
    number(length = 10, min = 0, max = 10, unique = true) {
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
        const array = unique ? new Set() : [];
        while (unique ? array.size < length : array.length < length) {
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            unique ? array.add(random) : array.push(random);
        }
        return unique ? Array.from(array) : array;
    }
    string(length = 10, character = 10) {
        const map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        return Array.from({ length }, () => Array.from({ length: character }, () => map[Math.floor(Math.random() * map.length)]).join(""));
    }
    boolean(length = 10) {
        return Array.from({ length }, () => Math.random() > 0.5);
    }
}

exports.UseRandomArray = UseRandomArray;
