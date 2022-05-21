export default function calculateGoalLevel(character) {

    let goalLevel = {
        tier: 6,
        level: 0,
        gear: 0,
        iso: 0,
        basic: 0,
        special: 0,
        ultimate: 0,
        passive: 0,
    };
    
    let goals = {
        level: [character.level, 0.5, 24.5, 37.5, 49.5, 59.5, 64.5],
        gear: [character.gear.tier, 0.5, 3.5, 4.5, 7.5, 9.5, 10.5],
        iso: [character.iso.tier, 0.5, 0.5, 0.5, 2.5, 2.5, 4.5],
        basic: [character.abilities.basic, 0.5, 2.5, 3.5, 4.5, 5.5, 5.5],
        special: [character.abilities.special, 0.5, 1.5, 3.5, 4.5, 5.5, 5.5],
        ultimate: [character.abilities.ultimate, -1, 1.5, 2.5, 4.5, 5.5, 5.5],
        passive: [character.abilities.passive, -1, 0.5, 1.5, 2.5, 3.5, 3.5]
    }

    goals.level.sort(function(a, b) {return a-b});
    goalLevel.level = goals.level.indexOf(character.level);
    if(goalLevel.tier > goalLevel.level) { goalLevel.tier = goalLevel.level }

    goals.gear.sort(function(a, b) {return a-b});
    goalLevel.gear = goals.gear.indexOf(character.gear.tier);
    if(goalLevel.tier > goalLevel.gear) { goalLevel.tier = goalLevel.gear }

    goals.iso.sort(function(a, b) {return a-b});
    goalLevel.iso = goals.iso.indexOf(character.iso.tier);
    if(goalLevel.tier > goalLevel.iso) { goalLevel.tier = goalLevel.iso }

    goals.basic.sort(function(a, b) {return a-b});
    goalLevel.basic = goals.basic.indexOf(character.abilities.basic);
    if(goalLevel.tier > goalLevel.basic) { goalLevel.tier = goalLevel.basic }

    goals.special.sort(function(a, b) {return a-b});
    goalLevel.special = goals.special.indexOf(character.abilities.special);
    if(goalLevel.tier > goalLevel.special) { goalLevel.tier = goalLevel.special }

    if(!character.tags.includes('Minion')) {
        goals.ultimate.sort(function(a, b) {return a-b});
        goalLevel.ultimate = goals.ultimate.indexOf(character.abilities.ultimate);
        if(goalLevel.tier > goalLevel.ultimate) { goalLevel.tier = goalLevel.ultimate }
    }

    goals.passive.sort(function(a, b) {return a-b});
    goalLevel.passive = goals.passive.indexOf(character.abilities.passive);
    if(goalLevel.tier > goalLevel.passive) { goalLevel.tier = goalLevel.passive }

    return goalLevel;

}
