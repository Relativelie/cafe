import { Checkbox } from "components";



const Filters = () => {
    return(
        <div>
            <Checkbox label="text" checked={true} onChange={(val) => console.log()}/>
        </div>
    )
}

export default Filters;