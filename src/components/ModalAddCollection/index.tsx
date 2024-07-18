import './index.css';
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

type Props = {
    //setBoardDetail: any,
    //collectionName: any,
    onClose: Function;
    //title: string;
};

const ModalAddCollection = ({ onClose }: Props) => {
    const ModalRoot = document.getElementById("modal-root") as HTMLElement;
    const [formState, setFormState] = useState({});
    const ref = useRef<any>(null);

    useEffect(() => {
        const handleOutSideClick = (event: any) => {
            if (!ref.current?.contains(event.target)) {
                onClose();
            }
        };

        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref, onClose]);

    const handleCloseClick = (e: any) => {
        e.preventDefault();
        onClose();
    };
    function handleChange(e: any) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    function handleSubmit(e: any) {
        e.preventDefault();
        //onClose();
    }
    const modalContent = (
        <div className="modal-overlay w-[100vw] h-[100vh] absolute top-0 left-0 flex justify-center">
            <div className="modal-wrapper">
                <div className="modal mt-[113px] p-[20px] bg-[#FFFFFF] border border-[#97A3B6] rounded" ref={ref}>
                    <div className="modal-header">

                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="">
                                <label className="font-medium text-[12px] text-[#97A3B6]">Collection Name</label>
                                <input className="w-full border-[1px] border-[#cdd5e0] text-[#97A3B6] rounded-[12px] mt-[6px] p-[10px] font-regular text-[16px] focus:outline-[#97A3B6]"
                                    name="title" type="text" placeholder="Enter a Collection Name" onChange={handleChange} required />
                            </div>
                            <div className="bottom-buttons flex justify-center mt-[20px] text-[#fff]">
                                <button className="bg-[#97A3B6] flex px-[30px] py-[10px] rounded-[22px] cursor-pointer" onClick={handleSubmit}>
                                    <label className="mr-[5px] text-[14px] cursor-pointer">Create</label>
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