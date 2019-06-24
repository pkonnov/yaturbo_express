const async = require("express-async-await");
const fetch = require("node-fetch");
const cfg = require("../cfg");

async function get(url) {
    const res = await fetch(url)
    const data = await res.json()
		return data;
}

function mapsData(){
	return get(cfg.url)
		.then(data => data.map(i => {
				return `
					<item	turbo="true">
				    <link>${i.url_node}</link>
				    <turbo:content>
				     	<header>
							<figure>
								<img src="${i.photo}" />
							</figure>
							<h1>${i.title}</h1>
						</header>
						${i.body.replace(/&nbsp;/gm, '')}
				    </turbo:content>
				</item>
				`
	}));
}

function mapsDataTwo(){
	return get(cfg.url)
		.then(data => data.map(i => {
			return `
<item>
  <title>${i.title}</title>
  <link>${i.url_node}</link>
  <description/>
  <pubDate>${i.pub_date}</pubDate>
</item>
`
		}));
}

module.exports.rss = async function(req, res){

  res.send(`<?xml version="1.0" encoding="utf-8"?>
<rss xmlns:yandex="http://news.yandex.ru"
     xmlns:media="http://search.yahoo.com/mrss/"
     xmlns:turbo="http://turbo.yandex.ru"
     version="2.0">

    <channel>

        <title>${cfg.title}</title>

        <link>${cfg.link}</link>

        <description>${cfg.description}</description>
 
				${await mapsData()}

        <turbo:analytics
         id="${cfg.idCounter}"
         type="Yandex"
        >
        </turbo:analytics>

		</channel>
</rss>`);

}

module.exports.rssTwo = async function(req, res) {
	res.send(`<?xml version="1.0" encoding="utf-8"?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0" xml:base=${cfg.linkRss}>
  <channel>
    <title>${cfg.title}</title>
    <link>${cfg.linkRss}</link>
    <description/>
    <language>ru</language>
		${await mapsDataTwo()}
	</channel>
</rss>`)	
}
