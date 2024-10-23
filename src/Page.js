import React, { useState, useEffect } from 'react';
import './Page.css';

const Page = () => {
    const [color, setColor] = useState("white");
    const [colors, setColors] = useState(["red", "green", "blue", "yellow"]);
    const [newColor, setNewColor] = useState("");
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        setPositions(generateRandomPositions(colors.length));
    }, [colors]);

    function changeColor(e) {
        setColor(e.target.innerText);
    }

    function addColor() {
        if (newColor && !colors.includes(newColor.toLowerCase())) {
            setColors([...colors, newColor.toLowerCase()]);
        }
        setNewColor(""); 
    }

    function generateRandomPositions(num) {
        const positions = [];
        for (let i = 0; i < num; i++) {
            const top = Math.floor(Math.random() * (window.innerHeight - 100)); 
            const left = Math.floor(Math.random() * (window.innerWidth - 100)); 
            positions.push({ top, left });
        }
        return positions;
    }

    return (
        <div className="main" style={{ backgroundColor: color }}>
            <div>
                <input
                    value={newColor}
                    onChange={(e) => setNewColor(e.target.value)}
                    placeholder="Enter color"
                />
                <button
                    style={{ width: '80px', height: '20px', color: 'white', backgroundColor: 'black' }}
                    onClick={addColor}
                >
                    Add
                </button>
            </div>

            {colors.map((colorItem, index) => (
                <button
                    key={colorItem}
                    style={{
                        position: 'absolute',
                        width: '100px',
                        color: color,
                        backgroundColor: 'beige',
                        border: 'solid 2px bisque',
                        borderRadius: '20px',
                        top: `${positions[index]?.top}px`,
                        left: `${positions[index]?.left}px`
                    }}
                    onClick={changeColor}
                >
                    {colorItem}
                </button>
            ))}
        </div>
    );
};

export default Page;
