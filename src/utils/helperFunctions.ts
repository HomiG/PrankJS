export function randomMilliseconds(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export const randomInteger = (min: number = 1, max: number = 10): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}