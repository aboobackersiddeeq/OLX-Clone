import React, { useContext, useEffect, useState } from "react";
import "./View.css";
import { postContext } from "../../store/postContext";
import { firebaseContext } from "../../store/context";
import { collection, query, where, getDocs } from "firebase/firestore/lite";
function View() {
  const [userDetails, setuserDetails] = useState();
  const { postDetials } = useContext(postContext);
  const { db } = useContext(firebaseContext);
  const { useid } = postDetials;
  const qer = query(collection(db, "users"), where("userid", "==", useid));
  useEffect(() => {
    async function fetchData() {
      const Snapshot = await getDocs(qer);
      Snapshot.docs.map((doc) => {
        return setuserDetails(doc.data());
      });
    }
    fetchData();
  }, [qer]);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetials.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetials.price} </p>
          <span>{postDetials.name} </span>
          <p>{postDetials.category}</p>
          <span>{postDetials.createdAt}</span>
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p> {userDetails.name}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default View;
