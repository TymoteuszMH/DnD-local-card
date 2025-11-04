import type { IBasicInfo, ICard, IHealth, ISavingThrow, ISkill, IStat } from "./types";

export const checkMinMaxNum = (currentValue: number, value: string, min: number = 0, max?: number) => {
    if(!value)
        return min;

    const newVal = parseInt(value);
    if(newVal < min || (max && newVal > max))
        return currentValue;

    return newVal
}

export const createEmptyCard = (id?: string): ICard => {
    return {
        id: id ?? "",
        basicInfo: initalBasicInfo,
        stats: initialStats,
        passivePerception: 10,
        inspiration: false,
        proficiencyValue: 2,
        savingThrows: initialSavingThrows,
        skills: initialSkills,
        healthInfo: initialHealth,
        weapons: [],
        items: [],
        feats: [],
        proficiencies: []
    }
}

export const initalBasicInfo: IBasicInfo = {
    name: "",
    class: "",
    level: 1,
    race: "",
    background: ""
}

export const initialStats: IStat[] = [
    {type: "STR", value: 0},
    {type: "CON", value: 0},
    {type: "DEX", value: 0},
    {type: "WIS", value: 0},
    {type: "INT", value: 0},
    {type: "CHA", value: 0}
]

export const initialSavingThrows: ISavingThrow[] = [
    {type: "STR", value: 0, proficiency: false},
    {type: "CON", value: 0, proficiency: false},
    {type: "DEX", value: 0, proficiency: false},
    {type: "WIS", value: 0, proficiency: false},
    {type: "INT", value: 0, proficiency: false},
    {type: "CHA", value: 0, proficiency: false}
]

export const initialSkills: ISkill[] = [
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
]

export const initialHealth:IHealth = {
    armorClass: 10,
    initiative: undefined,
    speed: 0,
    healthPoints: 0,
    temporatyHealthPoints: undefined,
    deathSavesFailures: 0,
    deathSavesSuccesses: 0
}