const fruits = [
    { 
        id: 1, 
        name: "Manzana", 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/200px-Red_Apple.jpg" 
    },
    { 
        id: 2, 
        name: "Banana", 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/200px-Banana-Single.jpg" 
    },
    { 
        id: 3, 
        name: "Cereza", 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Cherry_Stella444.jpg/200px-Cherry_Stella444.jpg" 
    }
];

const totalFruits = fruits.map((fruit)=>{
    return (    
        <div key={fruit.id}>
            <p>{fruit.id}</p>
            <p>{fruit.name}</p>
            <img src={fruit.img} alt="" />
        </div>
    )
});

function Objetos() {
    return (
        
        <div>
            <h2>Renderizado de objetos</h2> 
            {totalFruits} 
        </div>
        
    )
}

export default Objetos