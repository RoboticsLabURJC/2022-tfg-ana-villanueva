let player = document.querySelector("#player")
let theball = document.querySelector("#ball")

player.addEventListener("collide", e => {
    console.log(e.detail.target.el.id + " collided with " + e.detail.body.el.id);
    
    // Original entity (subject of event listener)
    e.detail.target.el;
    // Entity that was collided with
    e.detail.body.el;
});
