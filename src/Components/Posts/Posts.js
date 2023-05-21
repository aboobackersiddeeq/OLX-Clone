
import React, { useContext, useEffect, useState } from 'react';
import {   collection, getDocs } from 'firebase/firestore/lite';

import Heart from '../../assets/Heart';
import { firebaseContext } from '../../store/context';
import './Post.css';
import { postContext } from '../../store/postContext';
import { useHistory } from 'react-router-dom';

function Posts() {
  
const {db}= useContext(firebaseContext)
const Collection = collection(db, 'product');
const [product,setProduct]=useState([])
const {setPost}=useContext(postContext)
const history=useHistory()
useEffect(()=>{
  async function fetchData() {

    const Snapshot = await getDocs(Collection);
    const List = Snapshot.docs.map(doc => {
      return{ ...doc.data(),id:doc.id}
    })
    setProduct(List)
  }
  fetchData();
} )
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          { product.map(pro=>(
            <div
            className="card" onClick={()=>{
                setPost(pro)
                history.push('/view-post')
            }}>
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={pro.url}alt="Img" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {pro.price}</p>
              <span className="kilometer">{pro.name}</span>
              <p className="name"> {pro.category}</p>
            </div>
            <div className="date">
              <span>{pro.createdAt}</span>
            </div>
          </div>
           ))} 

          
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
