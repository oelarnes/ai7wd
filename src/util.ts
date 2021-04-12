import { GameStateRaw } from "./interface";

// unholy mashup of xmur3 and mulberry32 without bothering to learn the details. So sorry
function rand(str: string): number {
    for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++) 
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
        h = h << 13 | h >>> 19;
    h = (h ^= h >>> 16) >>> 0;
    var t = h += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

export function randN(n: number, state: {randomSeed: number} | GameStateRaw, secret: string = ''): number {
    return Math.floor( rand( JSON.stringify( state ) + secret ) ) * n;
}

export function randSample(choices: number[], sample: number, state: {randomSeed: number} | GameStateRaw, secret: string = ''): number[] {
    if (sample <= 0) {
        return []
    }
    const rand = randN(choices.length, state, secret)
    return [choices[rand]].concat(randSample(choices.slice(0, rand).concat(choices.slice(rand + 1)), sample - 1, state, secret + 's'))
}

export function getRange(start: number, end: number) {
    return Array.from({length: end - start}, (_, i) => i + start)
}
