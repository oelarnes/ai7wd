export enum Player {
    Zero,
    One
}

export enum Deploy {
    Construct,
    Tuck,
    Discard
}

export enum CardType {
    ProductionBrown,
    ProductionGrey,
    Science,
    Commercial,
    Military,
    Civilian,
    Guild
}

export enum Resource {
    Brick,
    Stone,
    Wood,
    Papyrus,
    Glass
}

export enum Science {
    Orrery,
    Scale,
    Tablet,
    Mortar,
    Level,
    Pen,
    Wheel
}

export enum EffectType {
    GainCoins,
    DestroyCoins,
    DestroyCard,
    GainShields,
    CheckScience,
    CoinsPerCardType,
    CoinsPerWonder,
    CoinsPerCardTypeMax,
    CoinsPerProductionTypeMax,
    ExtraTurn,
    OneTokenFromBox,
    ConstructFromDiscard,
    GainArchitectureRule,
    GainEconomyRule,
    GainStrategyRule,
    GainTheologyRule,
    GainMasonryRule,
    GainUrbanismRule
}

export interface Effect {
    effectType: EffectType,
    value?: number,
    attribute?: number
}

export enum Link {
    AmphoraC,
    BarrelC,
    MaskV,
    TempleV,
    SunV,
    DropV,
    ColumnV,
    MoonV,
    TargetM,
    HelmM,
    ShoeM,
    SwordM,
    TowerM,
    LyreS,
    GearS,
    BookS,
    LampS
}

export interface Cost {
    coins?: number,
    brick?: number,
    wood?: number,
    stone?: number,
    papyrus?: number,
    glass?: number,
    link?: Link,
}

export interface Trade {
    resource: Resource,
    cost: number
}

export enum VpCalcType {
    PerCardTypeMax,
    PerProductionTypeMax,
    PerTokens,
    PerWonderMax,
    Per3CoinsMax
}

export interface VpCalc {
    vpCalcType: VpCalcType,
    value?: number,
    attribute?: number
}

export enum ObjectType {
    Wonder = 'wonder',
    Age1 = 'age1',
    Age2 = 'age2',
    Age3 = 'age3',
    Guild = 'guild',
    Token = 'token'
}

export interface Object {
    id: number,
    name: string,
    objectType: ObjectType,
    cardType?: CardType,
    cost?: Cost,
    vp?: number,
    vpCalc?: VpCalc,
    production?: Resource[],
    trade?: Trade[],
    makesOneOf?: Resource[][],
    science?: Science,
    effects?: Effect[],
    link?: Link
}

export interface DisplayItemSpec {
    position: number,
    faceUp: boolean,
    children: number[]
}

export interface DisplayItem extends DisplayItemSpec {
    cardId: number | ObjectType
}

export enum ChoiceType {
    ChoosePlayer,
    ChooseWonderFromDisplay,
    ChooseWonderForTuck,
    ChooseCardFromDisplay,
    DeployCard,
    ObjectEffectChoice,
    NoChoice,
}

export interface Choice {
    choiceType: ChoiceType,
    choices: number[],
    sourceObject?: number,
    effectIndex?: number,
}

export interface GameStateRaw {
    randomSeed: number,
    gameWinner?: Player,
    initiative?: Player,
    stage: ObjectType,
    wonderDisplay: number[],
    cardDisplay: DisplayItem[],
    choice: Choice,
    p0Tableau: number[], // completed wonders and tokens in tableau
    p1Tableau: number[],
    p0Wonders: number[],
    p1Wonders: number[],
    p0Coins: number,
    p1Coins: number,
    conflictValue: number,
    conflictThresholds: {
        p0l1: boolean,
        p0l3: boolean,
        p0l6: boolean,
        p0loss: boolean,
        p1l1: boolean,
        p1l3: boolean,
        p1l6: boolean,
        p1loss: boolean
    },
    discard: number[],
    tucked: number[], // cards under wonders, don't care about how
    decks: {
        wonder: number[],
        age1: number[],
        age2: number[],
        age3: number[],
        guild: number[],
        token: number[]
    }
    tokenDisplay: number[],
    architectureRulePlayer?: Player,
    economyRulePlayer?: Player,
    strategyRulePlayer?: Player,
    masonryRulePlayer?: Player,
    theologyRulePlayer?: Player,
    urbanismRulePlayer?: Player,
    extraTurn: boolean,
}
