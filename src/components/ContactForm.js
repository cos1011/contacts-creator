import { changeName, changeSalary, changePosition, addContact  } from "../store";
import { useDispatch, useSelector } from "react-redux";

const ContactForm = () => {

    const dispatch = useDispatch();

    const { name, salary, position } = useSelector((state) => {
        return {
            name: state.form.name,
            salary: state.form.salary,
            position: state.form.position
        };
    });

    const handleChange = e => {
        dispatch(changeName(e.target.value))
    };

    
    const handlePrice = e => {
        const num = parseInt(e.target.value) || 0;
        dispatch(changeSalary(num));
    };

    const handlePosition = e => {
        dispatch(changePosition(e.target.value))
    }


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addContact({name, position, salary}))
    };

    return (
        <div className="form-panel">
            <h4>ADD EMPLOYEE</h4>
            <form onSubmit={handleSubmit} className="form-grid">
                <div className="field-group">
                    <div className="field">
                        <label>NAME</label>
                        <input 
                            onChange={handleChange}
                            value={name} 
                        />
                    </div>
                    <div className="field">
                        <label>POSITION</label>
                        <input 
                            onChange={handlePosition}
                            value={position} 
                            type="text"
                        />
                    </div>
                    <div className="field">
                        <label>SALARY</label>
                        <input 
                            onChange={handlePrice}
                            value={salary || ''} 
                            type="number"
                        />
                    </div>
                    <div>
                        <button onClick={handleSubmit} className="submit-btn">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;