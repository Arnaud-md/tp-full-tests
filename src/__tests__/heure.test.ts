import { describe, expect, test } from 'vitest'
import { calculerHeure } from '../heure';

describe("Tests calcul de l'heure", () => {
    describe("cadran de la lune = 1", () => {
        test("lune=1, terre=1, soleil=1", () => {
            expect(calculerHeure(1, 1, 1)).toBe("mortin");
        });
        test("lune=1, terre=1, soleil=2", () => {
            expect(calculerHeure(1, 1, 2)).toBe("nuight");
        });
        test("lune=1, terre=2, soleil=1", () => {
            expect(calculerHeure(1, 2, 1)).toBe("mortin");
        });
        test("lune=1, terre=2, soleil=2", () => {
            expect(calculerHeure(1, 2, 2)).toBe("nuight");
        });
    })
    describe("cadran de la lune = 2", () => {
        test("lune=2, terre=1, soleil=1", () => {
            expect(calculerHeure(2, 1, 1)).toBe("aprenoon");
        });
        test("lune=2, terre=1, soleil=2", () => {
            expect(calculerHeure(2, 1, 2)).toBe("soirning");
        });
        test("lune=2, terre=2, soleil=1", () => {
            expect(calculerHeure(2, 2, 1)).toBe("aprenoon");
        });
        test("lune=2, terre=2, soleil=2", () => {
            expect(calculerHeure(2, 2, 2)).toBe("nuight");
        });
    })
})