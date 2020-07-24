import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  display: flex;
  background: #718291;

 
  align-items: center;  
  flex-direction: column;


  form {
    padding: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    background: #CCD3DA;
    align-items: center;
    justify-content: center;

    width: 500px;
    height: 100%;
    border-radius: 20px;

    h1 {
      color: #0C2017;
      margin-bottom: 50px;
      font-weight: bold;
    }

    button {
      width: 250px;
      height: 40px;
      background: #68ACAC;

      border-radius: 10px;
      margin-top: 10px;
      border: 0;

      font-size: 14px;
      font-weight: bold;

      transition: opacity 0.3s;
          
        &:hover {
          opacity: 0.8;
        }

        cursor: pointer;
      }

    input {
      width: 250px;
      height: 40px;
      border-radius: 10px;
      border: none;
      background: #EDF6FF;

      padding: 10px;
      margin-top: 5px;
    }


      
    div.planos {
      display: flex;
      margin-bottom: 40px;
      button {
        background: #13273A;
        width: 100px;
        height: 140px;
        display: flex;
      
        font-size: 18px;
        font-weight: bold;
        margin-left: 25px;
          
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        color: white;
        transition: opacity 0.3s;
          
        &:hover {
          opacity: 0.8;
        }
          
      }       
    }
  } 
  
  > div {
    width: 500px;
    height: 200px;
    margin-top: 30px;
    

    div{
      background: #EDF6FF;
      border-radius: 20px;
      padding: 25px;

      h1 {
        font-size: 24px;
        margin-bottom: 10px;
      }

      h2 {
        color: #761111;
      }
    }
  }
`;
