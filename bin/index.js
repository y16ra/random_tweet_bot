#!/usr/bin/env node
/*
 * ブログのサイトマップからランダムに記事を選んでつぶやく
 *
 * Copyright (c) 2015 iyuichi
 * Licensed under the MIT license.
 */

var sitemap = require("./sitemap");
var __      = require("underscore");
var htmlParser = require('cheerio-httpcli');
var twitter = require('twitter');
var config = require('config');
require('date-utils');

// Twitter認証情報
var bot = new twitter({
    consumer_key        : process.env.TW_CONSUMER_KEY        || config.twitter.CONSUMER_KEY,
    consumer_secret     : process.env.TW_CONSUMER_SECRET     || config.twitter.CONSUMER_SECRET,
    access_token_key    : process.env.TW_ACCESS_TOKEN        || config.twitter.ACCESS_TOKEN,
    access_token_secret : process.env.TW_ACCESS_TOKEN_SECRET || config.twitter.ACCESS_TOKEN_SECRET
});
// サイトマップを取得するURL
var sitemapUrl = process.env.SITEMAP_URL || config.sitemap.url;

var tweet_prefix = process.env.TWEET_PREFIX || config.twitter.tweet_prefix;

sitemap.getSites(sitemapUrl, function(err, sites){
    if(!err) {
        console.log(__.size(sites));
        var samples = __.sample(sites, 1);
        __.each(samples, function(url) {
            htmlParser.fetch(url).then(
                function(result){
                    var tweet_text = tweet_prefix + " " + result.$('title').text() + " " + url;
                    bot.post('statuses/update', {status: tweet_text}, function(error, data, res){
                        if(!error) {
                            console.log("Tweet done. " + tweet_text);
                        } else {
                            console.log("status code: " + res.statusCode + " / " + error);
                        }
                    });
                }
            );
        });
    } else {
        console.log(err);
    }
});


