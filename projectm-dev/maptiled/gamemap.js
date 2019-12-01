var GameMap = {
    cols: 8,
    rows: 8,
    img: {
        data: null,
        wsize: 33,
        hsize: 30,
        cols: 23,
        rows: 21,
        tsize: 32,
    },
    tiles: [
        1, 1, 1, 1, 69, 1, 1, 1,
        1, 1, 1, 1, 69, 1, 1, 1,
        1, 1, 1, 1, 69, 69, 69, 1,
        1, 1, 1, 1, 1, 1, 69, 1,
        1, 1, 1, 1, 1, 1, 69, 1,
        1, 1, 1, 1, 1, 1, 27, 1,
        1, 1, 1, 1, 1, 1, 69, 1,
        1, 1, 1, 1, 1, 1, 69, 1
    ],
    getTile: function ( col, row ) {
        return this.tiles[ row * this.cols + col ];
    }
};