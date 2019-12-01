Game.load = function () {
    return [
        Loader.loadImage( 'tiles', 'tilemap.png' ),
        Loader.loadImage( 'player', 'players.png' )
    ];
};

Game.init = function () {
    Keyboard.listenForEvents(
        [ Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN ] );
    Game.Map.img.data = Loader.getImage( 'tiles' );
    Game.Player.img.data = Loader.getImage( 'player' );
    console.log( "no-scroll:\tGame.init" );
};

Game.render = function () {
    console.log( "no-scroll:\tGame.render" );
    const map = Game.Map;

    const maptsize = map.img.tsize;

    for ( var c = 0; c < map.cols; c++ ) {
        for ( var r = 0; r < map.rows; r++ ) {

            var tile = map.getTile( c, r );
            if ( tile === 0 )
                continue;

            const tilex = ( tile - 1 ) % map.img.cols;
            const sx = tilex * maptsize;
            const tiley = Math.round( tile / map.img.rows );
            const sy = tiley * maptsize;

            this.ctx.drawImage(
                map.img.data, // image
                sx, // source x
                sy, // source y
                maptsize, // source width
                maptsize, // source height
                c * maptsize, // target x
                r * maptsize, // target y
                maptsize, // target width
                maptsize // target height
            );

        }
    }

    this.ctx.drawImage( Game.Player.img.data,
        Game.Player.type * Game.Player.img.wsize,
        0,
        Game.Player.img.wsize,
        Game.Player.img.hsize,
        Game.Player.pos.x,
        Game.Player.pos.y,
        Game.Player.img.wsize,
        Game.Player.img.hsize );
};

Game.update = function () {
    console.log( "no-scroll:\tGame.update" );
    if ( Keyboard.isDown( Keyboard.LEFT ) ) {
        console.log( `no-scroll:\t LEFT: ${Game.Player.pos}` );
        --Game.Player.pos.x
    }
    if ( Keyboard.isDown( Keyboard.RIGHT ) ) {
        console.log( `no-scroll:\t RIGHT: ${Game.Player.pos}` );
        ++Game.Player.pos.x
    }
    if ( Keyboard.isDown( Keyboard.UP ) ) {
        --Game.Player.pos.y;
    }
    if ( Keyboard.isDown( Keyboard.DOWN ) ) {
        ++Game.Player.pos.y;
    }
};