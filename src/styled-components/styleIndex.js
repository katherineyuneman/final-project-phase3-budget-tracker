import styled from 'styled-components'

const GeneralStyle = styled.div`


`
const Header = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,500&family=Playfair+Display:ital,wght@1,800&display=swap');
  background: #7E685A;
  color: #F8F8F8;
  position: fixed;
  top: 0;
  height: 100px;
  line-height: 20px;
  width: 100vw;
  /* z-index: 10; */
  border-bottom: double 10.5px #E7717D;

  h1 {
      line-height:50px;
      display: flex;
      flex: 70%;
      color: white;
      float: left;
      margin-left: 28px;
      font-size: 2em;
      height: 15px;
      letter-spacing: 1px;
      font-family: "Playfair Display";
      font-style: italic
  }

  nav{
    background-color:#7E685A;
    display: block;
    float: right;
    font-size: 15px;
    /* flex: 30%; */
    /* top: 50px; */
    justify-content: right;
    padding: 20px;
    display: inline-block;
    text-align: right;
    color: white;
    height: 20px,
  }
  .circle{
        align-content: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        /* line-height: 20px; */
        border-radius: 50%;
        text-align: center;
        color: white;
        font-size: 30px;
        padding: .5em;
        /* border: 3px solid #000; */
        background: #AFD275;
    }
  li{
  color: white;
  display: inline-block;
  padding: 0px 10px;
  /* border-radius: 50px; */
  }
  li:hover {
  background-color: #C2B9B0;
  color: white;
  /* height:100%; */
  }
    
