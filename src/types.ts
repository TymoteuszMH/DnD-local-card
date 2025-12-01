/**
 * @param {string} id card's id
 * @param {IBasicInfo} basicInfo info about character
 * @param {IStat[]} stats character's stat
 * @param {boolean} inspiration inspirations status
 * @param {number} proficiencyValue current proficency value
 * @param {ISavingThrow[]} savingThrows list of saving throws
 * @param {ISkill[]} skills list of skills
 * @param {IHealth} healthInfo info about character's health-related stats
 * @param {IWeapon[]} weapons list of weapons
 * @param {IItem[]} items list of items
 * @param {IFeat[]} feats list of feats
 * @param {IProficiency[]} proficiencies list of proficiencies
 * @param {ISpellInfo | undefined} spellInfo info about character's spell-related stats 
 * @param {ISpellList[] | undefined} spells spells list
 */
export interface ICard{
    id: string;
    basicInfo: IBasicInfo;
    stats: IStat[];
    inspiration: boolean;
    proficiencyValue: number;
    passivePerception: number;
    savingThrows: ISavingThrow[];
    skills: ISkill[];
    healthInfo: IHealth;
    weapons: IWeapon[];
    items: IItem[];
    money: ICost[];
    feats: IFeat[];
    proficiencies: IProficiency[];
    spellInfo?: ISpellInfo;
    spells?: ISpellList[];
}

/**
 * @param {string} name character's name
 * @param {string} class class of character
 * @param {string | undefined} subclass subclass of class
 * @param {number} level character's current level
 * @param {string} race character's race
 * @param {string} background character's background
 */
export interface IBasicInfo{
    name: string;
    classes: IClass[];
    subclass?: string;
    race: string;
    background: string;
}

export interface IClass{
    class: string;
    level: number;
}

/**
 * type of stat: strength, dextility, constitution, inteligence, wisdom, charisma
 */
export type IStatType = "STR"|"DEX"|"CON"|"INT"|"WIS"|"CHA"

/**
 * @param {IStatType} type type of stat
 * @param {number} value stat's current value (without proficiency bonus)
 */
export interface IStat{
    type: IStatType;
    value?: number;
}

/**
 * @param {IStatType} type type of saving throw
 * @param {boolean} proficency whether character has proficiency in saving throw or not
 * @param {number} value current ST value (without proficiency bonus)
 */
export interface ISavingThrow{
    type: IStatType;
    proficiency: boolean;
    value: number;
}

export interface ISkill{
    name: string;
    type: IStatType;
    proficiency: boolean;
    expertice: boolean;
    value: number;
}

export interface IHealth{
    armorClass: number;
    initiative?: number;
    speed: number;
    healthPoints?: number;
    temporatyHealthPoints?: number;
    deathSavesFailures?: number;
    deathSavesSuccesses?: number;
}

export type ICurrency = "Cp"|"Sp"|"Ep"|"Gp"|"Pp";

export interface ICost{
    value: number;
    currency: ICurrency;
}

export type IDice = "d4"|"d6"|"d8"|"d10"|"d12"|"d20"
export type IWeaponDemageType = "piercing"|"slashing"|"bludgeoning";
export type IDemageType = IWeaponDemageType|"acid"|"cold"|"fire"|"force"|"lightning"|"necrotic"|"poison"|"psychic"|"radiant"|"thunder"

export interface IDamage{
    dice: IDice;
    diceNumber: number;
    bonus?: number;
    type: IWeaponDemageType
}

export interface IAttackModifier{
    agility: IStatType;
    proficiency: boolean;
    bonus?: number;
}

export interface IWeight{
    weight: number;
    measure: string;
}

export interface IRange{
    minRange?: number;
    maxRange: number;
}

export interface IProperty{
    name: string;
    amount?: number;
    demage?: IDamage;
    range?: IRange;
}

export interface IItem{
    name: string;
    description?: string;
    cost: ICost;
    weight: IWeight;
    properties?: IProperty[];
    amount?: number;
}

export interface IWeapon extends IItem{
    type: "melee"|"ranged"|"martial";
    attackModifier: IAttackModifier;
    damage: IDamage;
}

export interface IArmor extends IItem{
    type: "light"|"medium"|"heavy";
    armorClass: number;
    stealthDisadvantage: boolean;
    minStrength?: number;
}

export interface IFeat{
    name: string;
    description?: string;
}

export interface IProficiency{
    name: string;
    description?: string;
}

export interface ISpellInfo{
    spellType: IStatType;
    spellSaveDC: number;
    spellAtackModifier: number;
}

export interface ISpellList{
    level: number | "Cantrip";
    spellSlots: number;
    spellStolsExpiried: number;
    spells: ISpell[]
}

export interface ISpell{
    ready: boolean;
    name: string;
    description?: string;
}