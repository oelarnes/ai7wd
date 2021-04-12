import {CardType, EffectType, Link, ObjectType, Resource, Science, VpCalcType} from './interface';

export const objectKey = {
    wonder: [0, 11],
    age1: [12, 34],
    age2: [35, 57],
    age3: [58, 77],
    guild: [78, 84],
    token: [85, 94]
}

export const objects: Object[] = [
    {
        id: 0,
        name: "The Appian Way",
        objectType: ObjectType.Wonder,
        cost: {
            papyrus: 1,
            brick: 2,
            stone: 2
        },
        vp: 3,
        effects: [
            {
                effectType: EffectType.GainCoins,
                value: 3
            },
            {
                effectType: EffectType.DestroyCoins,
                value: 3
            },
            {
                effectType: EffectType.ExtraTurn
            }
        ]
    },
    {
        id: 1,
        name: "Circus Maximus",
        objectType: ObjectType.Wonder,
        cost: {
            glass: 1,
            wood: 1,
            stone: 2
        },
        vp: 3,
        effects: [
            {
                effectType: EffectType.DestroyCard,
                attribute: CardType.ProductionGrey
            },
            {
                effectType: EffectType.GainShields,
                value: 1
            }
        ]
    },
    {
        id: 2,
        name: "The Colossus",
        objectType: ObjectType.Wonder,
        cost: {
            glass: 1,
            brick: 3
        },
        vp: 3,
        effects: [
            {
                effectType: EffectType.GainShields,
                value: 2
            }
        ]
    },
    {
        id: 3,
        name: "The Great Library",
        objectType: ObjectType.Wonder,
        cost: {
            papyrus: 1,
            glass: 1,
            wood: 3
        },
        vp: 4,
        effects: [
            {
                effectType: EffectType.OneTokenFromBox
            }
        ]
    },
    {
        id: 4,
        name: "The Great Lighthouse",
        objectType: ObjectType.Wonder,
        cost: {
            papyrus: 2,
            stone: 1,
            wood: 1
        },
        vp: 4,
        makesOneOf: [
            [
                Resource.Wood,
                Resource.Stone,
                Resource.Brick
            ]
        ]
    },
    {
        id: 5,
        name: "The Hanging Gardens",
        objectType: ObjectType.Wonder,
        cost: {
            papyrus: 1,
            glass: 1,
            wood: 2
        },
        vp: 3,
        effects: [
            {
                effectType: EffectType.GainCoins,
                value: 6
            },
            {
                effectType: EffectType.ExtraTurn
            }
        ]
    },
    {
        id: 6,
        name: "The Mausoleum",
        objectType: ObjectType.Wonder,
        cost: {
            papyrus: 1,
            glass: 2,
            brick: 2
        },
        vp: 2,
        effects: [
            {
                effectType: EffectType.ConstructFromDiscard
            }
        ]
    },
    {
        id: 7,
        name: "Piraeus",
        objectType: ObjectType.Wonder,
        cost: {
            brick: 1,
            stone: 1,
            wood: 2
        },
        vp: 2,
        makesOneOf: [
            [
                Resource.Papyrus,
                Resource.Glass
            ]
        ],
        effects: [
            {
                effectType: EffectType.ExtraTurn
            }
        ]
    },
    {
        id: 8,
        name: "The Pyramids",
        objectType: ObjectType.Wonder,
        cost: {
            papyrus: 1,
            stone: 3
        },
        vp: 9
    },
    {
        id: 9,
        name: "The Sphinx",
        objectType: ObjectType.Wonder,
        cost: {
            glass: 2,
            brick: 1,
            stone: 1
        },
        vp: 6,
        effects: [
            {
                effectType: EffectType.ExtraTurn
            },
        ]
    },
    {
        id: 10,
        name: "The Statue of Zeus",
        objectType: ObjectType.Wonder,
        cost: {
            papyrus: 2,
            brick: 1,
            wood: 1,
            stone: 1
        },
        vp: 3,
        effects: [
            {
                effectType: EffectType.DestroyCard,
                attribute: CardType.ProductionBrown
            },
            {
                effectType: EffectType.GainShields,
                value: 1
            }
        ]
    },
    {
        id: 11,
        name: "The Temple of Artemis",
        objectType: ObjectType.Wonder,
        cost: {
            papyrus: 1,
            glass: 1,
            stone: 1,
            wood: 1
        },
        effects: [
            {
                effectType: EffectType.GainCoins,
                value: 12
            },
            {
                effectType: EffectType.ExtraTurn
            }
        ]
    },
    {
        id: 12,
        name: "Lumber Yard",
        objectType: ObjectType.Age1,
        cardType: CardType.ProductionBrown,
        production: [
            Resource.Wood
        ],
    },
    {
        id: 13,
        name: "Logging Camp",
        objectType: ObjectType.Age1,
        cardType: CardType.ProductionBrown,
        production: [
            Resource.Wood
        ],
        cost: {
            coins: 1
        }
    },
    {
        id: 14,
        name: "Clay Pool",
        objectType: ObjectType.Age1,
        cardType: CardType.ProductionBrown,
        production: [
            Resource.Brick
        ],
    },
    {
        id: 15,
        name: "Clay Pit",
        objectType: ObjectType.Age1,
        cardType: CardType.ProductionBrown,
        production: [
            Resource.Brick
        ],
        cost: {
            coins: 1
        }
    },
    {
        id: 16,
        name: "Quarry",
        objectType: ObjectType.Age1,
        cardType: CardType.ProductionBrown,
        production: [
            Resource.Stone
        ]
    },
    {
        id: 17,
        name: "Stone Pit",
        objectType: ObjectType.Age1,
        cardType: CardType.ProductionBrown,
        production: [
            Resource.Stone
        ],
        cost: {
            coins: 1
        }
    },
    {
        id: 18,
        name: "Glassworks",
        objectType: ObjectType.Age1,
        cardType: CardType.ProductionGrey,
        production: [
            Resource.Glass
        ],
        cost: {
            coins: 1
        }
    },
    {
        id: 19,
        name: "Press",
        objectType: ObjectType.Age1,
        cardType: CardType.ProductionGrey,
        production: [
            Resource.Papyrus
        ],
        cost: {
            coins: 1
        }
    },
    {
        id: 20,
        name: "Guard Tower",
        objectType: ObjectType.Age1,
        cardType: CardType.Military,
        effects: [
            {
                effectType: EffectType.GainShields,
                value: 1
            }
        ]
    },
    {
        id: 21,
        name: "Workshop",
        objectType: ObjectType.Age1,
        cardType: CardType.Science,
        cost: {
            papyrus: 1
        },
        science: Science.Level,
        vp: 1
    },
    {
        id: 22,
        name: "Apothecary",
        objectType: ObjectType.Age1,
        cardType: CardType.Science,
        cost: {
            glass: 1
        },
        science: Science.Wheel,
        vp: 1,
    },
    {
        id: 23,
        name: "Stone Reserve",
        objectType: ObjectType.Age1,
        cardType: CardType.Commercial,
        trade: [
            {
                resource: Resource.Stone,
                cost: 1
            }
        ],
        cost: {
            coins: 3
        }
    },
    {
        id: 24,
        name: "Clay Reserve",
        objectType: ObjectType.Age1,
        cardType: CardType.Commercial,
        trade: [
            {
                resource: Resource.Brick,
                cost: 1
            }
        ],
        cost: {
            coins: 3
        }
    },
    {
        id: 25,
        name: "Wood Reserve",
        objectType: ObjectType.Age1,
        cardType: CardType.Commercial,
        trade: [
            {
                resource: Resource.Wood,
                cost: 1
            }
        ],
        cost: {
            coins: 3
        }
    },
    {
        id: 26,
        name: "Stable",
        objectType: ObjectType.Age1,
        cardType: CardType.Military,
        effects: [
            {
                effectType: EffectType.GainShields,
                value: 1
            }
        ],
        cost: {
            wood: 1
        },
        link: Link.ShoeM
    },
    {
        id: 27,
        name: "Garrison",
        objectType: ObjectType.Age1,
        cardType: CardType.Military,
        effects: [
            {
                effectType: EffectType.GainShields,
                value: 1
            }
        ],
        cost: {
            brick: 1
        },
        link: Link.SwordM
    },
    {
        id: 28,
        name: "Stable",
        objectType: ObjectType.Age1,
        cardType: CardType.Military,
        effects: [
            {
                effectType: EffectType.GainShields,
                value: 1
            }
        ],
        cost: {
            coins: 2
        },
        link: Link.TowerM
    },
    {
        id: 29,
        name: "Scriptorium",
        objectType: ObjectType.Age1,
        cardType: CardType.Science,
        science: Science.Pen,
        cost: {
            coins: 2
        },
        link: Link.BookS
    },

    {
        id: 30,
        name: "Pharmacist",
        objectType: ObjectType.Age1,
        cardType: CardType.Science,
        science: Science.Mortar,
        cost: {
            coins: 2
        },
        link: Link.GearS
    },
    {
        id: 31,
        name: "Theater",
        objectType: ObjectType.Age1,
        cardType: CardType.Civilian,
        vp: 3,
        link: Link.MaskV
    },
    {
        id: 32,
        name: "Altar",
        objectType: ObjectType.Age1,
        cardType: CardType.Civilian,
        vp: 3,
        link: Link.MoonV
    },
    {
        id: 33,
        name: "Baths",
        objectType: ObjectType.Age1,
        cardType: CardType.Civilian,
        vp: 3,
        link: Link.DropV,
        cost: {
            stone: 1
        }
    },
    {
        id: 34,
        name: "Tavern",
        objectType: ObjectType.Age1,
        cardType: CardType.Commercial,
        effects: [
            {
                effectType: EffectType.GainCoins,
                value: 4
            }
        ],
        link: Link.AmphoraC
    },
    {
        id: 35,
        name: "Sawmill",
        objectType: ObjectType.Age2,
        cardType: CardType.ProductionBrown,
        production: [
            Resource.Wood,
            Resource.Wood
        ],
        cost: {
            coins: 2
        }
    },
    {
        id: 36,
        name: "Brickyard",
        objectType: ObjectType.Age2,
        cardType: CardType.ProductionBrown,
        production: [
            Resource.Brick,
            Resource.Brick
        ],
        cost: {
            coins: 2
        }
    },
    {
        id: 37,
        name: "Shelf Quarry",
        objectType: ObjectType.Age2,
        cardType: CardType.ProductionBrown,
        production: [
            Resource.Stone,
            Resource.Stone
        ],
        cost: {
            coins: 2
        }
    },
    {
        id: 38,
        name: "Glassblower",
        objectType: ObjectType.Age2,
        cardType: CardType.ProductionGrey,
        production: [
            Resource.Glass
        ]
    },
    {
        id: 39,
        name: "Drying Room",
        objectType: ObjectType.Age2,
        cardType: CardType.ProductionGrey,
        production: [
            Resource.Papyrus
        ]
    },
    {
        id: 40,
        name: "Walls",
        objectType: ObjectType.Age2,
        cardType: CardType.Military,
        effects: [
            {
                effectType: EffectType.GainShields,
                value: 2
            }
        ],
        cost: {
            stone: 2
        }
    },
    {
        id: 41,
        name: "Forum",
        objectType: ObjectType.Age2,
        cardType: CardType.Commercial,
        makesOneOf: [
            [
                Resource.Glass,
                Resource.Papyrus
            ]
        ],
        cost: {
            coins: 3,
            brick: 1
        }
    },
    {
        id: 42,
        name: "Caravansery",
        objectType: ObjectType.Age2,
        cardType: CardType.Commercial,
        makesOneOf: [
            [
                Resource.Wood,
                Resource.Stone,
                Resource.Brick
            ]
        ],
        cost: {
            coins: 2,
            glass: 1,
            papyrus: 1
        }
    },
    {
        id: 43,
        name: "Customs House",
        objectType: ObjectType.Age2,
        cardType: CardType.Commercial,
        trade: [
            {
                resource: Resource.Papyrus,
                cost: 1
            },
            {
                resource: Resource.Glass,
                cost: 1
            }
        ],
        cost: {
            coins: 4
        }
    },
    {
        id: 44,
        name: "Courthouse",
        objectType: ObjectType.Age2,
        cardType: CardType.Civilian,
        vp: 5,
        cost: {
            wood: 2,
            glass: 1
        }
    },
    {
        id: 45,
        name: "Horse Breeders",
        objectType: ObjectType.Age2,
        cardType: CardType.Military,
        effects: [
            {
                effectType: EffectType.GainShields,
                value: 1
            }
        ],
        cost: {
            brick: 1,
            wood: 1,
            link: Link.ShoeM
        }
    },
    {
        id: 46,
        name: "Barracks",
        objectType: ObjectType.Age2,
        cardType: CardType.Military,
        effects: [
            {
                effectType: EffectType.GainShields,
                value: 1
            }
        ],
        cost: {
            coins: 3,
            link: Link.SwordM
        }
    },
    {
        id: 47,
        name: "Archery Range",
        objectType: ObjectType.Age2,
        cardType: CardType.Military,
        effects: [
            {
                effectType: EffectType.GainShields,
                value: 2
            }
        ],
        cost: {
            stone: 1,
            wood: 1,
            papyrus: 1
        },
        link: Link.TargetM
    },
    {
        id: 48,
        name: "Parade Ground",
        objectType: ObjectType.Age2,
        cardType: CardType.Military,
        effects: [
            {
                effectType: EffectType.GainShields,
                value: 2
            }
        ],
        cost: {
            brick: 2,
            glass: 1
        },
        link: Link.HelmM
    },
    {
        id: 49,
        name: "Library",
        objectType: ObjectType.Age2,
        cardType: CardType.Science,
        science: Science.Pen,
        vp: 2,
        cost: {
            stone: 1,
            wood: 1,
            glass: 1,
            link: Link.BookS
        }
    },
    {
        id: 50,
        name: "Dispensary",
        objectType: ObjectType.Age2,
        cardType: CardType.Science,
        science: Science.Mortar,
        vp: 2,
        cost: {
            brick: 2,
            stone: 1,
            link: Link.GearS
        }
    },
    {
        id: 51,
        name: "School",
        objectType: ObjectType.Age2,
        cardType: CardType.Science,
        science: Science.Wheel,
        vp: 1,
        cost: {
            wood: 1,
            papyrus: 2
        },
        link: Link.LyreS
    },
    {
        id: 52,
        name: "Laboratory",
        objectType: ObjectType.Age2,
        cardType: CardType.Science,
        science: Science.Level,
        vp: 1,
        cost: {
            wood: 1,
            glass: 2
        },
        link: Link.LampS
    },
    {
        id: 53,
        name: "Statue",
        objectType: ObjectType.Age2,
        cardType: CardType.Civilian,
        vp: 4,
        cost: {
            brick: 2,
            link: Link.MaskV
        },
        link: Link.ColumnV
    },
    {
        id: 54,
        name: "Temple",
        objectType: ObjectType.Age2,
        cardType: CardType.Civilian,
        vp: 4,
        cost: {
            wood: 1,
            papyrus: 1,
            link: Link.MoonV
        },
        link: Link.SunV
    },
    {
        id: 55,
        name: "Aqueduct",
        objectType: ObjectType.Age2,
        cardType: CardType.Civilian,
        vp: 5,
        cost: {
            stone: 3,
            link: Link.DropV
        }
    },
    {
        id: 56,
        name: "Rostrum",
        objectType: ObjectType.Age2,
        cardType: CardType.Civilian,
        vp: 4,
        cost: {
            stone: 1,
            wood: 1
        },
        link: Link.TempleV
    },
    {
        id: 57,
        name: "Brewery",
        objectType: ObjectType.Age2,
        cardType: CardType.Commercial,
        effects: [
            {
                effectType: EffectType.GainCoins,
                value: 6
            }
        ],
        link: Link.BarrelC
    },
    {
        id: 58,
        name: "Arsenal",
        objectType: ObjectType.Age3,
        cardType: CardType.Military,
        effects: [
            {
                effectType: EffectType.GainShields,
                value: 3
            }
        ],
        cost: {
            brick: 3,
            wood: 2
        }
    },
    {
        id: 59,
        name: "Pretorium",
        objectType: ObjectType.Age3,
        cardType: CardType.Military,
        effects: [
            {
                effectType: EffectType.GainShields,
                value: 3
            }
        ],
        cost: {
            coins: 8
        }
    },
    {
        id: 60,
        name: "Academy",
        objectType: ObjectType.Age3,
        cardType: CardType.Science,
        science: Science.Tablet,
        vp: 3,
        cost: {
            stone: 1,
            wood: 1,
            glass: 2
        }
    },
    {
        id: 61,
        name: "Study",
        objectType: ObjectType.Age3,
        cardType: CardType.Science,
        science: Science.Tablet,
        vp: 3,
        cost: {
            wood: 2,
            glass: 1,
            papyrus: 1
        }
    },
    {
        id: 62,
        name: "Chamber of Commerce",
        objectType: ObjectType.Age3,
        cardType: CardType.Commercial,
        vp: 3,
        effects: [
            {
                effectType: EffectType.CoinsPerCardType,
                attribute: CardType.ProductionGrey,
                value: 3
            }
        ],
        cost: {
            papyrus: 2
        }
    },
    {
        id: 63,
        name: "Port",
        objectType: ObjectType.Age3,
        cardType: CardType.Commercial,
        vp: 3,
        effects: [
            {
                effectType: EffectType.CoinsPerCardType,
                attribute: CardType.ProductionBrown,
                value: 2
            }
        ],
        cost: {
            papyrus: 1,
            wood: 1,
            glass: 1
        }
    },
    {
        id: 64,
        name: "Armory",
        objectType: ObjectType.Age3,
        cardType: CardType.Commercial,
        vp: 3,
        effects: [
            {
                effectType: EffectType.CoinsPerCardType,
                attribute: CardType.Military,
                value: 1
            }
        ],
        cost: {
            stone: 2,
            glass: 1
        }
    },
    {
        id: 65,
        name: "Palace",
        objectType: ObjectType.Age3,
        cardType: CardType.Civilian,
        vp: 7,
        cost: {
            brick: 1,
            stone: 1,
            wood: 1,
            glass: 2
        }
    },
    {
        id: 66,
        name: "Town Hall",
        objectType: ObjectType.Age3,
        cardType: CardType.Civilian,
        vp: 7,
        cost: {
            stone: 3,
            wood: 2
        }
    },
    {
        id: 67,
        name: "Obelisk",
        objectType: ObjectType.Age3,
        cardType: CardType.Civilian,
        vp: 5,
        cost: {
            stone: 2,
            glass: 1
        }
    },
    {
        id: 68,
        name: "Fortifications",
        objectType: ObjectType.Age3,
        cardType: CardType.Military,
        effects: [
            {
                effectType: EffectType.GainShields,
                value: 2
            }
        ],
        cost: {
            stone: 2,
            brick: 1,
            papyrus: 1,
            link: Link.TowerM
        }
    },
    {
        id: 69,
        name: "Siege Workshop",
        objectType: ObjectType.Age3,
        cardType: CardType.Military,
        effects: [
            {
                effectType: EffectType.GainShields,
                value: 2
            }
        ],
        cost: {
            wood: 3,
            glass: 1,
            link: Link.TargetM
        }
    },
    {
        id: 70,
        name: "Circus",
        objectType: ObjectType.Age3,
        cardType: CardType.Military,
        effects: [
            {
                effectType: EffectType.GainShields,
                value: 2
            }
        ],
        cost: {
            brick: 2,
            stone: 2,
            link: Link.HelmM
        }
    },
    {
        id: 71,
        name: "University",
        objectType: ObjectType.Age3,
        cardType: CardType.Science,
        science: Science.Orrery,
        vp: 2,
        cost: {
            brick: 1,
            glass: 1,
            papyrus: 1,
            link: Link.LyreS
        }
    },
    {
        id: 72,
        name: "Observatory",
        objectType: ObjectType.Age3,
        cardType: CardType.Science,
        science: Science.Orrery,
        vp: 2,
        cost: {
            stone: 1,
            papyrus: 2,
            link: Link.LampS
        }
    },
    {
        id: 73,
        name: "Gardens",
        objectType: ObjectType.Age3,
        cardType: CardType.Civilian,
        vp: 6,
        cost: {
            brick: 2,
            wood: 2,
            link: Link.ColumnV
        }
    },
    {
        id: 74,
        name: "Pantheon",
        objectType: ObjectType.Age3,
        cardType: CardType.Civilian,
        vp: 6,
        cost: {
            brick: 1,
            wood: 1,
            papyrus: 2,
            link: Link.SunV
        }
    },
    {
        id: 75,
        name: "Senate",
        objectType: ObjectType.Age3,
        cardType: CardType.Civilian,
        vp: 5,
        cost: {
            brick: 2,
            stone: 1,
            papyrus: 1,
            link: Link.TempleV
        }
    },
    {
        id: 76,
        name: "Lighthouse",
        objectType: ObjectType.Age3,
        cardType: CardType.Commercial,
        vp: 3,
        effects: [
            {
                effectType: EffectType.CoinsPerCardType,
                attribute: CardType.Commercial,
                value: 1
            }
        ],
        cost: {
            brick: 2,
            glass: 1,
            link: Link.AmphoraC
        }
    },
    {
        id: 77,
        name: "Arena",
        objectType: ObjectType.Age3,
        cardType: CardType.Commercial,
        vp: 3,
        effects: [
            {
                effectType: EffectType.CoinsPerWonder,
                value: 2
            }
        ],
        cost: {
            brick: 1,
            stone: 1,
            wood: 1,
            link: Link.BarrelC
        }
    },
    {
        id: 78,
        name: "Merchants Guild",
        objectType: ObjectType.Guild,
        cardType: CardType.Guild,
        vpCalc: {
            vpCalcType: VpCalcType.PerCardTypeMax,
            value: 1,
            attribute: CardType.Commercial
        },
        effects: [
            {
                effectType: EffectType.CoinsPerCardTypeMax,
                value: 1,
                attribute: CardType.Commercial
            }
        ],
        cost: {
            brick: 1,
            wood: 1,
            glass: 1,
            papyrus: 1
        }
    },
    {
        id: 79,
        name: "Shipowners Guild",
        objectType: ObjectType.Guild,
        cardType: CardType.Guild,
        vpCalc: {
            vpCalcType: VpCalcType.PerProductionTypeMax,
            value: 1
        },
        effects: [
            {
                effectType: EffectType.CoinsPerProductionTypeMax,
                value: 1
            }
        ],
        cost: {
            brick: 1,
            stone: 1,
            glass: 1,
            papyrus: 1
        }
    },
    {
        id: 80,
        name: "Builders Guild",
        objectType: ObjectType.Guild,
        cardType: CardType.Guild,
        vpCalc: {
            vpCalcType: VpCalcType.PerWonderMax,
            value: 2
        },
        cost: {
            stone: 2,
            brick: 1,
            wood: 1,
            glass: 1
        }
    },
    {
        id: 81,
        name: "Magistrates Guild",
        objectType: ObjectType.Guild,
        cardType: CardType.Guild,
        vpCalc: {
            vpCalcType: VpCalcType.PerCardTypeMax,
            value: 1,
            attribute: CardType.Civilian
        },
        effects: [
            {
                effectType: EffectType.CoinsPerCardTypeMax,
                value: 1,
                attribute: CardType.Civilian
            }
        ],
        cost: {
            wood: 2,
            brick: 1,
            papyrus: 1
        }
    },
    {
        id: 82,
        name: "Scientists Guild",
        objectType: ObjectType.Guild,
        cardType: CardType.Guild,
        vpCalc: {
            vpCalcType: VpCalcType.PerCardTypeMax,
            value: 1,
            attribute: CardType.Science
        },
        effects: [
            {
                effectType: EffectType.CoinsPerCardTypeMax,
                value: 1,
                attribute: CardType.Science
            }
        ],
        cost: {
            brick: 2,
            wood: 2
        }
    },
    {
        id: 83,
        name: "Moneylenders Guild",
        objectType: ObjectType.Guild,
        cardType: CardType.Guild,
        vpCalc: {
            vpCalcType: VpCalcType.Per3CoinsMax
        },
        cost: {
            stone: 2,
            wood: 2
        }
    },
    {
        id: 84,
        name: "Tacticians Guild",
        objectType: ObjectType.Guild,
        cardType: CardType.Guild,
        vpCalc: {
            vpCalcType: VpCalcType.PerCardTypeMax,
            value: 1,
            attribute: CardType.Military
        },
        effects: [
            {
                effectType: EffectType.CoinsPerCardTypeMax,
                value: 1,
                attribute: CardType.Military
            }
        ],
        cost: {
            stone: 2,
            brick: 1,
            papyrus: 1
        }
    },
    {
        id: 85,
        name: "Agriculture",
        objectType: ObjectType.Token,
        vp: 4,
        effects: [
            {
                effectType: EffectType.GainCoins,
                value: 6
            }
        ]
    },
    {
        id: 86,
        name: "Architecture",
        objectType: ObjectType.Token,
        effects: [
            {
                effectType: EffectType.GainArchitectureRule
            }
        ]
    },
    {
        id: 87,
        name: "Economy",
        objectType: ObjectType.Token,
        effects: [
            {
                effectType: EffectType.GainEconomyRule
            }
        ]
    },
    {
        id: 88,
        name: "Law",
        objectType: ObjectType.Token,
        science: Science.Scale
    },
    {
        id: 89,
        name: "Masonry",
        objectType: ObjectType.Token,
        effects: [
            {
                effectType: EffectType.GainMasonryRule
            }
        ]
    },
    {
        id: 90,
        name: "Mathematics",
        objectType: ObjectType.Token,
        vpCalc: {
            vpCalcType: VpCalcType.PerTokens,
            value: 3
        }
    },
    {
        id: 91,
        name: "Philosophy",
        objectType: ObjectType.Token,
        vp: 7
    },
    {
        id: 92,
        name: "Strategy",
        objectType: ObjectType.Token,
        effects: [
            {
                effectType: EffectType.GainStrategyRule
            }
        ]
    },
    {
        id: 93,
        name: "Theology",
        objectType: ObjectType.Token,
        effects: [
            {
                effectType: EffectType.GainTheologyRule
            }
        ]
    },
    {
        id: 94,
        name: "Urbanism",
        objectType: ObjectType.Token,
        effects: [
            {
                effectType: EffectType.GainUrbanismRule
            }
        ]
    },
]