`

const DashContainer = styled.div`
    width: 90%;
    margin-bottom: 5em;
    margin: 3em;
    justify-content: center;
    align-items: center;
   
    .negative{
        background-color: #E7717D;
        color: white;
    } 
    .positive{
        background-color: #AFD275;
        color: white;
    }
    .topBar{
            color: white;
            background-color: #C2CAD0;
            /* float: center; */
            display: flex;
            justify-content: center;
            height: 50px;
            width: 97.5%;
            margin-left: .5em;
            align-items: center;     
            border-radius: 5px;
            padding: 0;
    }
    .left{
        width: 60%;
        height: 400px;
        /* display: block; */
        float: left;
        display: flex;
        justify-content: left;
        align-content: center;
        margin-left: 1em;
        margin-bottom: 1em;
        border: solid 3px #7E685A;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  }
    .right{
        width: 35%;
        height: 400px;
        float: right;
        margin-right: 1em;
        margin-bottom: 1em;
        border: solid 3px #7E685A;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
        align-content: center;
        justify-content: center;
        .daysLeft{
            align-content: center;
            justify-content: center;
            margin-left: 45%;
            margin-top: 0em;
            width: 50px;
            height: 50px;
            line-height: 50px;
            border-radius: 50%;
            padding-bottom: 0;
            text-align: center;
            color: white;
            font-style: bold;
            /* border: 3px solid #000; */
            background: #E7717D
        }
        button{
            display:block;
            width: 50%;
            background-color:white;
            color:#FEC90E;
            border: 2px solid #FEC90E;
            border-radius: 5px;
            font-style: bolder;
        }
        button:hover{
            background-color:#FEC90E;
            color:white;
            border: 2px solid white;
        };
        button:active{
            background-color:#FEC90E;
            color:white;
            border: 2px solid white;
            box-shadow: 5px 3px 3px gray;
            font-style: bold;
        }
    }
`


const HomeContainer = styled.div`

  margin: 2em;
  padding-top: 85px;
  h1{
    font-family: "Playfair Display";
  }
  button{
    background-color:#C2B9B0;
    color:white;
    border: 2px solid #E7717D;
    border-radius: 5px;
    font-style: bolder;
    font-size: 20px;
    font-family: "Playfair Display";
    font-style: bolder;
    padding: .5em;
  }
  button:hover{
    background-color:white;
    color:#E7717D;
    border: 2px solid #E7717D;
  };
  button:active{
    background-color:#E7717D;
    color:white;
    border: 2px solid white;
    box-shadow: 5px 3px 3px gray;
    font-style: bold;
  };
`

const Container = styled.div`
  width: 100%;
  margin-left: 1em;
  display: flex;
  flex-wrap: wrap;
  font-family: "Playfair Display";
`

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  /* transition: 0.3s; */
  padding: 2px 16px;
  border-radius: 5px;
  margin: 1em;
  width:165px;
  justify-content: center;
  h5{
    flex-wrap: wrap;
    padding: 2px 10px;
    margin:1em;
    background-color:#7E685A;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-style: italic;
  };
  img{
    width:100%;
    filter: saturate(100%);
    
  };
  img:hover{
    filter: saturate(200%);
  };
  h3{
    height: 30px;
  };
  .stock{
    background-color:#AFD275;
    color:white
  };
  h4{
    height: 20px;
  };
  h6{
    font-family: "Montserrat", sans-serif;
  };
  .link{
    color:#E7717D;
  };
  .link:hover{
    color:#AFD275;
  };
  .link:active{
    color:#E7717D;
  };
  .deleteButton{
    width: 100%;
    background-color:white;
    color:#AFD275;
    border: 0px;
    font-size: 25px;
  };
  .deleteButton:hover{
    color:white;
    font-size: 25px;
  }
  .otherButton{
    display:block;
    width: 100%;
    background-color:white;
    color:#AFD275;
    border: 2px solid #AFD275;
    border-radius: 5px;
    font-style: bolder;
  }
  .otherButton:hover{
    background-color:#AFD275;
    color:white;
    border: 2px solid white;
  };
  .otherButton:active{
    background-color:#AFD275;
    color:white;
    border: 2px solid white;
    box-shadow: 5px 3px 3px gray;
    font-style: bold;
  };
  `


const ProductFeatureContainer = styled.div`
  height: auto;
  /* line-height: 20px; */
  width: 100%;
  display: block;
  font-family: "Playfair Display";
  justify-content: center;
  margin-left: 0;
  margin-top: 4em;
  padding-top: 60px;
`

const DropDown = styled.div`
  width: 100%;
  h4{
    margin:.5em;
  }
  select{
    margin-bottom: 1em;
    position: relative;
    background-color: #FEC90E;
    font-family:"Montserrat";
    color: white;
    border: solid white;
    border-radius: 6px;
  }
`

const SearchStyle = styled.div`
  width: 100%;
  margin: .5em;
  h4{
    margin-bottom:.5em;
  }
  input[type=text] {
    margin-bottom: 1em;
    position: relative;
    /* background-color: #FEC90E; */
    font-family:"Montserrat";
    /* color: white; */
    font-style: none;
    border: solid, white;
    border-radius: 5px;
}
input[type=submit], input[type=button]{
    background-color:white;
    color:#FEC90E;
    border: 2px solid #FEC90E;
    border-radius: 5px;
    font-style: bolder;
  };
  input[type=submit]:active,input[type=button]:active{
    background-color:#FEC90E;
    color:white;
    border: 2px solid white;
    box-shadow: 5px 3px 3px gray;
    font-style: bold;
  }
`

const CartDiv = styled.div`
  width: 100%;
  height: auto;
  margin-top:4em;
  .left{
    width: 100%;
    display: block;
    padding-left: 2em;
  }
  .right{
    padding-left: .2em;
    padding-right: .2em;
    padding-top: 1em;
    padding-bottom: 2em;
    width: 20%;
    height: auto;
    display: block;
    float: right;
    margin-right: 1em;
    border: solid 1.5px gray;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
      button{
        display:block;
        width: 100%;
        background-color:white;
        color:#FEC90E;
        border: 2px solid #FEC90E;
        border-radius: 5px;
        font-style: bolder;
      }
      button:hover{
        background-color:#FEC90E;
        color:white;
        border: 2px solid white;
      };
      button:active{
        background-color:#FEC90E;
        color:white;
        border: 2px solid white;
        box-shadow: 5px 3px 3px gray;
        font-style: bold;
      }
    }
`

const CartCardStyle = styled.div`
    flex-wrap: wrap;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    column-count: 4;
    border: solid 2px gray;
    border-radius: 5px;
/* display: inline-block; */
    font-size: 14px;
    flex-direction:row;
  font-family: "Montserrat";
  justify-content: left;
  /* margin: 3em; */
  margin-bottom: .2em;
  margin-top:.2em;
  padding: .5em;
  width:70%;
  height: 100px;
  overflow: hidden;
  .amount{
      color:#E7717D;
  }
    button{
        display:block;
        width: 50%;
        background-color:white;
        color:#FEC90E;
        border: 0px;
    }
      button:hover{
        border: 0px;
        border-radius: 5px;
        font-style: bolder;
        color:white;
        box-shadow: 5px 3px 3px gray;
    };
      button:active{
        background-color:#FEC90E;
        color:white;
        border: 2px solid white;
        box-shadow: 5px 3px 3px gray;
        font-style: bold;
    }
`
const LeftPiece = styled.div`
overflow:hidden;
  position: left;
  img{
    /* padding-left: 5em; */
    width:75px;
    border-radius: 5px;
    overflow:hidden;
  }
`
const MiddleDescription = styled.div`
  font-style:bold;
  justify-content:center;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  padding-left: 0em;
  padding-top: 1em;
  width:150%;
  top:0;
`

const Quantity = styled.div`
  justify-content:center;
  /* width: 100%; */
  
  padding-top:1em;
  margin-left: 4em;
  button{
    display:block;
    background-color:white;
    color:#FEC90E;
    border: 1px solid #FEC90E;
    border-radius: 5px;
    font-style: bolder;
  }
  button:hover{
    background-color:#FEC90E;
    color:white;
    border: 2px solid white;
  };
  button:active{
    background-color:#FEC90E;
    color:white;
    border: 2px solid white;
    box-shadow: 5px 3px 3px gray;
    font-style: bold;
  };
`
const TotalCost = styled.div`
  padding-top:2em;
  width:50%;
  padding-left: 4em;
  justify-content:right;
  height: auto;
`


const PopupCheckout = styled.div`
/* padding:150px; */
.popup-box {
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
}
 
.box {
  position: relative;
  width: 70%;
  margin: 0 auto;
  height: auto;
  max-height: 70vh;
  margin-top: calc(100vh - 85vh - 20px);
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  border: 1px solid #999;
  overflow: auto;
}
 
.close-icon {
  content: 'x';
  cursor: pointer;
  position: fixed;
  right: calc(15% - 30px);
  top: calc(100vh - 85vh - 33px);
  background: #ededed;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  border: 1px solid #999;
  font-size: 20px;
}
`

const DetailCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  /* transition: 0.3s; */
  padding: 2px 16px;
  border-radius: 5px;
  margin: 1em;
  width:auto;
  justify-content: center;
  h5{
    padding: 2px 10px;
    margin:1em;
    background-color:#C2CAD0;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-style: italic;
  };
  img{
    width:25%;
    filter: saturate(100%);
    
  };
  h3{
    height: 30px;
  };
  .stock{
    background-color:#CB4C4E;
    color:white
  };
  h6{
    font-family: "Playfair Display"
  };
`
const DetailButton = styled.div`
  justify-content:center;
  margin: 1em;
  button{
    display:block;
    background-color:white;
    color:#FEC90E;
    border: 1px solid #FEC90E;
    border-radius: 5px;
    font-style: bolder;
    padding: 1em;
  }
  button:hover{
    background-color:#FEC90E;
    color:white;
    border: 2px solid white;
  };
  button:active{
    background-color:#FEC90E;
    color:white;
    border: 2px solid white;
    box-shadow: 5px 3px 3px gray;
    font-style: bold;
  };

`




export {
  GeneralStyle, DashContainer, HomeContainer, Container, Card, Header, ProductFeatureContainer, CartCardStyle,
  LeftPiece, MiddleDescription, Quantity,TotalCost, DropDown, SearchStyle,
  CartDiv,PopupCheckout, DetailCard, DetailButton
}