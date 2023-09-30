import { useState } from "react";
import { useParams } from "react-router-dom";
import { editRole } from "../../utilities";

export default function EditRole({onRoleUpdated}) {
    const { id } = useParams()
    const [role, setRole] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const success = await editRole(
          id,
          role
        );
    
        if (success) {
          onRoleUpdated(role);
          setRole("");
        } else {
          console.error("Edit request failed");
        }
      };

    return (
        <div className="editForm">
            <form onSubmit={handleSubmit}>
                <label for="role">Edit role</label>
                <input type="text" id="role" name="role" onChange={(event) => setRole(event.target.value)}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}