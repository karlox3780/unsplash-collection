import { useState } from "react";
import ReactDOM from "react-dom";

/*type Props = {
    setBoardDetail: any,
    collectionName: any,
    onClose: Function;
    title: string;
};
*/

const ModalAddCollection = () => {
    const ModalRoot = document.getElementById("modal-root") as HTMLElement;
    const [formState, setFormState] = useState({});
    const handleCloseClick = (e: any) => {
        e.preventDefault();
        //onclose();
    };
    function handleChange(e: any) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    function handleSubmit(e: any) {
        e.preventDefault();
        //onClose();
    }
    const modalContent = (
        <div className="modal-overlay">
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header">

                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mt-[16px]">
                                <label className="font-medium text-[12px] text-[#97A3B6]">Board Title</label>
                                <input className="w-full border-[1px] border-[#cdd5e0] rounded-[12px] mt-[6px] p-[10px] font-regular text-[16px] focus:outline-[#3662E3]"
                                    name="title" type="text" placeholder="Enter a board title" onChange={handleChange} required />
                            </div>
                            <div className="bottom-buttons flex justify-end mt-[100px] text-[#fff]">
                                <button className="bg-[#3662E3] flex px-[30px] py-[10px] rounded-[22px] cursor-pointer" onClick={handleSubmit}>
                                    <label className="mr-[5px] text-[14px] cursor-pointer">Save</label>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
    return ReactDOM.createPortal(
        modalContent,
        ModalRoot, null
    );
}

export default ModalAddCollection;