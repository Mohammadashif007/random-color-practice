import { useEffect, useState } from "react";

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000");

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length);
    };

    const handleCreateHaxColor = () => {
        const hax = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
        ];

        let haxColor = "#";
        for (let i = 0; i < 6; i++) {
            haxColor += hax[randomColorUtility(hax.length)];
        }
        setColor(haxColor);
    };

    const handleCreateRgbColor = () => {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)
        setColor(`rgb(${r}, ${g}, ${b})`)
    };

    useEffect(() => {
        if(typeOfColor === 'rgb') handleCreateRgbColor()
        else handleCreateHaxColor()
    }, [typeOfColor])

    return (
        <div style={{textAlign: "center", height: "100vh", width: "100vw", background: color }}>
            <button onClick={() => setTypeOfColor("hex")}>
                Create hax color
            </button>
            <button onClick={() => setTypeOfColor("rbg")}>
                Create rgb color
            </button>
            <button
                onClick={
                    typeOfColor === "hex"
                        ? handleCreateHaxColor
                        : handleCreateRgbColor
                }
            >
                Generate Random Color
            </button>
            <div style={{display: 'flex',
            alignItems: 'center', justifyContent: 'center', flexDirection: 'column',  fontSize: '30px', color: '#fff'}}>
                <h2>{typeOfColor} Color</h2>
                <h1>{color}</h1>
            </div>
        </div>
    );
};

export default RandomColor;
