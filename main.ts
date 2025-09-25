function MoveTheEnemy () {
    if (!(tiles.tileAtLocationIsWall(mySprite2.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom)))) {
        mySprite2.vx = 100
    }
    if (!(tiles.tileAtLocationIsWall(mySprite2.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom)))) {
        mySprite2.vx = -100
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy += -110
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    if (controller.up.isPressed()) {
        mySprite.vy = 50
    } else if (controller.down.isPressed()) {
        mySprite.vy = -50
        animation.runImageAnimation(
        mySprite,
        assets.animation`climbNorth0`,
        125,
        true
        )
    } else {
        mySprite.ay += 0
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.gameOver(false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`runWest0`,
    125,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`idleSouth0`,
    125,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`combatIdleSouth0`,
    125,
    true
    )
})
function MakeAnEnemy () {
    mySprite2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Player)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(31, 16))
    mySprite.ay = 300
}
info.onCountdownEnd(function () {
    mySprite.setScale(0.5, ScaleAnchor.BottomLeft)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    mySprite.setScale(0.3, ScaleAnchor.BottomLeft)
    info.startCountdown(10)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`runEast2`,
    125,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level0`)
mySprite = sprites.create(assets.image`image378`, SpriteKind.Player)
mySprite.setPosition(21, 400)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 350
mySprite.setScale(0.5, ScaleAnchor.BottomLeft)
controller.moveSprite(mySprite, 100, 0)
mySprite2 = sprites.create(img`
    . . . . . . . . . b b b b . . . 
    . . . . . . b b b d d d d b . . 
    . . . . . . b d d d d d d b . . 
    . . . . b b d d d d d b b d . . 
    . . . . b d d d d d d b b d b . 
    . . . . c d d d d d b b d b c . 
    . . . b c c b b b b d d b c c . 
    . . b b c c c b d d b c c c c . 
    . b b d d d b b b b b b c c c c 
    . c d d d d d d b d b c c c b c 
    . c b d d d b b d b c c c b b c 
    c b c c c c b d d b b b b b c c 
    c c b b b d d b c c b b b b c c 
    c c c c c c c c c b b b b c c . 
    . c c c c b b b b b b b c c . . 
    . . . . c c c c c c c c . . . . 
    `, SpriteKind.Enemy)
mySprite2.setVelocity(80, 20)
mySprite2.ay = 10
game.onUpdateInterval(500, function () {
	
})
