import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = (  ) => {

    const [categorias, setCategorias] = useState(['Vanitas']);


    return (
        <>
            <h2>Buscar</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr/>

            <ol>
                {
                    categorias.map( d =>
                         <GifGrid 
                            key={d}
                            category={d} />
                    )
                }
            </ol>

        </>
    );
}

export default GifExpertApp;