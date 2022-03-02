// Blog post object
// Objective: Create an object of a blog post that contains 
// the following properties:
/*
title
message
author
views
comments
    (author,message)
isItLive
*/

let blogPost = {
    title : 'Stuff',
    message : 'More stuff',
    author : 'Luiz Miguel',
    views : 159,
    comments : [
        { author: '@Jor.geOfficial', message: 'Not bad!'},
        { author: '@Ana.beatriz21', message: 'Very interesting'}
    ],
    isItLive : true 
};

console.log(blogPost);