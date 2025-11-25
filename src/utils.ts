import type { IBasicInfo, ICard, IDice, IHealth, IItem, ISavingThrow, ISkill, IStat, IWeapon, IWeaponDemageType, IStatType, IAttackModifier, ICost, ICurrency } from "./types";

export const checkMinMaxNum = (currentValue?: number, value?: string, min: number = 0, max?: number) => {
    if(!value)
        return undefined;

    const newVal = parseInt(value);
    if(newVal < min || (max && newVal > max))
        return currentValue;

    return newVal
}

export const calculateMod = (atkMod: IAttackModifier, profVal: number, statsObj: Map<IStatType, number>):number|undefined => {
    let mod:number = 0;
    if(atkMod.proficiency){
        mod += profVal;
    }

    const agility = statsObj.get(atkMod.agility)
    if(agility)
        mod += agility;

    if(atkMod.bonus)
        mod += atkMod.bonus;

    return mod !== 0 ? mod : undefined;
}

export const statToObject = (stats: IStat[]): Map<IStatType, number> => {
    const obj: Map<IStatType, number> = new Map();

    stats.forEach(stat => {
        obj.set(stat.type, stat.value ? Math.floor(stat.value / 2 - 5) : 0)
    })

    return obj;
};

export const getMod = (statValue: number) => {
    if(!statValue)
        return 0;
    return Math.floor(statValue / 2 - 5)
}

export const createEmptyCard = (id?: string): ICard => ({
    id: id ?? "",
    basicInfo: initalBasicInfo(),
    stats: initialStats(),
    passivePerception: 10,
    inspiration: false,
    proficiencyValue: 2,
    savingThrows: initialSavingThrows(),
    skills: initialSkills(),
    healthInfo: initialHealth(),
    money: initialMoney(),
    weapons: [],
    items: [],
    feats: [],
    proficiencies: []
})

export const initalBasicInfo = (): IBasicInfo => ({
    name: "",
    class: "",
    level: 1,
    race: "",
    background: ""
})

export const initialStats = (): IStat[] => ([
    {type: "STR", value: undefined},
    {type: "CON", value: undefined},
    {type: "DEX", value: undefined},
    {type: "WIS", value: undefined},
    {type: "INT", value: undefined},
    {type: "CHA", value: undefined}
])

export const initialSavingThrows = (): ISavingThrow[] => ([
    {type: "STR", value: 0, proficiency: false},
    {type: "CON", value: 0, proficiency: false},
    {type: "DEX", value: 0, proficiency: false},
    {type: "WIS", value: 0, proficiency: false},
    {type: "INT", value: 0, proficiency: false},
    {type: "CHA", value: 0, proficiency: false}
])

export const initialSkills = (): ISkill[] => ([
    {type: "STR", name: "Athletics", value: 0, proficiency: false, expertice: false},
    {type: "DEX", name: "Acrobatics", value: 0, proficiency: false, expertice: false},
    {type: "DEX", name: "Sleight of Hand", value: 0, proficiency: false, expertice: false},
    {type: "DEX", name: "Stealth", value: 0, proficiency: false, expertice: false},
    {type: "INT", name: "Arcana", value: 0, proficiency: false, expertice: false},
    {type: "INT", name: "History", value: 0, proficiency: false, expertice: false},
    {type: "INT", name: "Investigation", value: 0, proficiency: false, expertice: false},
    {type: "INT", name: "Nature", value: 0, proficiency: false, expertice: false},
    {type: "INT", name: "Religion", value: 0, proficiency: false, expertice: false},
    {type: "WIS", name: "Animal Handling", value: 0, proficiency: false, expertice: false},
    {type: "WIS", name: "Insight", value: 0, proficiency: false, expertice: false},
    {type: "WIS", name: "Medicine", value: 0, proficiency: false, expertice: false},
    {type: "WIS", name: "Perception", value: 0, proficiency: false, expertice: false},
    {type: "WIS", name: "Survival", value: 0, proficiency: false, expertice: false},
    {type: "CHA", name: "Deception", value: 0, proficiency: false, expertice: false},
    {type: "CHA", name: "Intimidation", value: 0, proficiency: false, expertice: false},
    {type: "CHA", name: "Performance", value: 0, proficiency: false, expertice: false},
    {type: "CHA", name: "Persuasion", value: 0, proficiency: false, expertice: false},
])

export const initialHealth = ():IHealth => ({
    armorClass: 10,
    initiative: undefined,
    speed: 0,
    healthPoints: 0,
    temporatyHealthPoints: undefined,
    deathSavesFailures: undefined,
    deathSavesSuccesses: undefined
})

export const initialMoney = ():ICost[] => currencies.map((currency) => ({value: 0, currency} as ICost))

export const initialItem = (): IItem => ({
    name: "",
    cost: {value: 0, currency: "Gp"},
    weight: {weight: 0, measure: ""}
})

export const initialAttackMod = (): IAttackModifier => ({
    agility: "STR",
    proficiency: false,
    bonus: undefined
})

export const initailWeapon = (): IWeapon => ({
    ...initialItem(),
    type: "melee",
    attackModifier: initialAttackMod(),
    damage: {dice: "d4", diceNumber: 1, type: "piercing"}
})

export const currencies:ICurrency[] = ["Cp","Sp","Ep","Gp","Pp"]
export const weaponTypes = ["melee", "martial", "ranged"]
export const dices: IDice[] = ["d4","d6","d8","d10","d12","d20"];
export const stats: IStatType[] = ["STR", "DEX", "CON", "WIS", "INT", "CHA"]
export const weaponDemageTypes: IWeaponDemageType[] = ["bludgeoning", "piercing", "slashing"]