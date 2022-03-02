//Constructor Function that creates a post object
// It has to contain title, message, author, views, comments and isItLive

function Post(title, message, author, views, comments, isItLive) {
    this.title = title,
    this.message = message,
    this.author = author,
    this.views = 0, // initial value =  0
    this.comments = [], // initialized with empty array
    this.isItLive = false // initial value =  false
}

let post1 = new Post('Stuff','Info about the stuff', 'Gabriel', 253, [
    {author: '@cavalcant.ju', message: 'Bad post'},
    {author: '@raas.fa', message: 'I liked it'}
], true);

console.log(post1);