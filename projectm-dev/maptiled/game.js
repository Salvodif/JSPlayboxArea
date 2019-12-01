var Game = {};

Game.load = function () {
    return [
        Loader.loadImage( 'tilemap', 'tilemap.png' ),
        Loader.loadImage( 'character', 'players.png' )
    ];
};

Game.run = function ( context ) {
    this.ctx = context;
    // this._previousElapsed = 0;

    var p = this.load();
    Promise.all( p ).then( function ( loaded ) {
        this.init();
        // window.requestAnimationFrame( this.tick );
    }.bind( this ) );
};

// override these methods to create the demo
Game.init = function () {
    this.tileMap = Loader.getImage( 'tilemap' );
};

Game.update = function ( delta ) {};

Game.render = function () {
    for ( var c = 0; c < map.cols; c++ ) {
        for ( var r = 0; r < map.rows; r++ ) {
            var tile = map.getTile( c, r );
            if ( tile !== 0 ) { // 0 => empty tile
                this.ctx.drawImage(
                    this.tileAtlas, // image
                    ( tile - 1 ) * map.tsize, // source x
                    0, // source y
                    map.tsize, // source width
                    map.tsize, // source height
                    c * map.tsize, // target x
                    r * map.tsize, // target y
                    map.tsize, // target width
                    map.tsize // target height
                );
            }
        }
    }
};

//
// start up function
//

window.onload = function () {
    var context = document.getElementById( 'demo' ).getContext( '2d' );
    Game.run( context );
};