import '../components/css/buttons.css'
import { Link } from 'react-router-dom';
function EditBtn(){
    return(
<Link to="/dashboard/list/edit"><button className="editButton"><span class="material-symbols-outlined">edit</span></button></Link> 
    );
}

export default EditBtn;