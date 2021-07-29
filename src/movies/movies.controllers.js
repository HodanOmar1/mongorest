const Movie = require("./movies.model");
exports.addMovie = async (req, res) => {
try {
    const movie= new Movie(req.body);
    const savedMovie = await movie.save();
    res.status(200).send ({movie:saveMovied, message: "Movie added to database" });
} catch (error) {
    res.status(500).send (error)
}
};

exports.findMovie =async (req, res) => {
   
    try {
        const movie = req.params.title;
        const targetMovie = await Movie.findOne({ title: movie});
        res.status(200).send({ movie: targetMovie})
    } catch (error) {
        res.status(500).send (error);
    }
};

exports.deleteMovie = async (req, res) => {
    try {
        const movie = req.params.title;
        const removeMovie= await Movie.findOneAndRemove ({title: movie});
        res.status(200).send ({movie: removeMovie, message: "Movie title successfully deleted"});
        
    } catch (error) {
        res.status(500).send (error);
        }
};

exports.movieUser = async (req, res) => {
    try {
        const movie = req.body.title;
        const watched= req.body.watched;
        const updateMovie= await Movie.findOneandUpdate ({title: movie});
        res.status(200).send ({movie: updateMovie, message: "Movie title successfully updated"});
    } catch (error) {
        
    }
};