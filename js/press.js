$(document).ready(function(){

	var $container = $('div#press-container');
	var html = "";

	//	Total records
	totalRecords = 0;

	$.getJSON('js/press.json', function(data)
	{
		var records = data['posts'];
		totalRecords = records.length;
		
		for(var i=0; i<totalRecords; i++)
		{
			switch(records[i].type)
			{
				case "text-only":
					html = '<div class="article text-only" id="article-'+i+'">';
					html += '<div class="article-text">';
					// html += '<p class="article-date">'+records[i].date+'</p>';
					html += '<p class="article-heading">'+records[i].heading+'</p>';
					html += '<p class="article-text">'+records[i].summary+'</p>';
					html += '<a class="article-link" href="'+records[i].link+'">Read the article</a>';
					html += '</div>';
					html += '</div>';
					break;
				case "caption-only":
					html = '<div class="article caption-only" id="article-'+i+'">';
					html += '<div class="article-text">';
					// html += '<p class="article-date">'+records[i].date+'</p>';
					html += '<p class="article-heading">'+records[i].heading+'</p>';
					html += '<a class="article-link" href="'+records[i].link+'">Read the article</a>';
					html += '</div>';
					html += '</div>';
					break;
				case "image":
					html = '<div class="article img-only img-card" id="article-'+i+'" style="background-image:url('+records[i].image+')">&nbsp;</div>';
					break;
				case "caption-image":
					html = '<div class="article caption-img img-card" id="article-'+i+'" style="background-image:url('+records[i].image+')"><div class="dark-overlay">';
					html += '<div class="article-text">';
					// html += '<p class="article-date">'+records[i].date+'</p>';
					html += '<p class="article-heading">'+records[i].heading+'</p>';
					html += '<a class="article-link" href="'+records[i].link+'">Read the article</a>';
					html += '</div>';
					html += '</div></div>';
					break;
				case "standard":
					html = '<div class="article standard img-card" id="article-'+i+'" style="background-image:url('+records[i].image+')"><div class="dark-overlay">';
					html += '<div class="article-text">';
					// html += '<p class="article-date">'+records[i].date+'</p>';
					html += '<p class="article-heading">'+records[i].heading+'</p>';
					html += '<p class="article-text">'+records[i].summary+'</p>';
					html += '<a class="article-link" href="'+records[i].link+'">Read the article</a>';
					html += '</div>';
					html += '</div></div>';

			}
			$container.append(html);
		}
	});
});