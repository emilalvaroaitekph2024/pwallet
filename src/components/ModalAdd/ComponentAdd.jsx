import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css"
import {
  DivSetting,
  DivDataSum,
  Sum,
  
  Coment,
  DivBtn,
  BtnAdd,
  BtnCancel,
} from './StyledContent';
import { useDispatch, useSelector } from 'react-redux/es/exports.js';
import { createTransaction } from 'redux/transactionsController/operations';
import { getCat } from 'redux/categories/categories-selectors';
import { useState } from 'react';

const AddComponent = () => {

  const [data, getData] = useState(new Date());
  // const [type, getType] = useState('INCOME');
  // const [category, getCategory] = useState('');
  const [comment, getComment] = useState('');
  const [amount, getAmount] = useState('');
  const getCategory = useSelector(getCat);
  const neededCat = getCategory.find(cat => cat.type === 'INCOME');
  // console.log(data);
  const dispatch = useDispatch();
  const handleChange = e => {
    if (e.target.name === 'sum') {
      getAmount(e.currentTarget.value);
      console.log(e.currentTarget.value);
    } else if (e.target.name === 'data') {
      getData(new Date().toISOString());
      // getData(e.currentTarget.value);
      console.log(data);
    } else if (e.target.name === 'comment') {
      console.log(e.currentTarget.value);
      getComment(e.currentTarget.value);
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    const operation = {
      transactionDate: data,
      type: neededCat.type,
      categoryId: neededCat.id,
      comment: comment,
      amount: amount,
    };
    dispatch(createTransaction(operation));
  };

  return (
    <>
      <DivSetting className="SetingTransaction">
        <form onSubmit={handleSubmit}>
          <DivDataSum>
            <Sum name="sum" placeholder="0.00" onChange={handleChange}></Sum>
            <Datetime   dateFormat={true} timeFormat={false} value={data }name="data" onChange={handleChange}/>
           
          </DivDataSum>

          <Coment
            name="comment"
            placeholder="Comment"
            onChange={handleChange}
          ></Coment>
        </form>
      </DivSetting>
      <DivBtn className="Btn">
        <BtnAdd type="submit" onClick={handleSubmit}>
          ADD
        </BtnAdd>
        <BtnCancel>CANCEL</BtnCancel>
      </DivBtn>
    </>
  );
};
export default AddComponent;