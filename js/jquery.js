fetch('xml/books.xml')
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        let template='';
        let parser = new DOMParser();
        let doc = parser.parseFromString(data, "application/xml");
        console.log(doc);
        let libros=doc.querySelectorAll('book');
        console.log(libros);
        
        libros.forEach(item=>{
            template=`
                <h2>Book Ref: ${item.attributes[0].nodeValue}</h2>
                <p><b>Author: </b>${item.firstElementChild.innerHTML}</p>
                <p>Title: </p>
            `;
            /* children*/
        });
        
    })
    .catch(function(err) {
        console.error(err);
    });
