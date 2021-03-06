import { BEASTS, NAMES, ISpell, SPELLS, IMultipliers, SPELL_TARGET, MOVING_STATUS } from '../models';


export const MOVING_QUERY = [
    MOVING_STATUS.WAITING,
    MOVING_STATUS.PLAYER,
    MOVING_STATUS.PLAYERS_BEASTS,
    MOVING_STATUS.CPU,
    MOVING_STATUS.CPUS_BEASTS,
];

export enum ATTACK_METHOD {
    HIT = 'hit',
    SPELL = 'spell',
    SKIP = 'skip',
}

/**
 * @description Чтобы подставлять в конструктор класса Beast.
 */
export const BEASTS_DATA = {
    [ BEASTS.SKELETON ]: {
        type: BEASTS.SKELETON,
        dps: 100,
        hp: 300,
    }
};

export const SPELL_FEAR: ISpell = {
    spellName: SPELLS.FEAR,
    duration: 3,
    target: SPELL_TARGET.ENEMY,
    canNotAttacks: true,
    addHP: false,
    reduceHP: false,
    callBeast: false,
    coolDown: 60,
};

export const SPELL_FILTH: ISpell = {
    spellName: SPELLS.FILTH,
    duration: 1,
    target: SPELL_TARGET.ENEMY,
    canNotAttacks: false,
    addHP: false,
    reduceHP: true,
    HPDelta: 200,
    callBeast: false,
    coolDown: 10,
};

export const SPELL_ANCESTRAL_SPIRIT: ISpell = {
    spellName: SPELLS.ANCESTRAL_SPIRIT,
    duration: 1,
    target: SPELL_TARGET.SELF,
    canNotAttacks: false,
    addHP: true,
    reduceHP: false,
    HPDelta: 500,
    callBeast: false,
    coolDown: 10,
};

export const SPELL_REBIRTH: ISpell = {
    spellName: SPELLS.REBIRTH,
    duration: 1,
    target: SPELL_TARGET.SELF,
    canNotAttacks: false,
    addHP: false,
    reduceHP: false,
    callBeast: true,
    coolDown: 10,
    calledBeast: {
        type: BEASTS.SKELETON,
        dps: 100,
        hp: 300,
    }
};

export const ALL_SPELLS: ISpell[] = [
    SPELL_ANCESTRAL_SPIRIT,
    SPELL_FEAR,
    SPELL_FILTH,
    SPELL_REBIRTH
];

export const CHARACTERS_START_DATA = {
    [ NAMES.GULDAN ]: {
        self: NAMES.GULDAN,
        strength: 30,
        agility: 20,
        intellect: 150,
        stamina: 120,
        spells: [
            SPELL_FEAR,
            SPELL_FILTH,
        ],
    },
    [ NAMES.NERZHUL ]: {
        self: NAMES.NERZHUL,
        strength: 40,
        agility: 50,
        intellect: 120,
        stamina: 160,
        spells: [
            SPELL_ANCESTRAL_SPIRIT,
            SPELL_REBIRTH,
        ],
    },
};

export const MULTIPLIERS: IMultipliers = {
    strength: {
        dps: 1.5,
        hp: 2,
        crit: 0,
    },
    agility: {
        dps: 1,
        hp: 0,
        crit: 0.002,
    },
    intellect: {
        dps: 1,
        hp: 0,
        crit: 0.0005,
    },
    stamina: {
        dps: 0,
        hp: 10,
        crit: 0,
    },
};
