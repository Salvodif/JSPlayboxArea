Game.load = function () {
    return [
        Loader.loadImage( 'tiles', 'tilemap.png' )
    ];
};

Game.init = function () {
    this.tilemap = Loader.getImage( 'tiles' );
    this.Map = GameMap;
};

Game.update = function ( delta ) {};

Game.render = function () {
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
                this.tilemap, // image
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
};