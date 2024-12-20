const connection = require('../data/db');

function index(req, res) {
    connection.query('select * from posts p', (error, posts) => {
        if (error instanceof Error) {
            console.error(error);
            return;
        }

        posts.forEach(({id}) => {
            connection.query(`
                select t.*
                from post_tag pt
                    join tags t
                        on pt.tag_id = t.id
                where pt.post_id = ?
                `,
                [id],
                (error, tags) => {
                    if (error instanceof Error) {
                        console.error(error);
                        return;
                    }

                    console.log(tags);
                }
            );
        });
        
    });

    console.log('finish');
    res.json([]);
}

module.exports = {
    index
};