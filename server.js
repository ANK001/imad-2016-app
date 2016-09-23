var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
   res.send(template(articleOne));
});
var article ={
articleOne:{  title: 'ArticleOne',
     heading: 'ARTICLE ONE',
     date: '22-SEPT-2016',
     content:` <p>This is article one</p>
    
    <p>This is article one</p>
    
    <p>This is article one</p>
    
    <p>This is article one</p>`},
    
articleTwo:{  title: 'ArticleTwo',
     heading: 'ARTICLE TWO',
     date: '23-SEPT-2016',
     content:` <p>This is article two</p>
    
    <p>This is article one</p>
    
    <p>This is article one</p>
    
    <p>This is article one</p>`},
    
articleThree:{  title: 'ArticleThree',
     heading: 'ARTICLE THREE',
     date: '24-SEPT-2016',
     content:` <p>This is article three</p>
    
    <p>This is article one</p>
    
    <p>This is article one</p>
    
    <p>This is article one</p>`},

 
};
function template(data){
    var title=data.title;
    var heading=data.heading;    
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate=`
                    <!Doctype html>
                <head>
                <title>${title}</title>
                
                <meta name="viewport" content="width=device-width,initialscale=1"/>
                <link href="/ui/style.css" rel="stylesheet"/>
                </head>
                <body>
                <div class="cont">
                
                    <div><a href="/">Home</a></div>
                    <hr/>
                    <h3>${heading}</h3>
                    <div>${date}</div>
                    <div>
                    ${content}
                            </div>
                </div>
                </body>
                
                </html>`
                ;
                return htmlTemplate

}
app.get('/article-two',function(req,res){
   res.send(template(articleTwo));
});

app.get('/article-three',function(req,res){
   res.send(template(articleThree));
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
