const players = document.getElementsByClassName('player');
for (const player in players){
    player.style.border = '2px solid red';
    player.style.margin = '10px';
    player.style.padding = '10px';
}
document.getElementById('players').style.border = '1px solid red';