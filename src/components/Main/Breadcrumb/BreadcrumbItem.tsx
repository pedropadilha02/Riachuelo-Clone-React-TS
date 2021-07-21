import styled from 'styled-components'

const BreadcrumbItemStyled = styled.li`
    font-size: 0.8125rem;
    font-weight: 600;
    color: #585858;
`

const BreadcrumbLink = styled.a`
    &:hover {
        text-decoration: underline;
        text-decoration-color: black;
    }
`

const BreadcrumbLinkActive = styled.a`
    font-wieght: bold;
    color: black;
    &:hover {
        text-decoration: none;
    }
`

const BreadcrumbSeparador = styled.li`
    margin-left: 8px;
    margin-right: 8px;
    user-select: none;
    color: #585858;

`

interface BreadcrumbData {
    breadcrumb: {id: number, name: string}
}

export function BreadcrumbItem({breadcrumb}: BreadcrumbData){
    
    if(breadcrumb.id != 4) {
        return (
                <>
                <BreadcrumbItemStyled>
                        <BreadcrumbLink>{breadcrumb.name}</BreadcrumbLink>
                </BreadcrumbItemStyled>
                <BreadcrumbSeparador>/</BreadcrumbSeparador>
                </>
        );
}
    
    return (
        <BreadcrumbItemStyled>
            <BreadcrumbLinkActive>{breadcrumb.name}</BreadcrumbLinkActive>
        </BreadcrumbItemStyled>
    );
}