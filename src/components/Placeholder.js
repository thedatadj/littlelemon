import Sketch from "react-p5"

const Bread = () =>
{
    var canvas;

    const setup = (p5) =>
    {
        canvas = p5.createCanvas(400, 450)
        canvas.position(p5.windowWidth/2 - 200, p5.windowHeight/2 - 190)
    }

    const draw = (p5) =>
    {
        p5.background(255, 203, 158)
        // Plate
        p5.fill(255, 255, 255);
        p5.strokeWeight(2);
        p5.stroke(107, 72, 52);
        p5.ellipse(200, 200, 350, 350) // Outer circle
        p5.ellipse(200, 200, 300, 300) // Inner circle
        // Bread - Head
        p5.noStroke()
        p5.fill(237, 188, 155);
        p5.ellipse(203, 147, 216, 138) // Outer Ellipse
        p5.noStroke()
        p5.fill(251, 235, 198);
        p5.ellipse(200, 150, 201, 125) // Inner Elipse
        // Bread - Body
        p5.noStroke()
        p5.fill(237, 188, 155);
        p5.rect(123, 189, 159, 107) // Outer Rectangle
        p5.noStroke()
        p5.fill(251, 235, 198);
        p5.rect(126, 189, 150, 103) // Inner Rectangle

        p5.strokeWeight(5);
        p5.stroke(107, 72, 52);
        p5.arc(132, 135, 35, 35, 0.1, 1.5); //eyebrow
        p5.arc(242, 135, 35, 35, 89.5, 91); //eyebrow
        p5.arc(159, 175, 25, 10, 0, 3); //eyes
        p5.arc(159, 175, 25, 5, 0, 3); //eyes
        p5.arc(220, 175, 25, 10, 0, 3); //eyes
        p5.arc(220, 175, 25, 5, 0, 3); //eyes
        p5.line(165, 200, 217, 200); //mouth
        // Text
        p5.textSize(32)
        p5.strokeWeight(3)
        p5.fill(251, 235, 198);
        p5.text("Sorry, I'm just a bread.", 50, 420)
    }

    return <Sketch setup={setup} draw={draw} />
}

const Placeholder = () =>
{
    const style =
    {
        height: "500px",
        backgroundColor: "rgb(255, 203, 158)"
    }
    return (
        <div style={style}>
            <Bread />
        </div>
    )
}
export default Placeholder