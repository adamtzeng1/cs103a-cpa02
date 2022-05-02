'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed

var courseSchema = Schema( {
    title: String,
    steamUrl: String,
    publisher: String,
    genres: [String],
    status: String
} );

module.exports = mongoose.model( 'Course', courseSchema );
