import React, {useState} from 'react';
import Dialog, {alert, confirm, modal} from './dialog';

export default function () {
  const [x, setX] = useState(false);
  const openModal = () =>{
   const close =  modal( <h1>我是modal <button onClick={()=>close()}>close</button> </h1>)
  }
  return (
    <>
      <div>
        <h1>example1</h1>
        <button onClick={() => setX(!x)}>dialog</button>
        <Dialog visible={x} buttons={
          [
            <button>1</button>,
            <button>2</button>
          ]
        } onClose={() => {
          setX(false);
        }}>
          <div>hi</div>
        </Dialog>
      </div>
      <div>
        <h1>example2</h1>
        <button onClick={() => alert('我是alert')}>alert</button>
      </div>
      <div>
        <h1>example3</h1>
        <button onClick={() => confirm('确定我是confirm吗?',()=>{},()=>{})}>confirm</button>
      </div>
      <div>
        <h1>example4</h1>
        <button onClick={openModal}>modal</button>
      </div>
    </>

  );
}
