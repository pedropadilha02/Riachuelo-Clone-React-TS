import { useState, useEffect } from "react";
import { BreadcrumbItem } from "./BreadcrumbItem";
import styled from 'styled-components';

const BreadcrumbStyled = styled.div`
    margin-bottom: 16px;
`

const BreadcrumbList = styled.ul`
    display: flex;
    list-style: none;
    align-items: baseline;
    padding: 0;
    margin-top: 0;
`

const BreadcrumbSeparador = styled.li`
    margin-left: 8px;
    margin-right: 8px;
    user-select: none;
    color: #585858;

`

interface BreadcrumbData {
    id: number; 
    name: string;
}

export function Breadcrumb(){
    
    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbData[]>([]);
   
    useEffect(()=> {
        fetch('http://localhost:5000/current')
        .then(res => res.json())
        .then(res => setBreadcrumbs(res))
        
    },[]);
    
    return(
        <BreadcrumbStyled>
            <BreadcrumbList>
                {breadcrumbs?.map((breadcrumb) => 
                    <BreadcrumbItem key={breadcrumb.id} breadcrumb={breadcrumb}/>
                )}
            </BreadcrumbList>
        </BreadcrumbStyled>
    )
}