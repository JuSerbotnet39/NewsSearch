# NewsSearch

This is my first ever attemt at making an API, this specific API scans the a href tags in diffrent sites and searches for a specific keyword in those tags and gives back its title and url of articles with that keywork in JSON. I Learnt this from and got inspired by <a href="https://github.com/kubowania/climate-change-live-api">Ania Kubow</a> from this <a herf="https://www.youtube.com/watch?v=GK4Pl-GmPHk">Video</a>
<br>
To view it nicely, Download the Json viewer extension in your browser, <a href= "https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh/related">JSON viewer</a>.
<hr><br>
<br>
<h2>For Starting the Project</h2>
1) On Terminal

       $> npm run start
       
       
      <br>
       

2) On Web Browser

    2a) For Main Page

       http://localhost:8000/



    2b) For News From the included sites in JS

       http://localhost:8000/news



    2c) For a specific site just write:

       http://localhost:8000/news/"name_of_the_site_included_in_js"
       
       
      ex:
                                                                                                        
       http://localhost:8000/news/Gaurdian
     <br>
       
       



3) For changing the keyword for search in line 134 and line 167

       $('a:contains("Put-your-keyword-here")', html)

