import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Hotel_item = (props) => {
    const propsdata=props.indexdata;
    console.log(propsdata);
    return (

<Card style={{ width: '50%',border:"0" }}className='my-3'>
    <div className='d-flex'>
    <div style={{ width: '40%'}}className='h-96 d-flex align-items-center'>
      <Card.Img variant="" src={propsdata.image_url}style={{height:"100%"}}className='my-auto' /></div>
      <div style={{ width: '60%'}}className='py-0'>
      <Card.Body>
        <h5>{propsdata.title}</h5>
        <Card.Text>
        
          <h6 className='my-1'>  {propsdata.facilities.join(",")}</h6>

           <p>{propsdata.details.slice(0,100)}...</p> 
        
        </Card.Text>
        <div>
            <div>
           {propsdata.rating.number} 
            </div>
            <div>
            {propsdata.total_view}</div>
        </div>
      </Card.Body></div></div>
    </Card>
      
    )
};

export default Hotel_item;