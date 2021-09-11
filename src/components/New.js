import Modal from 'react-modal';
import React,{ useState } from 'react';
import Rate from './Rate';



    const New = ({addNewMovie})=>{
        const [title,setTitle] = useState('');
        const [rate, setRate]=useState('');
        const [img, setImg]=useState('');
        const [type, setType]=useState('');
        const [Description, setDescription]=useState('');
          const handleSubmit = (e) => {
            let newMovie = {
              title,
              rate,
              img,
              type,
              Description,
            };
            addNewMovie(e, newMovie);
           
            setTitle('');
            setRate('');
            setImg('');
            setType('');
            setDescription('');
          };
    const [show,setShow]=useState(false)
const toggle=()=>{
    setShow(!show)
}
    return (
        <div className='modal1'>
           < button  style={{backgroundColor:'red',width:'50px',height:'50px',color:'gold',fontSize:'200%'}} onClick={toggle}>+</button>
           < Modal className ='modal'isOpen={show}>
<h1> Add New Movie </h1>
<label> Title </label>
<input placeholder='enter the movie name'  
value={title}
required
onChange={(e)=> setTitle(e.target.value)}/>
<label> Rate</label>
<Rate  rate={rate}  setRatingSearch={setRate}/>
<label> poster</label>
<input placeholder='enter the movie poster'
     type='url'
     name='image'
     value={img}
     required
     onChange={(e) => setImg(e.target.value)}/>
<label> Description</label>
<input placeholder='enter the movie Description'
type='text'
value={Description}
required
onChange={(e) => setDescription(e.target.value)}/>
<label> type</label>
<input placeholder='enter the movie type'
 type='text'
 name='type'
 value={type}
 required
 onChange={(e) => setType(e.target.value)}/>
 
<button onClick={handleSubmit} className='Modal-btn' >
            Submit
            </button>
<button onClick={toggle} style={{width:'100px'}}>close </button>
        </Modal>    
        </div>
    )
    }
    
export default New