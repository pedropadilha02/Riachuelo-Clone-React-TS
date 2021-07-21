import styled from "styled-components";
import { MenuItem } from "./MenuItem";
import { useState, useEffect } from "react";


const MenuStyled = styled.nav`
    @media (max-width: 1200px) {
        display: none;
    }
`

const MenuList = styled.ul`
    display: flex;
    justify-content: space-between;
    padding-left: 0px;
    margin: 10px 0px;
`

interface CategoriaData {
    id: string; 
    label: string;
    }

export function Menu(){

    const [categories, setCategories] = useState<CategoriaData[]>([]);
   
    useEffect(()=> {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(res => setCategories(res))
    },[]);

    

    return(
        <MenuStyled>
            <MenuList>
                {categories?.map((categoria) => 
                    <MenuItem key={categoria.id} categoria={categoria}/>
                )}    
            </MenuList>
        </MenuStyled>
    );
}