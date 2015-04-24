/*
 * 使いにくい部分があったのでいろいろ直していますが
 * 基本は以下のライブラリのソースを使っています。
 * 
 * Sitemap Parser
 * Copyright (c) 2014 Sean Thomas Burke
 * Licensed under the MIT license.
 * https://github.com/hawaiianchimp/sitemap-parser.git
 */

'use strict'

var xmlParse = require("xml2js").parseString;
var request = require('request');
var _ = require('underscore');

var sitemapidx_num = process.env.SITEMAPIDX_NUM || 2;

var sitemap = module.exports = Object;

sitemap.setURL = function(url){
    this.url = url;
}

sitemap.parse = function(url, callback){
    this.url = url;
    var self = this;
    request(this.url, function(err, response, body){
        if(!err && response.statusCode == 200){
            xmlParse(body, function(err,data){
                callback(err, data);
            });
        }
        else{
            callback(err, "Error");
        }
    });
};

sitemap.getSites = function(url, callback){
    var self = this;
    var d,s,error,sites = [];
    var sUrlSize = 1;
    var parseCnt = 0;
    this.parse(url, function read(err, data){
        if(!err) {
            if(d = data.urlset) {
                sites.push(_.flatten(_.pluck(d.url, "loc")));
                sites = _.flatten(sites);
                parseCnt++;
                if (parseCnt === sUrlSize) {
                    callback(error, sites);
                }
            } else if(s = data.sitemapindex) {
                var sitemapUrls = _.flatten(_.pluck(s.sitemap, "loc"));
                sitemapUrls = _.first(sitemapUrls, sitemapidx_num);
                sUrlSize = _.size(sitemapUrls);
                console.log(sitemapUrls);
                _.each(sitemapUrls, function(url){
                    self.parse(url, read);
                });
            } else{
                error.push("no valid xml");
                callback(err, sites);
            }
        } else {
            callback(err, sites);
        }
    });
};
