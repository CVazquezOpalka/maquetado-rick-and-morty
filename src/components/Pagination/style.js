import styled from 'styled-components'
export const PaginationContainer = styled.div`
  .pagination {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 20px;
  }
  .next {
    padding: 7px 13px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
      
    }
  }
  .prev {
    padding: 7px 13px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
     
    }
  }
  .page-item{
     color: #fff;
     font-weight: bold;
     text-align: center;
     display: flex;
     align-items: center; justify-content: center;
     gap: 10px;
     span{
      font-weight: 400;
     }
  }
`;