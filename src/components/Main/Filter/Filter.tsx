import { useEffect, useState } from "react";
import styled from "styled-components";
import { FilterItem } from "./FilterItens";

const FilterStyled = styled.section`
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;

    @media (max-width: 780px) {
        width: 80%;
    }

    @media (max-width: 640px) {
        display: none;
    }
`

const FilterList = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    align-items: flex-start;
`


interface FilterData {
    id: string; 
    label: string;
}

export function Filter(){
    
    const [filterOption, setFilterOption] = useState<FilterData[]>([]);
   
    useEffect(()=> {
        fetch('http://localhost:5000/filters')
        .then(res => res.json())
        .then(res => setFilterOption(res))
        
    },[]);
    
    return (
        <FilterStyled>
            <FilterList>
            {filterOption?.map((filter) => (
                <FilterItem key={filter.id} filter={filter}/>
                ))
            }
            </FilterList>
        </FilterStyled>
    );
}