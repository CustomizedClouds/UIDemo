function CloseAll(){
	var gui = require('nw.gui');
	gui.App.closeAllWindows();
}

function CrawlWebsite(url){

	var url = "http://customizedclouds.com/";
	var Crawler = require("simplecrawler");
	
	Crawler.crawl(url)
	    .on("fetchcomplete", function(queueItem) {
	        console.log("Completed fetching resource:", queueItem.url);
});

}