import { useDispatch, useSelector  } from "react-redux";
import { changeSearchTerm } from "../store";


const ContactSearch = () => {

    const dispatch = useDispatch();

    const searchTerm = useSelector((state) => {
        return state.contacts.searchTerm;
    })

    const handleSearchTermChange = (e) => {
        dispatch(changeSearchTerm(e.target.value));
    }

    return (
            <div>
                <label className="label">Search by Name</label>
                <input 
                    className="input"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
            </div>
    );
};

export default ContactSearch;