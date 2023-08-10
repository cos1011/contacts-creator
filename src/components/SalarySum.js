import { useSelector } from "react-redux";

const SalarySum = () => {
    
    const totalSalary = useSelector(({ contacts: {data, searchTerm} }) => {
        return data.filter((contact) => {
            return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
        }).reduce((acc, contact) => acc + contact.salary, 0);
    });

    return (
        <div>
            Total Salary: ${totalSalary}
        </div>
    );
};

export default SalarySum;