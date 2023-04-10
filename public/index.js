var btnTryit = document.querySelector('.btnTryit');
var output = document.querySelector('.output');
var btnGithub = document.getElementById('btnGithub');

btnGithub.onclick = function() {
    window.location.href = `https://github.com/kratosman/go-on-api.git`;
}

btnTryit.addEventListener('click', () => {
    output.innerHTML = `<div class="loader"></div>`
    setTimeout(()=> {
       showResults();
    }, 6000);
})

function showResults() {
        output.textContent = `
    [
        {
            "id": 1,
            "poster_path": "https://static-cdn.jtvnw.net/ttv-boxart/513181_IGDB-285x380.jpg",
            "title": "Genshin Impact",
            "overview": "Genshin Impact is a free-to-play action role-playing game (ARPG) developed and published by miHoYo. Set in the fantasy world of Teyvat, players take on the role of the Traveler, a character searching for their twin sibling, and embark on a journey filled with elemental powers, magical creatures, and ancient secrets. Players can explore an open-world environment, battle hordes of enemies, solve puzzles, and complete quests to uncover the truth behind their sibling's disappearance. Genshin Impact features a gacha-style system for obtaining new characters and weapons, each with their own elemental abilities and playstyles. The game also boasts stunning visuals, immersive gameplay, and a deep lore-rich story that has captivated players around the world.",
            "average_ratings": "4.7",
            "total_ratings": 1000,
            "genre": "Action Role-Playing"
        },
        {
            "id": 2,
            "poster_path": "https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg",
            "title": "Dota 2",
            "overview": "Dota 2 is a free-to-play multiplayer online battle arena (MOBA) game developed and published by Valve Corporation. It is a highly competitive game where two teams of five players each battle against each other in intense matches, with the objective of destroying the opposing team's Ancient, a heavily guarded structure in their base. Players choose from a vast roster of unique heroes, each with their own abilities and roles, and work together with their team to coordinate strategies, control resources, and defeat their opponents. Dota 2 is known for its deep gameplay mechanics, strategic depth, and high skill cap, requiring coordination, communication, and mastery of hero abilities to achieve victory. With a large and passionate community of players worldwide, Dota 2 has become one of the most popular and enduring MOBA games in the esports scene.",
            "average_ratings": "4.3",
            "total_ratings": 2000,
            "genre": "Multiplayer Online Battle Arena"
        },
        {
            "id": 3,
            "poster_path": "https://static-cdn.jtvnw.net/ttv-boxart/1678052513-285x380.jpg",
            "title": "Call of Duty: Modern Warfare",
            "overview": "A first-person shooter video game that features a realistic and gritty portrayal of modern warfare.",
            "average_ratings": "8.7",
            "total_ratings": 1500,
            "genre": "First-person shooter"
        }
]`;
}