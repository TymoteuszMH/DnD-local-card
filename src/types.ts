/**
 * @param {string} id UUID of card
 */
export interface ICard{
    id: string;
    basicInfo: IBasicInfo;
    stats: IStat[];
    inspiration: boolean;
    proficiencyValue: number;
    savingThrows: ISavingThrow[];
    skills: ISkill[];
    healthInfo: IHealth;
    weapons: IWeapon[];
    items: IItem[];
    feats: IFeat[];
    proficiencies: IProficiency[];
    spellInfo?: ISpellInfo;
    spells?: ISpellList[];
}

export interface IBasicInfo{
    name: string;
    class: string;
    subclass?: string;
    lvl: number;
    race: string;
    background: string;
}

export type statType = "STR"|"DEX"|"CON"|"INT"|"WIS"|"CHA"

export interface IStat{
    type: statType;
    value: number;
}

export interface ISavingThrow{
    type: statType;
    proficiency: boolean;
    value: number;
}

export interface ISkill{
    name: string;
    type: statType;
    proficiency: boolean;
    expertice: boolean;
    value: number;
}

export interface IHealth{
    armorClass: number;
    initiative: number;
    speed: number;
    healthPoints: number;
    temporatyHealthPoints: number;
    deathSavesFailures: number;
    deathSavesSuccesses: number;
}

export interface ICost{
    value: number;
    currency: "Cp"|"Sp"|"Ep"|"Gp"|"Pp";
}

export interface IDamage{
    dice: "d4"|"d6"|"d8"|"d10"|"d12";
    diceNumber: number;
    demageType: "piercing"|"slashing"|"bludgeoning";
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
    proficiency: boolean;
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
    spellType: statType;
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