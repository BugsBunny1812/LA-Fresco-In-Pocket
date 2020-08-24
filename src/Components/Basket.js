import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Comp-CSS/Basket.css';
import './Comp-CSS/Nav.css';
import Axios from 'axios';
import Cookies from 'js-cookie';
import BasketTable from './BasketList'

let sub=0;

const Bas=props=>(
  <>
  {console.log(props.key)}
  <td>
  <button className="btn">Remove</button>
  </td>
  </>
)





var obj2 = [],cnt=0;


class Basket extends Component{
  constructor(props){
    super(props);

    this.deleteItem=this.deleteItem.bind(this);
    this.state={items:[]};

  }



  

  componentDidMount(){

  console.log(Cookies.get('token'));

  }

  deleteItem(id){
    Axios.delete('http://localhost:5000/users/'+id)
        .then(res=>console.log(res.data));

        this.setState({
            items: this.state.items.filter(el=>el._id!==id)
        })
  }

  Total(){
    let sub=0;
    this.state.items.map(item=>{
      if(item.username==='kuchbhi')
      {
      item.basket.map(prop=>{
      (sub+=prop.price*prop.quantity)
      })
    }
    });
    return <span>{sub}</span>;
  }

  Try(){
    this.state.items.map(curr=>{
    var obj=curr.basket;
    var k=curr.basket;

    if(cnt===1) return

    if(curr.username==='kuchbhi')
    {

    let map= new Map();
    this.state.items.map(c=>{
      c.basket.map(d=>{
        map.set(d.itemname,d.price);
      })
    })

    console.log(obj);

    var holder = {};

obj.forEach(function(d) {
  if (holder.hasOwnProperty(d.itemname)) {
    holder[d.itemname] = parseInt(holder[d.itemname]) + parseInt(d.quantity);

  } else {
    holder[d.itemname] = d.quantity;
  }
});

if(cnt>1) return

for (var prop in holder) {
  obj2.push({ itemname: prop, quantity: holder[prop], price: map.get(prop)});
}

cnt=cnt+1;

    }

console.log(obj2.length);
console.log(cnt);    

})

if(cnt>2) return
console.log(cnt);



  console.log(cnt);
  console.log(obj2);
//  console.log(this.state.items);
/*<tr>
      <td>{current.itemname}</td>
      <td>{current.quantity}</td>
      <td>{current.price}</td>
      <td>{current.quantity*current.price}</td>
      <Bas item={this.state.items} name={current.itemname} deleteItem={this.deleteItem} key={this.state.items._id}/>;
    </tr>*/
/*return obj2.map(current=>{
  return 
    <>
    </>

})*/
}

  




  render(){
  return (
    <>
  <div className="basket">
  <div className="header">
    Your Basket
    <div className="hl"></div>
  </div>
  <button className="offers">View Available Offers</button>
  
  <div className="description">
  <table className="table">
                  <tr className="index">
                      <th>ITEM DESCRIPTION</th>
                      <th>QUANTITY</th>
                      <th>UNIT PRICE</th>
                      <th>SUB TOTAL</th>
                      <th>EDIT</th>
                  </tr>
                  <tbody>
                  {this.Try()}
                  </tbody>
              </table>
  </div>

  <div className="final">
  <Link to="/"><button className="cntshp">Continue Shopping</button></Link>
  <button className="cntshp">Empty Cart</button>
  <div className="payment">
  <h2 className="total">TOTAL</h2>
  <h2 className="amt">Rs. {this.Total()}</h2>
  <br />
  <br />
  <br />
  <div className="hl1"></div>
  <Link to='/checkout'><button className="checkout">CHECKOUT..</button></Link>

  </div>


  </div>


  </div>
<div className="bt-table-div"><BasketTable/></div>


  </>
  )
  }
}

export default Basket;
