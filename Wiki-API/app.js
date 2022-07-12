const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const ejs = require('ejs')

app.listen(3000, () => {
    console.log("server started at port 3000")
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))//used to store static files such as images,css etc.
mongoose.connect('mongodb://localhost:27017/wikiDB', { useNewUrlParser: true })

const articleSchema = {
    title: String,
    content: String
}

const Article = mongoose.model("Article", articleSchema)

///////////////////// Requests targeting all articles////////////////////////

app.route("/articles")
    .get((req, res) => {

        let article = "";
        Article.find({}, (err, results) => {
            if (err)
                res.send(err)
            else {

                res.send(results);
            }
        })

    })
    .post((req, res) => {

        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        })

        newArticle.save((err) => {
            if (err)
                res.send(err);
            else {
                res.send("Successfully added new article")
            }
        });
    })
    .delete((req, res) => {
        Article.deleteMany({}, (err) => {
            if (!err) {
                res.send("Deleted all articles")
            }
            else {
                res.send(err)
            }
        })
    })

////////////////////// Requests targeting specific article /////////////////////

app.route("/articles/:articleTitle")
    .get((req, res) => {

        Article.findOne({ title: req.params.articleTitle }, (err, foundArticle) => {
            if (foundArticle)
                res.send(foundArticle)
            else
                res.send(err)
        })
    })
    .put((req, res) => {
        Article.replaceOne(
            { title: req.params.articleTitle },
            { title: req.body.title, content: req.body.content },
            { overwrite: true },
            (err) => {
                if (!err)
                    res.send("Updated")
                else {
                    res.send(err);
                    console.log(err)
                }
            }

        )
    })
    .patch((req, res) => {
        console.log(req.body)
        Article.updateOne(
            { title: req.params.articleTitle },
            { $set: req.body },
            (err) => {
                if (!err) {
                    res.send("successfully updated article")
                }
                else {
                    res.send(err);
                }
            }
        )
    })
    .delete((req, res) => {
        Article.deleteOne({ title: req.params.articleTitle }, (err) => {
            if (!err) {
                res.send("Deleted the article susccessfully")
            }
            else {
                res.send(err)
            }
        })
    })