import styled from 'styled-components'

const FilterItemStyled = styled.li`
    display: flex;
    align-items: center;
    padding: 12px 14px;

    &:hover {
        cursor: pointer;
        background-color: rgba(38, 30, 30, 0.04);
    }
`

const FilterLabel = styled.span`
    text-transform: uppercase;
    font-size: 0.6875rem;
    font-weight: 400;
    color: #261e1e;
`

const FilterImg = styled.img`
    height: 20px;
    margin-left: 8px;
`

interface FilterData {
    filter: {id: string, label: string}
}

export function FilterItem({filter}: FilterData){ 
        return(
            <>
            <FilterItemStyled>
            <FilterLabel>{filter.label}</FilterLabel>
            <FilterImg src="/assets/filter.svg"/>
            </FilterItemStyled>
            </>
        );
}

