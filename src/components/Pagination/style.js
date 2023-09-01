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
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: 5px;
    background-color: #fff;
    font-weight: bold;
    cursor: pointer;
    pointer-events: all;
  }
  .page-link{
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;