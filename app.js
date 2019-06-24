const express = require("express");
const async = require("express-async-await");
const fetch = require("node-fetch");
const cfg = require("./cfg");
const app = express();
const yarss = require('./routes/rss')


app.use('/', yarss)

app.listen(3000);

//async function get(url) {
//    const res = await fetch(url)
//    const data = await res.json()
//		return data;
//}

//function mapsdata(){
//	return get(cfg.url)
//		.then(data => data.map(i => {
//				return `
//					<item	turbo="true">
//				    <link>${i.url_node}</link>
//				    <turbo:content>
//				     	<header>
//							<figure>
//								<img src="${i.photo}" />
//							</figure>
//							<h1>${i.title}</h1>
//						</header>
//						${i.body.replace('&nbsp;', ' ')}
//				    </turbo:content>
//				</item>
//				`
//	}));
//}
//
//app.get("/", async function(req, res){
//
//  res.send(`<?xml version="1.0" encoding="utf-8"?>
//<rss xmlns:yandex="http://news.yandex.ru"
//     xmlns:media="http://search.yahoo.com/mrss/"
//     xmlns:turbo="http://turbo.yandex.ru"
//     version="2.0">
//
//    <channel>
//
//        <title>${cfg.title}</title>
//
//        <link>${cfg.link}</link>
//
//        <description>${cfg.description}</description>
// 
//				${await mapsData()}
//
//        <turbo:analytics
//         id="${cfg.idCounter}"
//         type="Yandex"
//        >
//        </turbo:analytics>
//
//		</channel>
//</rss>`);
//
//});

