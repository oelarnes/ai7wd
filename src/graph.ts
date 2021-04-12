import { DisplayItem, DisplayItemSpec } from "./interface"

const age1 : DisplayItemSpec[] = [
    {
        position: 0,
        faceUp: true,
        children: [2, 3]
    },
    {
        position: 1,
        faceUp: true,
        children: [3, 4]
    },
    {
        position: 2,
        faceUp: false,
        children: [5, 6]
    },
    {
        position: 3,
        faceUp: false,
        children: [6, 7]
    },
    {
        position: 4,
        faceUp: false,
        children: [7, 8]
    },
    {
        position: 5,
        faceUp: true,
        children: [9, 10]
    },
    {
        position: 6,
        faceUp: true,
        children: [10, 11]
    },
    {
        position: 7,
        faceUp: true,
        children: [11, 12]
    },
    {
        position: 8,
        faceUp: true,
        children: [12, 13]
    },
    {
        position: 9,
        faceUp: false,
        children: [14, 15]
    },
    {
        position: 10,
        faceUp: false,
        children: [15, 16]
    },
    {
        position: 11,
        faceUp: false,
        children: [16, 17]
    },
    {
        position: 12,
        faceUp: false,
        children: [17, 18]
    },
    {
        position: 13,
        faceUp: false,
        children: [18, 19]
    },
    {
        position: 14,
        faceUp: true,
        children: []
    },
    {
        position: 15,
        faceUp: true,
        children: []
    },
    {
        position: 16,
        faceUp: true,
        children: []
    },
    {
        position: 17,
        faceUp: true,
        children: []
    },
    {
        position: 18,
        faceUp: true,
        children: []
    },
    {
        position: 19,
        faceUp: true,
        children: []
    }
]

const age2: DisplayItemSpec[] = [
    {
        position: 0,
        faceUp: true,
        children: [6]
    },
    {
        position: 1,
        faceUp: true,
        children: [6, 7]
    },
    {
        position: 2,
        faceUp: true,
        children: [7, 8]
    },
    {
        position: 3,
        faceUp: true,
        children: [8, 9]
    },
    {
        position: 4,
        faceUp: true,
        children: [9, 10]
    },
    {
        position: 5,
        faceUp: true,
        children: [10]
    },
    {
        position: 6,
        faceUp: false,
        children: [11]
    },
    {
        position: 7,
        faceUp: false,
        children: [11, 12]
    },
    {
        position: 8,
        faceUp: false,
        children: [12, 13]
    },
    {
        position: 9,
        faceUp: false,
        children: [13, 14]
    },
    {
        position: 10,
        faceUp: false,
        children: [14]
    },
    {
        position: 11,
        faceUp: true,
        children: [15]
    },
    {
        position: 12,
        faceUp: true,
        children: [15, 16]
    },
    {
        position: 13,
        faceUp: true,
        children: [16, 17]
    },
    {
        position: 14,
        faceUp: true,
        children: [17]
    },
    {
        position: 15,
        faceUp: false,
        children: [18]
    },
    {
        position: 16,
        faceUp: false,
        children: [18, 19]
    },
    {
        position: 17,
        faceUp: false,
        children: [19]
    },
    {
        position: 18,
        faceUp: true,
        children: []
    },
    {
        position: 19,
        faceUp: true,
        children: []
    }
]

const age3: DisplayItemSpec[] = [
    {
        position: 0,
        faceUp: true,
        children: [2, 3]
    },
    {
        position: 1,
        faceUp: true,
        children: [3, 4]
    },
    {
        position: 2,
        faceUp: false,
        children: [5, 6]
    },
    {
        position: 3,
        faceUp: false,
        children: [6, 7]
    },
    {
        position: 4,
        faceUp: false,
        children: [7, 8]
    },
    {
        position: 5,
        faceUp: true,
        children: [9]
    },
    {
        position: 6,
        faceUp: true,
        children: [9]
    },
    {
        position: 7,
        faceUp: true,
        children: [10]
    },
    {
        position: 8,
        faceUp: true,
        children: [10]
    },
    {
        position: 9,
        faceUp: false,
        children: [11, 12]
    },
    {
        position: 10,
        faceUp: false,
        children: [13, 14]
    },
    {
        position: 11,
        faceUp: true,
        children: [15]
    },
    {
        position: 12,
        faceUp: true,
        children: [15, 16]
    },
    {
        position: 13,
        faceUp: true,
        children: [16, 17]
    },
    {
        position: 14,
        faceUp: true,
        children: [17]
    },
    {
        position: 15,
        faceUp: false,
        children: [18]
    },
    {
        position: 16,
        faceUp: false,
        children: [18, 19]
    },
    {
        position: 17,
        faceUp: false,
        children: [19]
    },
    {
        position: 18,
        faceUp: true,
        children: []
    },
    {
        position: 19,
        faceUp: true,
        children: []
    }
]

export const displaySpecs: {
    age1: DisplayItemSpec[],
    age2: DisplayItemSpec[],
    age3: DisplayItemSpec[]
} = {
    age1,
    age2,
    age3
}
