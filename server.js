var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articlename', function (req, res) {
var  articlename=req.params.articlename;
  res.send(template(articlename));
});

var articles= {
    'articleOne': {
     title:"Article1",
     heading:"ARTICLE ONE",
     date:"22-09-16",
     content:`"<p>This is article one<p>"
            <p>  This si article oone<p>`
            },
            
      'articleTwo':{
     title:"Article2",
     heading:"ARTICLE two",
     date:"22-09-16",
     content:`"<p>This is article two<p>"
            <p>    This si article twooo<p>`
     }      
    
};
function template(data){
   data.title=title;
   data.heading=heading;
   data.date=date;
   data.content=content;
   
   var htmlTemplate=`<!Doctype html>
<head>
<title>${title}</title>
<link href="ui/style.css" rel="stylesheet"/>
<meta name="viewport" content="width=device-width,initialscale=1"/>
</head>
<body class="cont">
<div><a href="/">Home</a></div>    
<div>
<h3>${heading}</h3>
<hr/>
</div>
<div>${date}</div>


<div>
<p>${content}</p>
</div>

</body>
</html>`;
return htmTemplate;
    
};
app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
