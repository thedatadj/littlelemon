import Sketch from "react-p5"

const Bread = () =>
{
    var canvas;

    const setup = (p5) =>
    {
        canvas = p5.createCanvas(550, 450)
        canvas.parent('#canvasito')
    }

    const draw = (p5) =>
    {
        const x = 12;
        p5.background(255, 203, 158)
        // Plate
        p5.fill(255, 255, 255);
        p5.strokeWeight(2);
        p5.stroke(107, 72, 52);
        p5.ellipse(200+x, 200, 350, 350) // Outer circle
        p5.ellipse(200+x, 200, 300, 300) // Inner circle
        // Bread - Head
        p5.noStroke()
        p5.fill(237, 188, 155);
        p5.ellipse(203+x, 147, 216, 138) // Outer Ellipse
        p5.noStroke()
        p5.fill(251, 235, 198);
        p5.ellipse(200+x, 150, 201, 125) // Inner Elipse
        // Bread - Body
        p5.noStroke()
        p5.fill(237, 188, 155);
        p5.rect(123+x, 189, 159, 107) // Outer Rectangle
        p5.noStroke()
        p5.fill(251, 235, 198);
        p5.rect(126+x, 189, 150, 103) // Inner Rectangle

        p5.strokeWeight(5);
        p5.stroke(107, 72, 52);
        p5.arc(132+x, 135, 35, 35, 0.1, 1.5); //eyebrow
        p5.arc(242+x, 135, 35, 35, 89.5, 91); //eyebrow
        p5.arc(159+x, 175, 25, 10, 0, 3); //eyes
        p5.arc(159+x, 175, 25, 5, 0, 3); //eyes
        p5.arc(220+x, 175, 25, 10, 0, 3); //eyes
        p5.arc(220+x, 175, 25, 5, 0, 3); //eyes
        p5.line(165+x, 200, 217, 200); //mouth
        // Text
        p5.textSize(32)
        p5.strokeWeight(3)
        p5.fill(251, 235, 198);
        p5.text("Sorry, I'm just a slice of bread.", 0, 420)
    }

    return <Sketch setup={setup} draw={draw} />
}

const Placeholder = () =>
{
    const style =
    {
        height: "500px",
        backgroundColor: "rgb(255, 203, 158)",
        margin: "auto",
        paddingLeft: "35%",
    }
    return (
        <div id='canvasito' style={style}>
            <Bread />
        </div>
    )
}
export default Placeholder