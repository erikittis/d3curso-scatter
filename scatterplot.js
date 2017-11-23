console.log("hola")

d3.json("partidos.js", function(data) {
    
    console.log("hola git")
    
    window.data = data
    
    partidos = data.partidos
    
    ancho = 500
    alto = 500
    
    escalacx = d3.scaleLinear()
        .domain(["0", "10"])
        .range(["0", "500"])
    
    contenedor= d3.select("#contenedor")
        .append("svg")
        .attr("width", ancho)
        .attr("height", alto)
    
    
    contenedor
        .selectAll("circle")
        .data(partidos)
        .enter()
        .append("circle")
        .attr("cx", function(d) {return 
        escalacx(d.mediaAutoubicacion)})
        .attr("r", 10)
        .attr("cy", 10)
    
    
})