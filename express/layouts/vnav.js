module.exports = function(app){


    function getCIItems(req, res){
        var response = [], section = req.params.section;

        if(section == "CI"){
            response.push({
                "codigo": "brunch",
                "titulo": "Brunch"
            });

            response.push({
                "codigo": "npm",
                "titulo": "NPM"
            });
        }else{
            console.error("Section", section, "not found");
        }

        res.status(200).send(response);

    }

    app.get('/api/layouts/vnavs/:section', getCIItems);

};