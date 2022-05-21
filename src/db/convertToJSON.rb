require 'csv'
require 'json'

db = CSV.parse(File.read(File.join(File.dirname(__FILE__), '/msfList.csv')), headers: true);
puts db.length

json = []

db.each do |char|

    tags = char['tags'] ? char['tags'].split(', ') : [] 
    teams  = char['teams'] ? char['teams'].split(', ') : []
    synergies = char['synergies'] ? char['synergies'].split(', ') : []

    json.push({
        name: char['character'],
        tags: tags,
        teams: teams,
        synergies: synergies,
        goals: {
            tier: char['goal'].to_i },
        stars: char['stars'].to_i,
        redStars: char['redStars'].to_i,
        shards: char['shards'].to_i,
        power: char['power'].to_i,
        level: char['level'].to_i,
        gear: {
            tier: char['gear'].to_i },
        abilities: {
            basic: char['basic'].to_i, 
            special: char['special'].to_i, 
            ultimate: char['ultimate'].to_i,
            passive: char['passive'].to_i },
        iso: {
            tier: char['isoTier'].to_i,
            armor: char['isoArmor'].to_i,
            resist: char['isoResist'].to_i,
            health: char['isoHealth'].to_i,
            focus: char['isoFocus'].to_i,
            damage: char['isoDamage'].to_i,
            class: char['isoClass'] }
    })  
end

File.open(File.join(File.dirname(__FILE__), '/msfDB.json'), 'w') { |file| file.write(json.to_json) }
